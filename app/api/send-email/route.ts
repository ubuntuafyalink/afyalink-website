import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, message, category, facilityName, facilityType, region, phone, staffCount } = body;
    
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }
    
    // Create email content
    const emailContent = `
      New Contact Form Submission from Ubuntu AfyaLink Website
      
      Category: ${category || 'General Inquiry'}
      ${name ? `Name: ${name}` : ''}
      ${email ? `Email: ${email}` : ''}
      ${phone ? `Phone: ${phone}` : ''}
      
      ${facilityName ? `Facility Name: ${facilityName}` : ''}
      ${facilityType ? `Facility Type: ${facilityType}` : ''}
      ${region ? `Region: ${region}` : ''}
      ${staffCount ? `Staff Count: ${staffCount}` : ''}
      
      Message:
      ${message}
      
      ---
      This message was sent from the Ubuntu AfyaLink website contact form.
    `;
    
    // Send email using SMTP
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'info@ubuntuafyalink.co.tz',
      subject: `Ubuntu AfyaLink Contact: ${category || 'General Inquiry'}${name ? ` - ${name}` : ''}`,
      text: emailContent,
    };
    
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Email API endpoint' },
    { status: 200 }
  );
}
