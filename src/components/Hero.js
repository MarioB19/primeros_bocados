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
          ¡INCLUYE RECETARIO CON +50 IDEAS FÁCILES!
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 text-foreground leading-tight">
          ¿Dudas sobre qué puede cocinarle a tu bebé hoy?<br/>
          <span className="text-primary tracking-normal">Empieza su alimentación sin miedo ni estrés.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Una guía cálida y práctica para mamás que van empezando la <strong>alimentación complementaria</strong>. Deja de leer respuestas contradictorias en internet: te damos instrucciones simples y seguras para introducir comida sólida a tu bebé —avaladas por la OMS y la AAP—. Se acabó el estrés, porque este paquete <strong>incluye más de 50 recetas fáciles y un Calendario de 7 Días</strong> para tu primera semana juntas.
        </p>
        
        <div className="flex flex-col gap-7 mt-8 max-w-2xl mx-auto md:mx-0">
          <Button render={<a href="#precio" />} size="lg" className="w-full md:w-max h-auto rounded-full px-8 md:px-12 py-6 md:py-7 text-lg md:text-xl font-black shadow-2xl shadow-primary/30 hover:-translate-y-1 hover:shadow-primary/40 transition-all flex items-center justify-center relative overflow-hidden group">
            <span className="absolute inset-0 bg-white/20 w-full translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <span className="relative flex items-center gap-3">Paquete: Guía + Recetas + Calendario — $99 MXN <ArrowRight className="w-6 h-6 stroke-[3px]"/></span>
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm font-semibold text-muted-foreground w-full">
            <div className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3px]"/> Descarga inmediata
            </div>
            <div className="hidden sm:block text-border/60">•</div>
            <div className="flex items-center gap-1.5">
              <Check className="w-5 h-5 text-emerald-600 stroke-[3px]"/> PDF en español
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
               src="/mockup-paquete.jpg" 
               alt="Paquete completo de Primeros Bocados" 
               width={1200} 
               height={1200} 
               className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
               unoptimized 
               priority
             />
           </div>
        </div>
      </div>
    </section>
  );
}
