import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS, // Your Gmail app password
            },
        });

        // Email content to you
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `Portfolio Contact: ${subject || 'New Message from ' + name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                    <div style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 28px;">New Portfolio Contact</h1>
                    </div>
                    
                    <div style="padding: 30px;">
                        <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
                            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px;">Contact Information</h2>
                            <p style="margin: 8px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
                            <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
                            <p style="margin: 8px 0; color: #374151;"><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
                        </div>
                        
                        <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; border: 1px solid #e5e7eb;">
                            <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">Message:</h3>
                            <div style="line-height: 1.6; color: #4b5563; background-color: #f9fafb; padding: 20px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
                        </div>
                        
                        <div style="margin-top: 30px; padding: 20px; background-color: #f0f9ff; border-radius: 8px; border: 1px solid #bfdbfe;">
                            <p style="margin: 0; color: #1e40af; font-size: 14px; text-align: center;">
                                <strong>Quick Reply:</strong> 
                                <a href="mailto:${email}?subject=Re: ${subject || 'Your Portfolio Inquiry'}" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">Reply via Email</a>
                            </p>
                        </div>
                    </div>
                    
                    <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                        <p style="margin: 0; color: #6b7280; font-size: 14px;">
                            Received on ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
                        </p>
                    </div>
                </div>
            `,
            replyTo: email, // Allow direct reply to the sender
        };

        // Send email to you
        await transporter.sendMail(mailOptions);

        // Send confirmation email to the user
        const confirmationMail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting me! 🚀',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                    <div style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 28px;">Thank You! 🎉</h1>
                    </div>
                    
                    <div style="padding: 30px;">
                        <p style="font-size: 18px; color: #1f2937; margin-bottom: 20px;">Hi ${name},</p>
                        
                        <p style="color: #4b5563; line-height: 1.6; margin-bottom: 25px;">
                            Thank you for reaching out through my portfolio! I've received your message and I'm excited to connect with you.
                        </p>
                        
                        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin: 25px 0;">
                            <h3 style="color: #1e40af; margin: 0 0 10px 0;">What happens next?</h3>
                            <ul style="color: #1f2937; margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;">I'll review your message carefully</li>
                                <li style="margin-bottom: 8px;">You'll hear back from me within 24 hours</li>
                                <li style="margin-bottom: 8px;">We can schedule a call if needed</li>
                            </ul>
                        </div>
                        
                        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
                            <p style="margin: 0 0 10px 0; color: #374151;"><strong>Your message:</strong></p>
                            <p style="color: #6b7280; font-style: italic; margin: 0; line-height: 1.5;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
                        </div>
                        
                        <p style="color: #4b5563; line-height: 1.6;">
                            In the meantime, feel free to check out my other projects on 
                            <a href="https://github.com/NehaSharma-10/" style="color: #3b82f6; text-decoration: none;">GitHub</a> 
                            or connect with me on 
                            <a href="https://www.linkedin.com/in/nehasharma8529/" style="color: #3b82f6; text-decoration: none;">LinkedIn</a>.
                        </p>
                        
                        <p style="color: #1f2937; margin-top: 30px;">
                            Best regards,<br>
                            <strong>Neha Sharma</strong><br>
                            <span style="color: #6b7280; font-size: 14px;">Frontend Developer</span>
                        </p>
                    </div>
                    
                    <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                        <p style="margin: 0; color: #6b7280; font-size: 12px;">
                            This is an automated confirmation. Please don't reply to this email.
                        </p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(confirmationMail);

        return NextResponse.json(
            {
                success: true,
                message: 'Message sent successfully! Check your email for confirmation. I\'ll get back to you within 24 hours.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        // Return different error messages based on the error type
        if (error.code === 'EAUTH') {
            return NextResponse.json(
                { error: 'Email service authentication failed. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to send message. Please try contacting me directly at shrmatwinkle246@gmail.com' },
            { status: 500 }
        );
    }
}