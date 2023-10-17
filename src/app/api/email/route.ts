import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

export async function POST(req: Request) {
  const {
    firstName,
    lastName,
    email,
    company,
    message,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
  } = await req.json();

  const content = {
    to: 'info@ascendhiring.com',
    from: 'wfoster@ascendhiring.com', // Replace with your SendGrid email sender
    subject: 'New Waitlist Form Submission',
    text: `Email: ${email} \n\nName: ${firstName} ${lastName} \n\nCompany: ${company} \n\nMessage: ${message}`,
  };

  try {
    await sgMail.send(content);
    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email', error);
    return NextResponse.error();
  }
}
