export async function POST(request) {
  try {
    const { email, babyAge } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Correo electrónico inválido." }, { status: 400 });
    }

    const API_KEY = process.env.MAILERLITE_API_KEY;
    const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

    // Crear o actualizar el suscriptor con campos personalizados
    const subscriberRes = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        groups: [GROUP_ID],
        fields: {
          ...(babyAge ? { baby_age_months: String(babyAge) } : {}),
        },
      }),
    });

    const subscriberData = await subscriberRes.json();

    if (!subscriberRes.ok && subscriberRes.status !== 200 && subscriberRes.status !== 201) {
      console.error("MailerLite error:", subscriberData);
      return Response.json({ error: "No se pudo registrar el correo." }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Subscribe API error:", error);
    return Response.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
