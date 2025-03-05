import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

export async function POST(request: Request) {
    try {
        // Parse and validate the request body
        const body = await request.json();
        const result = contactFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: "Validation failed", details: result.error.format() },
                { status: 400 }
            );
        }

        const { name, email, message } = result.data;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD, // Use an app password for Gmail
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'lucasbecker.dev@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
} 