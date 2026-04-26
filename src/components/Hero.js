"use client";

import { Check, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToOffer = () => {
    const oferta = document.getElementById("oferta");
    if (oferta) {
      oferta.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto px-6 py-10 md:py-16 max-w-[1400px] flex flex-col md:flex-row items-center gap-10 lg:gap-8 min-h-[90vh] md:min-h-0 justify-center">
      {/* Columna Izquierda - Texto */}
      <div className="w-full md:w-[50%] lg:w-[45%] text-center md:text-left flex flex-col justify-center">
        <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center overflow-hidden">
                <Star className="w-4 h-4 text-primary fill-primary" />
              </div>
            ))}
          </div>
          <span className="text-sm font-semibold text-muted-foreground ml-2">Únete a 300+ mamás esperando el lanzamiento</span>
        </div>

        {/* 
          Opciones de Headline:
          Opción A (Activa): Deja de adivinar qué darle a tu bebé
          Opción B: ¿Es seguro este alimento para tu bebé?
          Opción C: Sabe en 1 segundo si ya puede comerlo
        */}
        <h1 className="text-[2rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-5 md:mb-6 text-foreground">
          Deja de adivinar qué darle a tu bebé
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Escribe el alimento. En un segundo sabes si ya es seguro para la edad exacta de tu bebé. Sin Google. Sin grupos de Facebook. Sin dudas.
        </p>

        <div className="flex flex-col gap-4 md:gap-7 mt-2 md:mt-4 max-w-2xl mx-auto md:mx-0 w-full">
          <button
            onClick={scrollToOffer}
            className="w-full md:w-max min-h-[56px] rounded-full px-4 sm:px-8 md:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-black shadow-2xl shadow-primary/30 hover:-translate-y-1 hover:shadow-primary/40 transition-all flex items-center justify-center relative overflow-hidden group bg-primary text-primary-foreground"
          >
            <span className="absolute inset-0 bg-white/20 w-full translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative flex items-center justify-center gap-2 text-center">
              Quiero ser fundadora — $199
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3px] shrink-0 fill-none hidden sm:block"/>
            </span>
          </button>

          <p className="text-xs sm:text-sm font-medium text-muted-foreground text-center md:text-left leading-relaxed max-w-md mx-auto md:mx-0">
            Pago único. Acceso de por vida cuando salga la app. Guía PDF inmediata.
          </p>
        </div>
      </div>

      {/* Columna Derecha - Imagen */}
      <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center items-center mt-4 md:mt-0 relative z-10 transition-all duration-500">
        <div className="relative w-full max-w-[320px] md:max-w-none xl:scale-110 origin-left">
           {/* Sombra decorativa trasera */}
           <div className="absolute top-4 md:top-8 -right-4 md:-right-8 w-full h-full bg-secondary/10 rounded-[2rem] md:rounded-[3rem] pointer-events-none"></div>

           {/* Marco de la imagen */}
           <div className="relative rounded-[2rem] md:rounded-[3rem] border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden bg-[#faf8f5]">
             <Image
               src="/landing.png"
               alt="Vista previa de la app Primeros Bocados"
               width={1200}
               height={1200}
               className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
               unoptimized
               priority
             />
           </div>
        </div>
      </div>
    </section>
  );
}
