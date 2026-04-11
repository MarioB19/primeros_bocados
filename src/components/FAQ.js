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
      q: "¿Para qué edad de bebé es esta guía?",
      a: "Para bebés de 5 a 12 meses, desde antes de comenzar la alimentación complementaria hasta las primeras etapas de consolidación alimenticia. Incluso si tu bebé tiene 6 o 7 meses y ya empezaste, la guía te ayudará a corregir miedos y reestructurar tus menús."
    },
    {
      q: "¿Cómo recibo la guía?",
      a: "De forma inmediata. Justo al procesar tu pago seguro de $99 MXN, se abrirá la pantalla para descargar tus archivos PDF (Guía, Recetario y Calendario). Además, te llegará una copia de respaldo directo a tu correo electrónico."
    },
    {
      q: "¿Necesito saber de nutrición para entenderla?",
      a: "En absoluto. Está escrita en lenguaje simple de mamá a mamá, sin términos médicos aburridos. Si puedes leer un mensaje de WhatsApp, puedes seguir esta guía al pie de la letra."
    },
    {
      q: "¿Qué es esa aplicación / herramienta que mencionan?",
      a: "Estamos desarrollando un buscador rápido para tu celular. Te servirá para resolver dudas express (ej. ¿Cómo se corta el brócoli? ¿Le puedo dar fresa hoy?). Al comprar este paquete, te anotas en la lista VIP para usarla 1 mes gratis apenas la lancemos."
    },
    {
      q: "¿Cuándo estará lista la herramienta / app web?",
      a: "Estamos en fase de programación. Te enviaremos un correo apenas abramos los accesos. Mientras tanto, el paquete en PDF que descargas hoy tiene absolutamente todo lo necesario para que inicies con éxito."
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
            Todo lo que necesitas saber antes de dar el primer bocado.
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
