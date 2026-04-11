import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function SocialProof() {
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
          <h2 className="text-3xl md:text-4xl font-extrabold mt-6 text-foreground">
            Más de 350 mamás ya se unieron a la lista de espera.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-background shadow-md border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 flex flex-col justify-between h-full">
              <div>
                {renderStars()}
                <p className="text-foreground font-medium text-lg mb-6 leading-snug">
                  "Me sentía súper abrumada leyendo grupos de Facebook. Esta guía es exactamente lo que necesitaba."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                  M
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground">Mariana</strong>
                  <span className="text-muted-foreground text-xs block">Mamá primeriza en CDMX</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-background shadow-md border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 flex flex-col justify-between h-full">
              <div>
                {renderStars()}
                <p className="text-foreground font-medium text-lg mb-6 leading-snug">
                  "Poder saber en un par de páginas cómo empezar sin tener que ver un curso de 8 horas fue un alivio."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold shrink-0">
                  L
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground">Laura</strong>
                  <span className="text-muted-foreground text-xs block">Mamá en Monterrey</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background shadow-md border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="pt-8 flex flex-col justify-between h-full">
              <div>
                {renderStars()}
                <p className="text-foreground font-medium text-lg mb-6 leading-snug">
                  "Por fin alguien lo explica de forma terrestre y sin tanto rodeo técnico."
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t border-border/50 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                  S
                </div>
                <div className="text-sm">
                  <strong className="block text-foreground">Sofía</strong>
                  <span className="text-muted-foreground text-xs block">Mamá en Guadalajara</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 md:mt-16 text-center px-2">
          <Button render={<a href="#precio" />} size="lg" className="w-full sm:w-auto h-auto rounded-full px-5 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-bold shadow-xl md:shadow-2xl shadow-primary/20 hover:-translate-y-2 hover:shadow-primary/40 transition-all flex justify-center items-center">
            <span className="sm:hidden">Quiero tranquilidad · <span className="line-through decoration-white/50 opacity-70 font-semibold mr-1">$299</span> $99 MXN →</span>
            <span className="hidden sm:inline">Sí, quiero la misma tranquilidad · <span className="line-through decoration-white/50 opacity-70 font-semibold mr-1">$299</span> $99 MXN →</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
