import { ArrowRight } from "lucide-react";
import ScrollToRegistroButton from "@/components/ScrollToRegistroButton";

export default function FinalCta() {
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
          <p>La respuesta puede estar en 3 segundos.</p>
        </div>

        <p className="text-xl text-white mb-4 max-w-3xl mx-auto">
          Únete a las <strong>350+ mamás</strong> que ya aseguraron su lugar.
          Registrate gratis hoy y recibe el ebook de inmediato.
        </p>

        <p className="text-sm text-white/70 mb-10">
          Gratis durante el lanzamiento · $99 MXN/mes después · Sin tarjeta de crédito
        </p>

        <div className="flex justify-center mt-6 px-2 md:px-0">
          <ScrollToRegistroButton
            className="w-full sm:w-auto h-auto bg-white text-primary hover:bg-white/95 hover:text-primary text-lg md:text-xl font-bold px-8 md:px-12 py-6 md:py-8 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Quiero acceso gratuito <ArrowRight className="w-5 h-5 shrink-0" />
          </ScrollToRegistroButton>
        </div>
      </div>
    </section>
  );
}
