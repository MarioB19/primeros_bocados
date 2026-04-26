import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { client, Preference } from "@/lib/mercadopago";
import * as admin from 'firebase-admin';

export async function POST(req) {
  try {
    const body = await req.json();
    const { customerName, customerEmail } = body;

    if (!customerName || !customerEmail) {
      return NextResponse.json(
        { error: "Nombre y correo son requeridos" },
        { status: 400 }
      );
    }

    const productId = "primeros-bocados-founder";
    const productName = "Primeros Bocados - Acceso Founder";
    const amount = 199; // Precio controlado estrictamente en backend
    const currency = "MXN";

    // 1. Crear la orden en Firestore
    const orderRef = db.collection("orders").doc();
    
    await orderRef.set({
      customerName,
      customerEmail,
      productId,
      productName,
      amount,
      currency,
      status: "pending",
      externalReference: orderRef.id,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 2. Crear la Preferencia en Mercado Pago
    const preference = new Preference(client);
    
    const prefResult = await preference.create({
      body: {
        items: [
          {
            id: productId,
            title: productName,
            quantity: 1,
            unit_price: amount,
            currency_id: currency,
          },
        ],
        payer: {
          name: customerName,
          email: customerEmail,
        },
        external_reference: orderRef.id,
      },
    });

    // Opcional: Actualizar la orden con el preferenceId
    await orderRef.update({
      mercadoPagoPreferenceId: prefResult.id,
    });

    // Retornamos el ID de la orden y el ID de la preferencia al frontend
    return NextResponse.json({
      orderId: orderRef.id,
      preferenceId: prefResult.id,
    });
    
  } catch (error) {
    console.error("Error al crear la orden:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
