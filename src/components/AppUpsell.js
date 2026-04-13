import { Badge } from "@/components/ui/badge";
import { Smartphone, Search, Leaf, ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollToRegistroButton from "@/components/ScrollToRegistroButton";

export default function AppUpsell() {
  const features = [
    {
      icon: <Search className="w-5 h-5 text-primary" />,
      title: "Buscador por alimento",
      desc: "Escribe cualquier alimento y en un segundo sabes si ya es seguro para la edad de tu bebé.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-emerald-600" />,
      title: "Semáforo de seguridad",
      desc: "Verde, amarillo o rojo — con la textura correcta y el corte exacto para cada etapa.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-secondary" />,
      title: "Siempre contigo",
      desc: "En el súper, en la cocina o en casa de la abuela. Tu asistente de alimentación en el bolsillo.",
    },
  ];

  return (
    <section className="container mx-auto px-5 md:px-6 py-16 md:py-20 max-w-[1200px]">
      <div className="border-2 border-primary shadow-xl md:shadow-2xl shadow-primary/10 relative rounded-3xl overflow-hidden bg-white flex flex-col md:flex-row">

        {/* Columna izquierda - Texto con padding */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center text-center md:text-left relative">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[80px] pointer-events-none"></div>

          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4 md:mb-6 px-3 md:px-4 py-1 md:py-1.5 uppercase font-bold tracking-widest shadow-sm rounded-full text-[10px] md:text-xs w-fit mx-auto md:mx-0 border border-primary/20">
            La primera app de alimentación complementaria para México
          </Badge>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 md:mb-6 leading-tight">
            Tu asistente de alimentos, siempre en tu bolsillo.
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Como <strong>Solid Starts</strong>, pero en español, con ingredientes de tu súper
            y pensada para las mamás mexicanas. Consulta cualquier alimento en segundos —
            sin buscar, sin dudar, sin miedo a equivocarte.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 text-left">
                <div className="bg-background border border-border p-2.5 rounded-xl shrink-0 shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <strong className="block text-foreground text-sm mb-0.5">{f.title}</strong>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <ScrollToRegistroButton
              className="w-full sm:w-auto h-auto text-base sm:text-lg md:text-xl font-bold rounded-full px-5 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 bg-primary text-primary-foreground hover:bg-primary/95 hover:-translate-y-1 transition-all shadow-xl shadow-primary/30 flex justify-center items-center gap-2"
            >
              Quiero acceso gratuito <ArrowRight className="w-5 h-5 shrink-0"/>
            </ScrollToRegistroButton>
            <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">
              Gratis durante el lanzamiento · $99 MXN/mes después · Sin tarjeta de crédito
            </p>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="w-full md:w-[42%] flex-shrink-0 relative">
          {/* MÓVIL: proporción natural, sin recorte */}
          <Image
            src="/app-preview.jpg"
            alt="Vista previa de la app Primeros Bocados"
            width={600}
            height={750}
            className="w-full h-auto block md:hidden"
            unoptimized
          />
          {/* DESKTOP: fill para cubrir el panel lateral completo */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/app-preview.jpg"
              alt="Vista previa de la app Primeros Bocados"
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
