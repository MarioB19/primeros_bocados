import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "¿Para qué edad de bebé funciona la app?",
      a: "Para bebés de 4 a 12 meses, desde antes de comenzar la alimentación complementaria hasta las primeras etapas de consolidación alimenticia. La app te muestra exactamente qué alimentos son seguros para la edad actual de tu bebé y cómo ofrecerlos."
    },
    {
      q: "¿Qué incluye el Acceso Fundadora por $199?",
      a: "Por un pago único de $199 MXN, aseguras el acceso de por vida a la app cuando se lance (sin pagar la mensualidad de $99), y además te enviamos de inmediato la Guía en PDF 'Primeros Bocados' con 21 páginas para que empieces a informarte hoy mismo."
    },
    {
      q: "¿De dónde viene la información de alimentos?",
      a: "Toda la información está basada en las guías de la Organización Mundial de la Salud (OMS) y la Academia Americana de Pediatría (AAP). Nada de opiniones ni tendencias de redes sociales — solo guías clínicas actualizadas, explicadas en lenguaje de mamá a mamá."
    },
    {
      q: "¿Necesito saber de nutrición para usarla?",
      a: "En absoluto. La app está diseñada para que cualquier mamá —sin conocimientos de nutrición— pueda usarla en segundos. Si puedes escribir en Google, puedes usar Primeros Bocados."
    },
    {
      q: "¿Cuándo puedo empezar a usar la app?",
      a: "Estamos en las últimas semanas de desarrollo. Al adquirir el acceso fundadora, aseguras tu lugar y serás de las primeras en entrar cuando abramos. La guía en PDF, sin embargo, la recibes inmediatamente."
    },
    {
      q: "¿La guía PDF es de verdad gratis si no quiero pagar?",
      a: "Sí. Si aún no estás lista para el acceso fundadora, puedes registrarte abajo solo con tu correo y te enviaremos la guía PDF sin costo alguno."
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-24 relative overflow-hidden">
      {/* Luz difuminada decorativa */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      <div className="container mx-auto px-5 md:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-white text-primary border border-primary/20 shadow-sm hover:bg-white px-4 py-1.5 uppercase font-black tracking-widest rounded-full mb-6 md:mb-8 text-xs">
            <HelpCircle className="w-3.5 h-3.5 mr-1.5 inline-block" /> Dudas resueltas
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground mt-4 md:mt-6 text-lg">
            Todo lo que necesitas saber sobre el Acceso Fundadora.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-white border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-2xl px-5 md:px-8 data-[state=open]:shadow-[0_10px_30px_rgba(217,99,77,0.1)] data-[state=open]:ring-1 data-[state=open]:ring-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline text-base md:text-lg py-5 md:py-6 [&[data-state=open]]:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 md:pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
