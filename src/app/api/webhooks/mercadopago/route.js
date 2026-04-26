import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { client, Payment } from "@/lib/mercadopago";
import * as admin from "firebase-admin";

export async function POST(req) {
  try {
    const url = new URL(req.url);
    const action = url.searchParams.get("action") || url.searchParams.get("topic");
    const dataId = url.searchParams.get("data.id") || url.searchParams.get("id");

    const body = await req.json();

    // Mercado Pago envía notificaciones de diferentes "topics".
    // Nos interesa principalmente "payment".
    const type = body.type || action;
    const paymentId = body.data?.id || dataId;

    if (type === "payment" && paymentId) {
      // 1. Obtener la información real del pago desde la API de MP
      // Esto evita fraudes si alguien manda un webhook falso
      const payment = new Payment(client);
      const paymentInfo = await payment.get({ id: paymentId });

      const { status, external_reference } = paymentInfo;

      if (external_reference) {
        // 2. Buscar la orden en Firestore usando external_reference
        const orderRef = db.collection("orders").doc(external_reference);
        const orderDoc = await orderRef.get();

        if (orderDoc.exists) {
          // 3. Actualizar la orden
          const updateData = {
            status, // Ej: "approved", "rejected", "pending", "cancelled"
            mercadoPagoPaymentId: paymentId.toString(),
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          };

          if (status === "approved" && !orderDoc.data().paidAt) {
            updateData.paidAt = admin.firestore.FieldValue.serverTimestamp();
          }

          await orderRef.update(updateData);
          console.log(`Orden ${external_reference} actualizada a status: ${status}`);
        } else {
          console.warn(`Orden no encontrada para external_reference: ${external_reference}`);
        }
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error en webhook de Mercado Pago:", error);
    // Siempre devolvemos 200 a MP para que no reintente a menos que sea un fallo total de parseo
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
