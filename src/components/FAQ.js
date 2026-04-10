import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "¿Para qué edad de bebé es esta guía?",
      a: "Para bebés de 5 a 12 meses, desde antes de comenzar la alimentación complementaria hasta las primeras etapas de consolidación alimenticia."
    },
    {
      q: "¿Cómo recibo la guía?",
      a: "Inmediatamente después del pago recibes un enlace de descarga en tu correo. La tienes en menos de un minuto."
    },
    {
      q: "¿Necesito saber de nutrición para entenderla?",
      a: "No. Está escrita en lenguaje simple, sin tecnicismos. Si puedes leer un mensaje de WhatsApp, puedes seguir esta guía."
    },
    {
      q: "¿Qué es la herramienta que mencionan?",
      a: "Estamos desarrollando una herramienta digital donde podrás buscar cualquier alimento y ver al instante si es seguro para tu bebé según su edad. Las compradoras de la guía tendrán acceso prioritario y un mes gratis."
    },
    {
      q: "¿Cuándo estará lista la herramienta?",
      a: "Estamos en desarrollo. Te avisaremos por correo en cuanto esté disponible. Mientras tanto, la guía tiene todo lo que necesitas para empezar."
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20 max-w-4xl border-t border-border">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
        Preguntas frecuentes
      </h2>
      
      <Accordion className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline hover:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
