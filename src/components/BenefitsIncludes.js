import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BenefitsIncludes() {
  const benefits = [
    { title: "Saber qué sí y qué no, según su edad.", desc: "Sin buscar en 5 lugares distintos ni comparar versiones contradictorias." },
    { title: "Preparar cada alimento con seguridad.", desc: "Textura, porción y forma de ofrecer, explicado paso a paso." },
    { title: "Empezar con un plan, no con improvisación.", desc: "Un esquema claro para tu primera semana completa." },
    { title: "Distinguir lo normal de lo que sí requiere atención.", desc: "Para actuar con calma, no con pánico." }
  ];

  const modules = [
    {
      num: "01",
      title: "Cuándo empezar (y cómo saber si tu bebé está listo)",
      desc: "Aprende a reconocer las señales reales y por qué empezar justo a tiempo."
    },
    {
      num: "02",
      title: "Purés, BLW o mixto: elige sin presión",
      desc: "Conoce las diferencias y elige lo mejor para tu bebé sin sentir que hay una respuesta \"correcta\"."
    },
    {
      num: "03",
      title: "Primeros alimentos con confianza",
      desc: "Opciones prácticas como zanahoria y aguacate, con sugerencias claras de porción."
    },
    {
      num: "04",
      title: "Los alimentos que más miedo dan",
      desc: "(huevo, nueces, mariscos) Qué sí, qué no y qué precauciones tomar."
    },
    {
      num: "05",
      title: "Tu primera semana paso a paso",
      desc: "Plan simple para tus primeros 7 días con respuestas a preguntas comunes."
    },
    {
      num: "06",
      title: "Recetario Práctico (+50 recetas)",
      desc: "Desayunos, comidas y cenas fáciles de preparar que a tu bebé le encantarán, para que nunca te quedes sin ideas."
    }
  ];

  return (
    <div className="container mx-auto px-5 md:px-6 py-16 md:py-20 max-w-6xl space-y-20 md:space-y-32">
      {/* BULLETS DE BENEFICIO */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 md:mb-16 text-foreground leading-tight">
          Lo que vas a lograr con esta guía:
        </h2>
        
        <ul className="grid md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((ben, idx) => (
             <li key={idx} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm border border-border/60 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6 group">
               <div className="bg-primary/5 p-4 rounded-full border border-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                 <Check className="text-primary w-6 h-6 md:w-8 md:h-8" />
               </div>
               <div>
                 <strong className="block text-foreground text-lg md:text-xl mb-2">{ben.title}</strong>
                 <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{ben.desc}</p>
               </div>
             </li>
          ))}
        </ul>

        <div className="mt-12 md:mt-16 text-center px-2">
          <Button render={<a href="#precio" />} size="lg" className="rounded-full px-5 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-bold shadow-xl md:shadow-2xl shadow-primary/20 hover:-translate-y-2 hover:shadow-primary/40 transition-all w-full sm:w-auto h-auto flex justify-center items-center">
            <span className="sm:hidden">Descargar Paquete — $99 MXN →</span>
            <span className="hidden sm:inline">Descargar la guía ahora — $99 MXN →</span>
          </Button>
        </div>
      </section>

      {/* BANNER VISUAL (Mamá e Hijo) */}
      <section className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white mb-20">
        <Image 
             src="/banner-transforma.jpg" 
             alt="Transforma la alimentación de tu bebé" 
             width={1400} 
             height={700} 
             className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
             unoptimized 
        />
      </section>

      {/* CONTENIDO DE LA GUÍA */}
      <section className="bg-white rounded-3xl md:rounded-[3rem] p-6 md:p-16 border-2 border-border shadow-sm md:shadow-md relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground">
            Todo lo que necesitas saber antes de la primera cucharada.
          </h2>
          <p className="text-xl text-muted-foreground">
            En una guía estructurada paso a paso. Directa al punto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {modules.map((mod, idx) => (
            <Card key={idx} className="border border-border/60 shadow-none hover:shadow-lg hover:border-secondary/40 transition-all bg-background/50 overflow-visible group relative pt-4">
              <div className="absolute -top-4 left-6 bg-secondary text-secondary-foreground font-bold text-sm px-4 py-1.5 rounded-full shadow-md group-hover:-translate-y-1 transition-transform">
                Tema {mod.num}
              </div>
              <CardHeader className="pt-8 pb-3">
                <CardTitle className="leading-tight text-lg text-foreground font-bold">{mod.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
