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
    const { empresa, email, telefono, producto, cantidad, mensaje } = body;
    console.log('Contact API Request received:', body);

    if (!email || !empresa) {
      return NextResponse.json({ error: 'Email and Empresa are required' }, { status: 400 });
    }

    // Send email to the shop
    const data = await resend.emails.send({
      from: 'Web Cestería <onboarding@resend.dev>',
      to: ['cestvic10110@gmail.com'],
      subject: `Nueva consulta web: ${empresa}`,
      html: `
        <div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
          <h2 style="color: #b5843a; border-bottom: 2px solid #b5843a; padding-bottom: 10px;">Nueva Consulta de Contacto</h2>
          <p>Has recibido un nuevo mensaje desde el formulario de contacto de la web.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Empresa/Nombre:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${telefono || 'No proporcionado'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Producto:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${producto || 'No especificado'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Cantidad:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${cantidad || 'No especificada'}</td>
            </tr>
          </table>

          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
            <p style="font-weight: bold; margin-top: 0;">Mensaje / Detalles adicionales:</p>
            <p style="white-space: pre-line;">${mensaje || 'Sin detalles adicionales.'}</p>
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999; text-align: center;">Este es un mensaje automático enviado desde el formulario de la página de contacto.</p>
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
