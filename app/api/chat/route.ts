import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Initialize Groq client
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
      defaultHeaders: {
        "Groq-Model-Version": "latest"
      }
    });

    // System prompt for Nexuss Advisory context
    const systemPrompt = `You are Maddy, Nexuss Advisory’s AI assistant.
Your role is to provide short, clear, and well-formatted responses.

Guidelines:
- Keep replies concise (2–4 sentences max).  
- Use lists, bullet points, or line breaks for clarity.  
- Use simple Markdown for formatting (bold, lists, links).  
- Focus on solutions, not fluff.  
- Maintain a friendly, professional tone.  

Key Responsibilities:
Explain Nexuss Advisory’s services: Accounting & Compliance, Financial Services, Transactional Advisory, Investment Research & Advisory, and Data-Driven Insights & Analytics.
Highlight expertise: QuickBooks setup, bookkeeping, accounts payable/receivable, budgeting, cash flow, treasury management, equity research, portfolio optimization, ESG analysis, strategic planning, M&A, and valuation.
Show how Nexuss Advisory helps businesses with growth, financial clarity, and strategic decisions.
If users want detailed discussions → guide them to: Contact Us
 or email info@nexussadvisory.com
 / call +92 329 6395813.`

    console.log('Making request to Groq API...');

    // Try different models in order of preference
    const models = [
      'llama-3.3-70b-versatile',
      'llama-3.1-70b-versatile', 
      'llama3-70b-8192',
      'mixtral-8x7b-32768'
    ];

    let chatCompletion;
    let lastError;

    for (const model of models) {
      try {
        console.log(`Trying model: ${model}`);
        
        chatCompletion = await groq.chat.completions.create({
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: message
            }
          ],
          model: model,
          temperature: 0.7,
          max_tokens: 500,
          top_p: 1,
          stream: false,
          stop: null
        });

        console.log('Groq API Response received successfully');
        break; // Success, exit the loop
        
      } catch (modelError) {
        console.log(`Model ${model} failed:`, modelError instanceof Error ? modelError.message : 'Unknown error');
        lastError = modelError;
        continue;
      }
    }

    if (!chatCompletion) {
      throw lastError || new Error('All models failed');
    }

    const botResponse = chatCompletion.choices[0]?.message?.content || 
      'I apologize, but I\'m having trouble processing your request right now. Please try again or contact us directly at +92 329 6395813.';

    return NextResponse.json({ message: botResponse });

  } catch (error: unknown) {
    console.error('Groq API Error Details:');
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    
    // Provide a helpful fallback response
    const fallbackResponse = `Hello! I'm your Nexuss Advisory AI assistant. I'm currently experiencing some technical connectivity issues, but I'm here to help you with information about our services:

**🏦 Accounting & BookKeeping**
• QuickBooks setup and management
• Accounts payable/receivable services
• Monthly bookkeeping and reconciliation

**💰 Financial Services**
• Budgeting and financial planning
• Cash flow management
• Treasury management services

**📈 Investment Research**
• Equity research and analysis
• Portfolio optimization
• ESG analysis and screening

**🤝 Business Advisory**
• Strategic planning and consulting
• M&A support and due diligence
• Business valuation services

**Contact our team directly:**
📞 +92 329 6395813
📧 info@nexussadvisory.com

What specific financial service can I help you learn more about today?`;

    return NextResponse.json({ message: fallbackResponse });
  }
}
