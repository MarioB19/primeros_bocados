import { X } from "lucide-react";
import Image from "next/image";

export default function ProblemSolution() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* SECCIÓN EMOCIONAL */}
        <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-border flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            El momento de empezar a darle de comer a tu bebé debería sentirse emocionante, no abrumador.
          </h2>
          
          <p className="text-lg text-foreground mb-6">
            Tu bebé está por cumplir 6 meses y de pronto aparece una nueva pregunta todos los días: <em>¿Ya le puedo dar esto?</em>
          </p>
          
          <ul className="space-y-4 mb-8 bg-background p-6 rounded-2xl text-muted-foreground">
            <li className="flex gap-3 items-start"><X className="w-5 h-5 text-destructive shrink-0 mt-1"/> Buscas en Facebook y cada mamá te dice algo distinto.</li>
            <li className="flex gap-3 items-start"><X className="w-5 h-5 text-destructive shrink-0 mt-1"/> Lees artículos en Google y no coinciden entre sí.</li>
            <li className="flex gap-3 items-start"><X className="w-5 h-5 text-destructive shrink-0 mt-1"/> Te quedas sin ideas de qué cocinarle y repites lo mismo todos los días.</li>
            <li className="flex gap-3 items-start"><X className="w-5 h-5 text-destructive shrink-0 mt-1"/> Ves videos en TikTok con recomendaciones contradictorias.</li>
            <li className="flex gap-3 items-start"><X className="w-5 h-5 text-destructive shrink-0 mt-1"/> Descargas un PDF institucional y resulta demasiado general.</li>
          </ul>
          
          <div className="text-center md:text-left">
            <p className="text-lg font-medium text-foreground mb-4">
              Y al final sigues con la misma duda:<br/>
              si ese alimento ya es seguro para tu bebé, hoy, en esta etapa exacta.
            </p>
            <p className="text-foreground font-bold mt-4">
              No te falta cuidado. No te falta información. Lo que falta es una respuesta clara.
            </p>
          </div>
        </section>

        {/* TRANSICIÓN A LA GUÍA */}
        <section className="bg-secondary text-secondary-foreground rounded-[2rem] p-8 md:p-12 shadow-xl shadow-secondary/20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Primeros Bocados es la guía que te acompaña cuando más lo necesitas.
          </h2>
          
          <p className="text-lg text-white/90 mb-6">
            La creamos para que no tengas que improvisar, adivinar ni depender de respuestas sueltas en internet.
          </p>
          
          <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
            <p className="font-medium text-white text-lg">
              Aquí encuentras exactamente lo que necesitas saber: qué alimentos introducir, cuándo ofrecerlos, y cómo prepararlos de forma segura. Además, nuestro recetario con +50 ideas te ahorrará la típica pregunta de "¿qué le doy de comer hoy?".
            </p>
          </div>
          
          <div className="mt-10 rounded-2xl md:rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl w-full max-w-md mx-auto relative">
            <Image 
              src="/lectura-mama.jpg" 
              alt="Mamá y bebé leyendo Primeros Bocados" 
              width={800} 
              height={800} 
              className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700" 
              unoptimized 
            />
          </div>
        </section>

      </div>
    </div>
  );
}
