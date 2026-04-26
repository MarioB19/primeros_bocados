"use client";

import { Timer, ArrowRight, CheckCircle2, Gift } from "lucide-react";
import Link from "next/link";
import { trackInitiateCheckout } from "@/lib/metaPixel";

export default function UrgencyBanner({ plazasRestantes }) {
  const MERCADOPAGO_URL = "https://mpago.li/1fACT3X?utm_source=landing&utm_medium=direct&utm_campaign=founder";

  return (
    <section id="oferta" className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      <div className="bg-white border-4 border-primary rounded-[2.5rem] p-8 md:p-14 text-left shadow-[0_20px_60px_rgba(217,99,77,0.15)] relative overflow-hidden flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        
        {/* Glow effect bg */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>

        {/* Columna Izquierda: Qué incluye */}
        <div className="flex-1 w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-100 text-red-700 font-extrabold text-sm uppercase tracking-wider">
            <Timer className="w-4 h-4" />
            Quedan {plazasRestantes} de 50 plazas fundadoras
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            Asegura tu Acceso Fundadora
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
              <div>
                <strong className="text-foreground text-lg">Acceso de por vida a la app</strong>
                <p className="text-muted-foreground text-sm">Olvídate de la futura mensualidad de $99 MXN. Paga una vez, úsala siempre.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Gift className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <strong className="text-foreground text-lg">Guía PDF de Regalo</strong>
                <p className="text-muted-foreground text-sm">Descarga inmediata de la guía "Primeros Bocados" para empezar hoy mismo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Precio y Checkout */}
        <div className="w-full md:w-[380px] bg-secondary/5 rounded-3xl p-8 border border-secondary/20 flex flex-col items-center text-center shrink-0 relative z-10">
          <p className="text-muted-foreground font-semibold uppercase tracking-wider text-sm mb-2">Pago Único</p>
          <div className="flex items-end justify-center gap-2 mb-2">
            <span className="text-5xl font-black text-foreground">$199</span>
            <span className="text-xl font-bold text-muted-foreground mb-1">MXN</span>
          </div>
          <p className="text-sm text-red-500 font-medium line-through mb-8">Valor normal: $99 MXN / mes</p>

          <Link
            href={MERCADOPAGO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="w-full h-auto rounded-full px-6 py-5 text-lg font-black shadow-xl shadow-primary/30 hover:-translate-y-1 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 bg-primary text-primary-foreground mb-4"
          >
            Comprar ahora
            <ArrowRight className="w-5 h-5 stroke-[3px] shrink-0 fill-none"/>
          </Link>
          
          <p className="text-xs font-medium text-muted-foreground text-balance">
            Pago 100% seguro procesado por MercadoPago. Garantía de acceso.
          </p>
        </div>

      </div>
    </section>
  );
}
