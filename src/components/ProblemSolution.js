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
            <li className="flex gap-3 items-start"><X className="w-5 h-5 text-destructive shrink-0 mt-1"/> Preguntas al pediatra y la consulta se acaba antes de resolver todas tus dudas.</li>
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

        {/* TRANSICIÓN A LA APP */}
        <section className="bg-secondary text-secondary-foreground rounded-[2rem] p-8 md:p-12 shadow-xl shadow-secondary/20 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Primeros Bocados es la app que te da la respuesta cuando más la necesitas.
          </h2>

          <p className="text-lg text-white/90 mb-6">
            La creamos para que no tengas que improvisar, adivinar ni depender de respuestas sueltas en internet.
          </p>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
            <p className="font-medium text-white text-lg">
              Escribes el alimento. En un segundo sabes si ya es seguro para tu bebé,
              el tamaño exacto para cortarlo y cómo ofrecérselo. Sin buscar. Sin dudar. Sin miedo.
            </p>
          </div>

          {/* Cómo funciona en 3 pasos */}
          <div className="space-y-3">
            {[
              { step: "1", text: "Escribes el alimento (ej. \"fresas\")" },
              { step: "2", text: "Ves si es ✅ seguro, 🟡 con precaución o 🔴 aún no" },
              { step: "3", text: "La app te dice la textura, el corte y cómo ofrecérselo" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
                <span className="bg-white text-secondary font-black text-sm w-7 h-7 rounded-full flex items-center justify-center shrink-0">{step}</span>
                <p className="text-white/90 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl md:rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl w-full max-w-md mx-auto relative">
            <Image
              src="/app.png"
              alt="Mamá con su bebé usando Primeros Bocados"
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
