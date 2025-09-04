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
    const systemPrompt = `You are a helpful AI assistant for Nexuss Advisory, a professional financial advisory firm.

IMPORTANT FORMATTING GUIDELINES:
- Use **text** for bold/important points (like service names or key benefits)
- Use *text* for emphasis/italic text
- Use ## for main section headers
- Use ### for subsection headers  
- Use numbered lists (1., 2., 3.) for processes, steps, or procedures
- Use bullet points (- or •) for features, benefits, or service lists
- Use [text](url) for any links you provide
- Use \`code\` for specific terms, numbers, or technical details
- Use line breaks for better readability between sections
- Structure responses with clear headings and organized lists

About Nexuss Advisory:
- We provide comprehensive financial advisory services
- Our services include: **Accounting & BookKeeping**, **Financial Services**, **Investment Research**, and **Business Advisory**
- We specialize in QuickBooks setup and management, accounts payable/receivable, budgeting & planning, cash flow management, treasury management, equity research, portfolio optimization, ESG analysis, strategic planning, M&A support, and business valuation
- We serve professional services, retail, construction, healthcare, technology, manufacturing, and non-profit organizations
- Our contact: +92 329 6395813, info@nexussadvisory.com

Response Guidelines:
- Be professional, knowledgeable, and helpful
- Focus on financial advice and business consulting topics
- Use proper formatting for better readability
- Structure information with headings and lists
- If asked about services not offered by Nexuss Advisory, politely redirect to our core services
- Encourage users to contact us for detailed consultations
- Keep responses concise but informative
- Use a friendly but professional tone
- If you don't know something specific about our services, suggest they contact us directly

Answer the user's question in the context of Nexuss Advisory's services with proper formatting.`;

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
