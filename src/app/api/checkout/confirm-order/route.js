import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { client, Payment } from "@/lib/mercadopago";
import * as admin from "firebase-admin";

export async function POST(req) {
  try {
    const body = await req.json();
    const { orderId, paymentId } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: "orderId es requerido" },
        { status: 400 }
      );
    }

    const orderRef = db.collection("orders").doc(orderId);
    const orderDoc = await orderRef.get();

    if (!orderDoc.exists) {
      return NextResponse.json(
        { error: "Orden no encontrada" },
        { status: 404 }
      );
    }

    // Si tenemos un paymentId, verificamos el status real con MP
    if (paymentId) {
      const payment = new Payment(client);
      const paymentInfo = await payment.get({ id: paymentId });

      const updateData = {
        status: paymentInfo.status, // "approved", "rejected", "pending", etc.
        mercadoPagoPaymentId: paymentId.toString(),
        paymentMethod: paymentInfo.payment_method_id || null,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      };

      if (paymentInfo.status === "approved" && !orderDoc.data().paidAt) {
        updateData.paidAt = admin.firestore.FieldValue.serverTimestamp();
      }

      await orderRef.update(updateData);

      return NextResponse.json({
        success: true,
        status: paymentInfo.status,
      });
    }

    // Sin paymentId, simplemente marcamos como "processing"
    await orderRef.update({
      status: "processing",
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ success: true, status: "processing" });

  } catch (error) {
    console.error("Error al confirmar la orden:", error);
    return NextResponse.json(
      { error: "Error al confirmar la orden" },
      { status: 500 }
    );
  }
}
