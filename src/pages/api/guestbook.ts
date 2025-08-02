import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { message } = await request.json();
    
    if (!message || message.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Message cannot be empty' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // For now, just log the message and you can check your server logs
    // To actually email, you'll need to set up an email service
    console.log('Guestbook message received:', message);
    console.log('To email this to farooq.qureshi@outlook.com, set up an email service like Resend');

    // TODO: Set up email service (Resend, SendGrid, etc.)
    // For now, the message is just logged to console
    // You can check your deployment logs to see the messages

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Message sent successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Guestbook error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to send message' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 