"use client";

import { useState, useEffect } from "react";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { ArrowRight, Lock, Loader2, CheckCircle2, ShieldCheck, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { trackInitiateCheckout, trackAddPaymentInfo } from "@/lib/metaPixel";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  
  const router = useRouter();

  // Track InitiateCheckout al cargar la página
  useEffect(() => {
    trackInitiateCheckout();
  }, []);

  // Track AddPaymentInfo cuando se muestra el Brick
  useEffect(() => {
    if (preferenceId) {
      trackAddPaymentInfo();
    }
  }, [preferenceId]);

  // Inicializar Mercado Pago
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY) {
      initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, { locale: 'es-MX' });
    } else {
      console.error("Falta la Public Key de Mercado Pago");
    }
  }, []);

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerName: name, customerEmail: email }),
      });

      const data = await response.json();

      if (response.ok && data.preferenceId) {
        setPreferenceId(data.preferenceId);
        setOrderId(data.orderId);
      } else {
        alert("Ocurrió un error al procesar la solicitud. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Error de conexión. Revisa tu internet e intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const initialization = {
    amount: 199,
    payer: {
      email: email,
    },
  };

  const customization = {
    paymentMethods: {
      creditCard: "all",
      debitCard: "all",
    },
    visual: {
      style: {
        theme: "default", 
        customVariables: {
          formPadding: "1.5rem",
          baseColor: "#111827",
        }
      },
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    setPaymentError(null);

    try {
      // Enviar los datos del pago a nuestro backend para procesarlo
      const res = await fetch("/api/checkout/process-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          formData,
        }),
      });

      const result = await res.json();

      if (result.status === "approved") {
        router.push("/gracias");
      } else if (result.status === "rejected") {
        const messages = {
          cc_rejected_call_for_authorize: "Tu banco requiere que autorices el pago. Llama a tu banco e intenta de nuevo.",
          cc_rejected_insufficient_amount: "Tu tarjeta no tiene fondos suficientes.",
          cc_rejected_bad_filled_card_number: "Revisa el número de tu tarjeta.",
          cc_rejected_bad_filled_date: "Revisa la fecha de vencimiento.",
          cc_rejected_bad_filled_security_code: "Revisa el código de seguridad (CVV).",
          cc_rejected_bad_filled_other: "Revisa los datos de tu tarjeta.",
        };
        setPaymentError(messages[result.statusDetail] || "Tu pago fue rechazado. Verifica los datos de tu tarjeta o intenta con otro método de pago.");
      } else if (result.status === "in_process" || result.status === "pending") {
        router.push("/gracias");
      } else {
        setPaymentError(result.details || "No pudimos procesar tu pago. Por favor intenta de nuevo.");
      }
    } catch (err) {
      console.error("Error procesando pago:", err);
      setPaymentError("Error de conexión. Revisa tu internet e intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Encabezado Restaurado a la marca (pero limpio) */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight text-foreground">
            Asegura tu <span className="text-primary">lugar hoy</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed px-4">
            Estás a punto de asegurar tu acceso de por vida por <strong className="text-foreground">$199 MXN</strong> antes de que suba a <span className="line-through decoration-red-500/50">$99/mes</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start">
          
          {/* COLUMNA IZQUIERDA: RESUMEN DE LA ORDEN */}
          <div className="order-2 lg:order-1 sticky top-8">
            <div className="bg-white rounded-[2.5rem] p-3 shadow-xl shadow-primary/5 border border-border/40 overflow-hidden relative">
              
              {/* Imagen con bordes redondeados controlados por el contenedor */}
              <div className="relative w-full h-48 md:h-64 rounded-[2rem] overflow-hidden border border-border/50">
                <Image
                  src="/checkout.png"
                  alt="Mamá y bebé Primeros Bocados"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-black text-foreground leading-tight mb-1">
                      Acceso Fundadora
                    </h2>
                    <p className="text-primary font-bold text-sm">Primeros Bocados App</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-foreground">$199<span className="text-base font-bold text-muted-foreground"> MXN</span></p>
                    <p className="text-xs font-bold text-red-500 line-through">Valor regular $99/mes</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary stroke-[3px]" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      <strong>App de por vida.</strong> Olvídate de mensualidades. Pagas una vez y la usas siempre.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary stroke-[3px]" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      <strong>Guía PDF "Primeros Bocados"</strong> de regalo para descargar ahora mismo.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary stroke-[3px]" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      <strong>Cortes y texturas seguros</strong> para la edad exacta de tu bebé, en 1 segundo.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-border flex items-start gap-3">
                  <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground mb-0.5">Compra 100% Segura</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      El pago es procesado por los servidores encriptados de Mercado Pago. Tu información financiera nunca toca nuestros servidores.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FLUJO DE PAGO */}
          <div className="order-1 lg:order-2 space-y-6">
            
            {/* Paso 1: Tus Datos */}
            <div className={`bg-white rounded-[2rem] p-6 md:p-8 shadow-lg border relative transition-all duration-500 ${preferenceId ? 'border-primary/20 opacity-90' : 'border-primary/20 ring-4 ring-primary/5'}`}>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                  <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
                  Tus datos
                </h2>
                {preferenceId && (
                  <span className="flex items-center gap-1 text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <CheckCircle2 className="w-4 h-4" /> Verificado
                  </span>
                )}
              </div>

              <form onSubmit={handleCreateOrder} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-foreground">Tu nombre completo</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!!preferenceId}
                    className="w-full px-4 py-3.5 rounded-xl border border-input bg-background outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-60 disabled:bg-gray-50"
                    placeholder="Ej. María Sánchez"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-foreground">Tu mejor correo electrónico</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!!preferenceId}
                    className="w-full px-4 py-3.5 rounded-xl border border-input bg-background outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-60 disabled:bg-gray-50"
                    placeholder="Donde recibirás tu acceso y guía PDF"
                  />
                </div>

                {!preferenceId && (
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-full text-lg font-black bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:shadow-none"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Creando orden segura...</>
                      ) : (
                        <>Continuar al pago seguro <ArrowRight className="w-5 h-5 stroke-[3px]" /></>
                      )}
                    </button>
                    <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1 font-medium">
                      <Lock className="w-3.5 h-3.5 text-primary" /> El pago se realizará en el siguiente paso
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Paso 2: El Pago (Checkout Brick) */}
            <div className={`transition-all duration-500 ease-in-out origin-top ${preferenceId ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}`}>
              <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-lg border border-primary/20 ring-4 ring-primary/5">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                    <span className="bg-primary text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
                    Método de pago
                  </h2>
                </div>

                <div className="flex items-center gap-2 mb-6 text-sm text-primary/90 bg-primary/5 p-3.5 rounded-xl font-medium border border-primary/10">
                  <Lock className="w-4 h-4 shrink-0" />
                  Estás a punto de asegurar tu Acceso Fundadora por $199 MXN
                </div>

                {paymentError && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium flex items-start gap-3">
                    <span className="text-lg shrink-0">⚠️</span>
                    <div>
                      <p className="font-bold mb-1">Pago no procesado</p>
                      <p>{paymentError}</p>
                    </div>
                  </div>
                )}
                
                <div className="-mx-2 overflow-visible">
                  {preferenceId && (
                    <Payment
                      initialization={initialization}
                      customization={customization}
                      onSubmit={onSubmit}
                    />
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
