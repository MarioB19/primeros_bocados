import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AppUpsell() {
  return (
    <section className="container mx-auto px-5 md:px-6 py-16 md:py-20 max-w-[1200px]">
      <div className="border-2 border-primary shadow-xl md:shadow-2xl shadow-primary/10 relative rounded-3xl overflow-hidden bg-white flex flex-col md:flex-row">
        
        {/* Columna izquierda - Texto con padding */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center text-center md:text-left relative">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[80px] pointer-events-none"></div>

          <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-4 md:mb-6 px-3 md:px-4 py-1 md:py-1.5 uppercase font-bold tracking-widest shadow-sm rounded-full text-[10px] md:text-xs w-fit mx-auto md:mx-0">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2 inline-block"/> Muy Pronto
          </Badge>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 md:mb-6 leading-tight">
            Y después de la guía… viene tu asistente de bolsillo.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Próximamente lanzaremos un <strong>buscador rápido para tu celular</strong>. ¿Estás en el súper y no sabes si comprar fresas? Lo escribes y en un segundo sabrás si ya es seguro para tu bebé, <strong>el tamaño exacto para cortarlo</strong> y cómo debes ofrecérselo.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl border-l-4 border-l-primary mb-8 text-left">
            <p className="font-bold text-foreground text-lg mb-1">
              🎁 Bonus Exclusivo:
            </p>
            <p className="text-muted-foreground">
              Al llevarte el paquete de <strong>Guía + Recetas + Calendario ($99 MXN)</strong> el día de hoy, garantizas tu lugar en la lista VIP y te regalaremos tu <strong>primer mes de uso totalmente gratis</strong> en cuanto la lancemos.
            </p>
          </div>

          <div>
            <Button 
              render={<a href="#precio" />} 
              size="lg"
              className="w-full sm:w-auto h-auto text-base sm:text-lg md:text-xl font-bold rounded-full px-5 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 bg-primary text-primary-foreground hover:bg-primary/95 hover:-translate-y-1 transition-all shadow-xl shadow-primary/30 flex justify-center items-center"
            >
              <span className="sm:hidden flex items-center gap-1.5">Guía + App · <span className="line-through decoration-white/50 opacity-70 font-semibold ml-0.5">$299</span> $99 MXN <ArrowRight className="w-4 h-4 shrink-0"/></span>
              <span className="hidden sm:inline-flex items-center justify-center gap-2">Comprar Guía + Acceso App · <span className="line-through decoration-white/50 opacity-70 font-semibold mr-0.5">$299</span> $99 MXN <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0"/></span>
            </Button>
          </div>
        </div>
        
        {/* Columna derecha - Imagen */}
        <div className="w-full md:w-[42%] flex-shrink-0 relative">
          {/* MÓVIL: proporción natural, sin recorte */}
          <Image
            src="/app-preview.jpg"
            alt="Vista previa de la app Primeros Bocados en el supermercado"
            width={600}
            height={750}
            className="w-full h-auto block md:hidden"
            unoptimized
          />
          {/* DESKTOP: fill para cubrir el panel lateral completo */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/app-preview.jpg"
              alt="Vista previa de la app Primeros Bocados en el supermercado"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}
