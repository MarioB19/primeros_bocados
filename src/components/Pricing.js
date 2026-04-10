import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Lock, ArrowRight, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section className="bg-primary/5 py-24 border-y border-primary/10 relative overflow-hidden" id="precio">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-5 md:px-6 max-w-[1400px] relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Lado IZQUIERDO - Tarjeta de Precios */}
        <div className="w-full lg:w-[60%] relative">
          <Card className="border-[3px] border-primary rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_40px_rgba(217,99,77,0.15)] bg-white relative overflow-hidden transition-transform duration-300">
            
            {/* Cabecera del precio */}
            <div className="bg-primary/5 p-6 md:p-8 pb-8 md:pb-10 text-center border-b border-primary/10 relative">
              {/* Badge Popular */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 md:px-6 py-1.5 rounded-b-xl shadow-sm w-max">
                Acceso Fundador
              </div>
              
              <div className="mt-8 flex justify-center items-start">
                <span className="text-3xl md:text-4xl font-bold text-primary mt-1 mr-1.5">$</span>
                <span className="text-7xl md:text-8xl font-black text-foreground tracking-tighter leading-none">99</span>
              </div>
              
              <p className="text-xs md:text-sm font-bold text-primary mt-3 uppercase tracking-wider">Pago Único MXN</p>
            </div>
            
            <CardContent className="p-6 md:p-10 bg-white">
              <h4 className="font-extrabold text-sm text-foreground/50 mb-8 uppercase tracking-wider text-center">
                El paquete completo incluye:
              </h4>
              
              {/* Lista en formato GRID de 2 columnas para que no se vea tan larga */}
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary stroke-[3px]"/>
                  </div>
                  <div>
                    <strong className="block text-foreground text-[1.05rem] leading-tight mb-1">El Libro Clave (PDF)</strong>
                    <span className="text-muted-foreground text-sm block leading-relaxed">Todo sobre primeros alimentos, texturas, cortes seguros y qué evitar. Directo al punto.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary stroke-[3px]"/>
                  </div>
                  <div>
                    <strong className="block text-foreground text-[1.05rem] leading-tight mb-1">Recetario (+50 Opciones)</strong>
                    <span className="text-muted-foreground text-sm block leading-relaxed">Desayunos, comidas y cenas fáciles con ingredientes locales. Olvídate de qué hacer hoy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary stroke-[3px]"/>
                  </div>
                  <div>
                    <strong className="block text-foreground text-[1.05rem] leading-tight mb-1">Calendario de 7 Días</strong>
                    <span className="text-muted-foreground text-sm block leading-relaxed">Arranca sin estrés. Un plan exacto día a día para que tu primera semana sea perfecta.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary stroke-[3px]"/>
                  </div>
                  <div>
                    <strong className="block text-foreground text-[1.05rem] leading-tight mb-1">Buscador Web + 1 Mes Gratis</strong>
                    <span className="text-muted-foreground text-sm block leading-relaxed">Acceso anticipado a la App web. Tu asistente rápido de alimentos desde el supermercado.</span>
                  </div>
                </li>
              </ul>

              <Button render={<a href="https://inovaris.lemonsqueezy.com/checkout/buy/5f8af630-8381-4373-a617-43e36bbf9626" target="_blank" rel="noopener noreferrer" />} size="lg" className="w-full sm:w-[80%] mx-auto h-auto text-xl font-black rounded-full py-7 shadow-xl shadow-primary/30 hover:-translate-y-1 hover:shadow-primary/40 transition-all flex items-center justify-center relative overflow-hidden group">
                <span className="absolute inset-0 bg-white/20 w-full translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative flex items-center gap-2">Comprar Ahora — $99 MXN <ArrowRight className="w-6 h-6"/></span>
              </Button>
            </CardContent>
            
            {/* Footer Garantia */}
            <div className="bg-muted/50 p-6 md:px-10 md:py-6 border-t border-border flex flex-col md:flex-row items-center gap-6">
              <div className="bg-emerald-100 p-3 rounded-2xl shrink-0 hidden md:block">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-center md:text-left flex-1">
                <strong className="text-foreground text-base block mb-1">Garantía Incondicional de 7 Días</strong>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Si sientes que la guía no te sirvió para empezar con muchísima más claridad y menos miedo, nos escribes y <strong>te devolvemos el 100% de tus 99 pesos</strong>.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  <Lock className="w-4 h-4 text-foreground/50"/> Pago Seguro <span className="opacity-30">|</span> Descarga en 5 seg
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Lado DERECHO - Dolor y Empatía */}
        <div className="w-full lg:w-[40%] text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary font-bold text-sm mb-8 shadow-sm">
            <Zap className="w-4 h-4 fill-primary" /> Descarga inmediata
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-8">
            Empieza hoy con <span className="text-primary tracking-tight block mt-2">claridad</span>.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 w-full">
            Por el precio de un desayuno, borrarás para siempre el estrés de googlear a medias, el miedo a atragantamientos y la ansiedad de no saber qué prepararle. <strong>Ahorra horas de dudas semanales.</strong>
          </p>
          
          <div className="border-l-4 border-secondary pl-6 py-2 mt-10 bg-secondary/5 rounded-r-xl">
            <p className="text-lg text-foreground font-medium italic">
              "El miedo a lo desconocido no alimenta a tu bebé. La información correcta sí."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
