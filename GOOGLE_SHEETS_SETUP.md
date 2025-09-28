# Google Sheets Integration Setup

## Steps to Configure Google Sheets for Lead Collection

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**

### 2. Create Service Account
1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Fill in the service account details
4. Click **Create and Continue**

### 3. Generate Credentials
1. Click on the created service account
2. Go to the **Keys** tab
3. Click **Add Key** > **Create New Key**
4. Select **JSON** format
5. Download the JSON file

### 4. Extract Credentials
From the downloaded JSON file, copy:
- `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `private_key` → `GOOGLE_PRIVATE_KEY` (keep the `\n` characters as is)

### 5. Create Google Sheet
1. Create a new Google Sheet
2. Copy the Sheet ID from the URL: 
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   ```
3. Share the sheet with the service account email (give Editor access)

### 6. Environment Variables
Add to your `.env.local` file:
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_google_sheet_id_from_url
```

### 7. Test the Integration
1. Start your development server
2. Navigate to a service category page
3. Click on any service to open the lead modal
4. Fill out and submit the form
5. Check your Google Sheet for the new lead entry

## Sheet Structure
The API will automatically create a "Leads" sheet with the following columns:
- Timestamp
- Name  
- Email
- Phone
- Service Category
- Service Name
- Message
- Status

## Troubleshooting
- Make sure the service account has access to the Google Sheet
- Verify that the Google Sheets API is enabled in your project
- Check that the private key includes the proper line breaks (`\n`)
- Ensure the sheet ID is correct (without any extra characters)