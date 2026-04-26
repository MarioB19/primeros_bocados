import { Check } from "lucide-react";
import Image from "next/image";

export default function BenefitsIncludes() {
  const benefits = [
    { title: "Consulta cualquier alimento en 1 segundo", desc: "ahora y siempre, sin pagar mensualidades" },
    { title: "Lleva una guía de 21 páginas a tu cocina", desc: "lista en cuanto pagues" },
    { title: "Sabe qué darle por edad sin buscar en Google", desc: "6-7m, 8-9m, 10-12m" },
    { title: "Empieza la primera semana con un plan listo", desc: "sin improvisar nada" },
    { title: "Distingue gagging de atragantamiento", desc: "con una guía visual que te quita el miedo" },
    { title: "Recibe nuevos alimentos y funciones antes que nadie", desc: "cuando se actualicen" }
  ];

  return (
    <div className="container mx-auto px-5 md:px-6 py-16 md:py-20 max-w-6xl space-y-20 md:space-y-32">
      {/* BULLETS DE BENEFICIO */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 text-foreground leading-tight">
          Qué vas a poder hacer como fundadora
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto">
          Todo lo que necesitas para empezar con seguridad, sin buscar en 5 lugares distintos.
        </p>

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
      </section>

      {/* BANNER VISUAL (Opcional, pero ayuda a la confianza) */}
      <section className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white mb-20">
        <Image
             src="/benefits.png"
             alt="Transforma la alimentación de tu bebé con Primeros Bocados"
             width={1400}
             height={700}
             className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
             unoptimized
        />
      </section>
    </div>
  );
}

