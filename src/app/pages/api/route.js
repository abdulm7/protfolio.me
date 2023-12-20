import { NextResponse } from 'next/server';


import nodemailer from 'nodemailer';

export async function POST(req, res) {

    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const data = await req.json()

    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_EMAIL,
            pass: process.env.NEXT_PASS,
        },
    });

    try {
        // Send email
        const info = await transporter.sendMail({
            from: `Message from ${name} <${process.env.NEXT_EMAIL}>`,
            to: process.env.NEXT_RECEIVER,
            replyTo: email,
            subject: `abdulm.me: Contact Form Submission`,
            html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>`,
        });

        return NextResponse.json(`${JSON.stringify(info)}`)
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json('Failed', error)
    }

}