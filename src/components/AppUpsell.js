import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Sparkles, ArrowRight } from "lucide-react";

export default function AppUpsell() {
  return (
    <section className="container mx-auto px-5 md:px-6 py-16 md:py-20 max-w-5xl">
      <Card className="border-2 border-primary shadow-xl md:shadow-2xl shadow-primary/10 overflow-hidden relative rounded-3xl md:rounded-xl">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-primary/5 rounded-bl-[80px] md:rounded-bl-[100px] pointer-events-none"></div>
        
        <CardContent className="p-6 md:p-12 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center relative z-10">
          <div className="flex-1 text-center md:text-left">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-4 md:mb-6 px-3 md:px-4 py-1 md:py-1.5 uppercase font-bold tracking-widest shadow-sm rounded-full text-[10px] md:text-xs">
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

            <div className="px-2 md:px-0">
              <Button 
                render={<a href="#precio" />} 
                size="lg"
                className="w-full sm:w-auto h-auto text-lg md:text-xl font-bold rounded-full px-8 md:px-12 py-6 md:py-8 bg-primary text-primary-foreground hover:bg-primary/95 hover:-translate-y-1 transition-all shadow-xl shadow-primary/30 break-words whitespace-normal flex items-center justify-center gap-2"
              >
                <span>Comprar Guía + Acceso — $99 MXN</span> <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0"/>
              </Button>
            </div>
          </div>
          
          <div className="relative flex-shrink-0 flex justify-center w-full md:w-auto mt-8 md:mt-0 pb-6 md:pb-0">
            {/* Glowing circle behind phone */}
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full scale-125 z-0 pointer-events-none"></div>
            
            <div className="bg-white rounded-[2rem] p-10 border border-secondary/20 shadow-2xl relative z-10 transform md:rotate-3 transition-transform hover:rotate-0">
              <Smartphone className="w-24 h-24 text-primary" strokeWidth={1.5} />
            </div>
            
            {/* Pequeño badge extra en el icono */}
            <div className="absolute -bottom-2 right-4 md:-right-6 bg-foreground text-background font-extrabold px-6 py-3 rounded-full text-sm shadow-xl z-20 animate-bounce">
              1 MES GRATIS
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
