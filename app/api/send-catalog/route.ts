import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing in environment variables');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }
  const resend = new Resend(apiKey);
  try {
    const body = await request.json();
    const { email, company } = body;
    console.log('API Request received:', body);

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send notification email to the shop
    const data = await resend.emails.send({
      from: 'Web Cesteria <onboarding@resend.dev>',
      to: ['shop@cesteriavicent.es', 'cestvic10110@gmail.com'],
      subject: `enviar catalogo - ${email}`,
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #b5843a;">Nueva solicitud de catálogo</h2>
          <p>Se ha recibido una nueva solicitud desde el formulario de la web.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Acción requerida:</strong> Enviar catalogo y lista</p>
          <p><strong>Email del cliente:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">Este es un mensaje automático enviado desde el formulario de la página de inicio.</p>
        </div>
      `,
    });

    console.log('Resend Response Data:', data);

    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
