import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground py-24 text-center mt-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Tu bebé está por empezar una etapa nueva.<br/>
          Tú también puedes empezar con más calma.
        </h2>
        
        <div className="text-lg md:text-xl text-primary-foreground/90 space-y-2 mb-8 max-w-2xl mx-auto font-medium">
          <p>No necesitas seguir adivinando.</p>
          <p>No necesitas perder tiempo buscando respuestas contradictorias.</p>
        </div>
        
        <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
          Con el <strong>paquete Primeros Bocados</strong>, tienes la guía clara, el recetario de 50 ideas y el menú exacto de tu primera semana. El "qué le haré de comer hoy" dejará de ser una preocupación.
        </p>

        <div className="flex justify-center mt-6 px-2 md:px-0">
          <Button 
            render={<a href="https://inovaris.lemonsqueezy.com/checkout/buy/5f8af630-8381-4373-a617-43e36bbf9626" target="_blank" rel="noopener noreferrer" />} 
            size="lg" 
            className="w-full sm:w-auto h-auto bg-white text-primary hover:bg-white/95 hover:text-primary text-lg md:text-xl font-bold px-8 md:px-12 py-6 md:py-8 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-all duration-300 break-words whitespace-normal text-center"
          >
            Descargar la guía · $99 MXN →
          </Button>
        </div>
      </div>
    </section>
  );
}
