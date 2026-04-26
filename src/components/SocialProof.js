"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

export default function SocialProof() {
  const scrollToOffer = () => {
    const oferta = document.getElementById("oferta");
    if (oferta) {
      oferta.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const renderStars = () => (
    <div className="flex gap-1 mb-4 text-yellow-400">
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
      <Star className="w-4 h-4 fill-current" />
    </div>
  );

  return (
    <section className="bg-white py-24 border-y border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="px-6 py-2.5 text-sm md:text-base bg-secondary/10 text-secondary border-none font-extrabold uppercase tracking-wider rounded-full">
            Lo que dicen otras mamás
          </Badge>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-8 mb-4">
            <span className="text-primary text-4xl md:text-5xl font-black">40+</span> mamás ya son fundadoras y <span className="text-secondary text-4xl md:text-5xl font-black">300+</span> están esperando el lanzamiento.
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            Esto es lo que nos comparten las mamás de la lista de espera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-background shadow-md border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 flex flex-col justify-between h-full">
              <div>
                {renderStars()}
                <p className="text-foreground font-medium text-lg mb-6 leading-snug">
                  &ldquo;Me sentía súper abrumada leyendo grupos de Facebook. Que exista una app con respuestas claras es exactamente lo que necesitaba.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                  M
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground">Mariana</strong>
                  <span className="text-muted-foreground text-xs block">Mamá de bebé de 7 meses · CDMX</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-md border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 flex flex-col justify-between h-full">
              <div>
                {renderStars()}
                <p className="text-foreground font-medium text-lg mb-6 leading-snug">
                  &ldquo;Por fin voy a poder consultar en el súper si algo le sirve a mi bebé sin tener que llamarle a mi mamá o buscar en Google.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold shrink-0">
                  L
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground">Laura</strong>
                  <span className="text-muted-foreground text-xs block">Mamá de bebé de 8 meses · Monterrey</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-md border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 flex flex-col justify-between h-full">
              <div>
                {renderStars()}
                <p className="text-foreground font-medium text-lg mb-6 leading-snug">
                  &ldquo;Por fin alguien lo explica de forma terrestre y sin tanto rodeo técnico. Ya quiero que lancen.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                  S
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground">Sofía</strong>
                  <span className="text-muted-foreground text-xs block">Mamá de bebé de 6 meses · Guadalajara</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 md:mt-16 text-center px-2 flex justify-center">
          <button
            onClick={scrollToOffer}
            className="w-full sm:w-auto h-auto rounded-full px-5 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold shadow-xl md:shadow-2xl shadow-primary/20 hover:-translate-y-2 hover:shadow-primary/40 transition-all flex justify-center items-center gap-2 bg-primary text-primary-foreground"
          >
            Quiero ser fundadora — $199 <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
