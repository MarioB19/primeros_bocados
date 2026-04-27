import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { client, Payment } from "@/lib/mercadopago";
import * as admin from "firebase-admin";

export async function POST(req) {
  try {
    const body = await req.json();
    const { orderId, formData } = body;

    if (!orderId || !formData) {
      return NextResponse.json(
        { error: "orderId y formData son requeridos" },
        { status: 400 }
      );
    }

    // Verificar que la orden existe
    const orderRef = db.collection("orders").doc(orderId);
    const orderDoc = await orderRef.get();

    if (!orderDoc.exists) {
      return NextResponse.json(
        { error: "Orden no encontrada" },
        { status: 404 }
      );
    }

    const orderData = orderDoc.data();

    // Crear el pago en Mercado Pago con los datos que envió el Brick
    const payment = new Payment(client);

    const paymentData = {
      ...formData,
      transaction_amount: orderData.amount, // Siempre desde backend (199)
      description: orderData.productName,
      external_reference: orderId,
    };

    // Si el payer no tiene email, agregarlo desde la orden
    if (!paymentData.payer?.email) {
      paymentData.payer = {
        ...(paymentData.payer || {}),
        email: orderData.customerEmail,
      };
    }

    const result = await payment.create({ body: paymentData });

    // Actualizar la orden en Firestore con el resultado real
    const updateData = {
      status: result.status,
      mercadoPagoPaymentId: result.id?.toString(),
      paymentMethod: result.payment_method_id || null,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    if (result.status === "approved") {
      updateData.paidAt = admin.firestore.FieldValue.serverTimestamp();
    }

    await orderRef.update(updateData);

    console.log(`Pago procesado para orden ${orderId}: status=${result.status}, paymentId=${result.id}`);

    return NextResponse.json({
      status: result.status,
      statusDetail: result.status_detail,
      paymentId: result.id,
    });

  } catch (error) {
    console.error("Error procesando pago:", error);
    return NextResponse.json(
      { error: "Error procesando el pago", details: error.message },
      { status: 500 }
    );
  }
}
