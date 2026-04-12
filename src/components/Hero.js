import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Gift } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-[1400px] flex flex-col md:flex-row items-center gap-12 lg:gap-8">
      {/* Columna Izquierda - Texto */}
      <div className="w-full md:w-[50%] lg:w-[45%] text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 mb-6 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 font-extrabold text-sm md:text-base shadow-sm">
          <Gift className="w-5 h-5 text-amber-600" />
          🎁 Regístrate gratis y recibe el ebook de regalo
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
          ¿Qué le doy de comer a mi bebé?{" "}
          <span className="text-primary tracking-normal">Aquí tienes la respuesta.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Primeros Bocados es la app que te dice, al instante, si ese alimento ya
          es seguro para tu bebé —con la textura correcta, el tamaño exacto y cómo ofrecerlo—.
          Avalada por la <strong>OMS y la AAP</strong>. Consigue acceso gratuito antes del lanzamiento.
        </p>

        <div className="flex flex-col gap-7 mt-8 max-w-2xl mx-auto md:mx-0">
          <Button render={<a href="#registro" />} size="lg" className="w-full md:w-max h-auto rounded-full px-4 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl font-black shadow-2xl shadow-primary/30 hover:-translate-y-1 hover:shadow-primary/40 transition-all flex items-center justify-center relative overflow-hidden group">
            <span className="absolute inset-0 bg-white/20 w-full translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative flex items-center justify-center gap-2">
              Quiero acceso gratuito
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3px] shrink-0 fill-none"/>
            </span>
          </Button>

          <p className="text-xs text-muted-foreground text-center md:text-left">
            Gratis durante el lanzamiento · $99 MXN/mes después · Sin tarjeta de crédito
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm font-semibold text-muted-foreground w-full">
            <div className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3px]"/> Gratis al registrarte
            </div>
            <div className="hidden sm:block text-border/60">•</div>
            <div className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3px]"/> Sin tarjeta de crédito
            </div>
            <div className="hidden sm:block text-border/60">•</div>
            <div className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3px]"/> Basada en la OMS y la AAP
            </div>
          </div>
        </div>
      </div>

      {/* Columna Derecha - Imagen */}
      <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center items-center mt-16 md:mt-0 relative z-10 transition-all duration-500">
        <div className="relative w-full xl:scale-110 origin-left">
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
