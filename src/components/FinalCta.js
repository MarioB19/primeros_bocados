"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCta({ plazasRestantes }) {
  const scrollToOffer = () => {
    const oferta = document.getElementById("oferta");
    if (oferta) {
      oferta.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-primary text-primary-foreground py-24 text-center mt-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Tu bebé está por empezar una etapa nueva.<br/>
          Tú también puedes empezar con más calma.
        </h2>

        <div className="text-lg md:text-xl text-primary-foreground/90 space-y-2 mb-8 max-w-2xl mx-auto font-medium">
          <p>No necesitas seguir adivinando qué le puedes dar.</p>
          <p>No necesitas perder tiempo buscando respuestas contradictorias.</p>
          <p>La respuesta puede estar en 1 segundo.</p>
        </div>

        <p className="text-xl text-white mb-4 max-w-3xl mx-auto">
          <strong>40+ mamás ya son fundadoras.</strong> Quedan {plazasRestantes} plazas antes de que la oferta se cierre y pase a $99 MXN/mes. Asegura tu acceso de por vida hoy y recibe la guía PDF al instante.
        </p>

        <p className="text-sm text-white/70 mb-10">
          Aprovecha antes de que se agoten las últimas {plazasRestantes} plazas.
        </p>

        <div className="flex justify-center mt-6 px-2 md:px-0">
          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto h-auto bg-white text-primary hover:bg-white/95 hover:text-primary text-lg md:text-xl font-bold px-8 md:px-12 py-6 md:py-8 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Quiero ser fundadora — $199 <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
