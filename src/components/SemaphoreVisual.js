import { CheckCircle2, AlertTriangle, XCircle, Search } from "lucide-react";

export default function SemaphoreVisual() {
  const exampleSteps = [
    {
      color: "bg-emerald-100 border-emerald-300",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
      title: "Verde: Seguro desde los 6 meses",
      desc: "Ej. Aguacate. Te decimos cómo cortarlo en tiras gruesas y qué textura debe tener para evitar atragantamientos."
    },
    {
      color: "bg-amber-100 border-amber-300",
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: "Amarillo: Con precaución",
      desc: "Ej. Uvas. Te explicamos exactamente cómo cortarlas a lo largo (y no a lo ancho) antes de dárselas."
    },
    {
      color: "bg-red-100 border-red-300",
      icon: <XCircle className="w-6 h-6 text-red-600" />,
      title: "Rojo: Aún no",
      desc: "Ej. Miel. Te avisamos que no es segura antes del primer año y por qué (riesgo de botulismo)."
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
      <div className="bg-secondary text-secondary-foreground rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl shadow-secondary/20 flex flex-col items-center text-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white leading-tight max-w-3xl">
          Buscas el alimento y el semáforo te da la respuesta en 1 segundo.
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl">
          Olvídate de leer artículos larguísimos o buscar en Google. 
          Escribes el alimento y sabes al instante si es seguro para la edad exacta de tu bebé.
        </p>

        {/* Visual Mockup */}
        <div className="w-full max-w-lg mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-2xl text-left border-4 border-white/20">
          
          <div className="flex items-center gap-3 bg-secondary/10 px-4 py-3 rounded-full mb-8">
            <Search className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium text-lg">Buscar "Aguacate"</span>
          </div>

          <div className="space-y-4">
            {exampleSteps.map((step, idx) => (
              <div key={idx} className={`flex items-start gap-4 p-5 rounded-2xl border ${step.color} bg-opacity-50`}>
                <div className="shrink-0 mt-1 bg-white rounded-full p-1 shadow-sm">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
