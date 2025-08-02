import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    
    const { data, error } = await resend.emails.create({
      from: 'Farooq Qureshi <noreply@farooqqureshi.com>',
      to: [email],
      subject: 'Welcome to my writing!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; margin-bottom: 20px;">Welcome!</h1>
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            Thanks for subscribing to my writing. I'll send you updates when I publish new posts.
          </p>
          <p style="color: #666; line-height: 1.6;">
            Best regards,<br>
            Farooq
          </p>
        </div>
      `
    });
    
    if (error) {
      console.error('Resend error:', error);
      throw error;
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Subscription successful' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Subscription error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to process subscription' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 