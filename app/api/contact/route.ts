import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Interface for contact form data
interface ContactFormData {
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
  timestamp: string;
  location?: string;
  timezone?: string;
}

export async function POST(request: NextRequest) {
  try {
    const contactData: ContactFormData = await request.json();

    // Validate required fields
    if (!contactData.firstName || !contactData.email || !contactData.phone || !contactData.subject) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate privacy checkbox
    if (!contactData.privacy) {
      return NextResponse.json(
        { error: 'Privacy policy agreement is required' },
        { status: 400 }
      );
    }

    // Google Sheets integration
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

    if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
      console.error('Missing Google Sheets credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create JWT auth client
    const serviceAccountAuth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize Google Sheet
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);

    // Load document info and worksheets
    await doc.loadInfo();
    console.log('Available sheets:', Object.keys(doc.sheetsByTitle));
    
    // Get or create the 'contactForm' sheet specifically
    let sheet = doc.sheetsByTitle['contactForm'];
    if (!sheet) {
      console.log('contactForm sheet not found, creating new sheet...');
      sheet = await doc.addSheet({ 
        title: 'contactForm',
        headerValues: [
          'Timestamp (Pakistan)',
          'Name',
          'Email',
          'Phone',
          'Subject',
          'Message',
          'Privacy Agreed',
          'Location',
          'Status'
        ]
      });
      console.log('contactForm sheet created successfully');
    } else {
      console.log('Using existing contactForm sheet');
      // Load the sheet data to ensure headers are available
      try {
        await sheet.loadHeaderRow();
        // Check if headers exist
        if (!sheet.headerValues || sheet.headerValues.length === 0) {
          console.log('No headers found, adding headers to existing sheet...');
          await sheet.setHeaderRow([
            'Timestamp (Pakistan)',
            'Name',
            'Email',
            'Phone',
            'Subject',
            'Message',
            'Privacy Agreed',
            'Location',
            'Status'
          ]);
          console.log('Headers added to existing contactForm sheet');
        } else {
          console.log('Existing headers found:', sheet.headerValues);
        }
      } catch (error) {
        console.log('Error loading headers, setting new headers:', error instanceof Error ? error.message : 'Unknown error');
        await sheet.setHeaderRow([
          'Timestamp (Pakistan)',
          'Name',
          'Email',
          'Phone',
          'Subject',
          'Message',
          'Privacy Agreed',
          'Location',
          'Status'
        ]);
        console.log('New headers set for contactForm sheet');
      }
    }

    // Prepare the row data with Pakistan timezone
    const pakistanTime = new Date(contactData.timestamp).toLocaleString('en-US', {
      timeZone: contactData.timezone || 'Asia/Karachi',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });

    const rowData = {
      'Timestamp (Pakistan)': pakistanTime,
      'Name': contactData.firstName,
      'Email': contactData.email,
      'Phone': contactData.phone,
      'Subject': contactData.subject,
      'Message': contactData.message || 'No message provided',
      'Privacy Agreed': contactData.privacy ? 'Yes' : 'No',
      'Location': contactData.location || 'Pakistan',
      'Status': 'New'
    };

    console.log('Adding row data:', rowData);

    // Add the contact data to the contactForm sheet
    await sheet.addRow(rowData);
    
    console.log('Contact form data successfully added to contactForm sheet');

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully to contactForm sheet',
        contactData: {
          name: contactData.firstName,
          email: contactData.email,
          subject: contactData.subject
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Provide more specific error information
    let errorMessage = 'Internal server error';
    if (error instanceof Error) {
      if (error.message.includes('Unable to parse')) {
        errorMessage = 'Google Sheets authentication failed';
      } else if (error.message.includes('not found')) {
        errorMessage = 'Google Sheet not found or access denied';
      } else if (error.message.includes('PERMISSION_DENIED')) {
        errorMessage = 'Permission denied to access Google Sheet';
      } else {
        errorMessage = `Processing error: ${error.message}`;
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}