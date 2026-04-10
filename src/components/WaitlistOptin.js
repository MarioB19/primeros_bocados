"use client";

import { Button } from "@/components/ui/button";
import { Mail, CalendarDays } from "lucide-react";

export default function WaitlistOptin() {
  return (
    <section className="bg-secondary/10 py-16 md:py-24 border-y border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_10px_60px_rgba(0,0,0,0.05)] border border-secondary/20 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none"></div>

          <div className="flex-1 text-center md:text-left relative z-10 w-full">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
              ¿Sientes miedo de dar el primer paso sola?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Entendemos que la alimentación complementaria genera muchísima ansiedad sobre alergias o qué hacer primero. <strong>No dejes que la lluvia de información te paralice.</strong> Únete hoy a nuestro círculo gratuito de mamás.
            </p>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-8 text-center sm:text-left border-l-4 border-l-primary shadow-sm">
              <div className="bg-white rounded-full p-3 shadow-md shrink-0">
                <CalendarDays className="w-8 h-8 text-primary" />
              </div>
              <div>
                <strong className="block text-foreground text-lg mb-1">🎁 Calendario Seguro de 7 Días</strong>
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Al registrarte te enviaremos por correo un <strong>Plan de Comidas en PDF</strong> exacto para tu primera semana. Quítate el estrés de decidir <em>"qué le doy mañana"</em>. ¡Te lo regalamos hoy mismo!
                </span>
              </div>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1 block">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"/>
                <input 
                  type="email" 
                  placeholder="Tu mejor correo electrónico..." 
                  className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-border focus:border-primary focus:ring-0 outline-none transition-all text-foreground font-medium"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-14 rounded-full px-8 font-bold text-lg hover:-translate-y-1 transition-transform shadow-lg shadow-primary/30 w-full sm:w-auto">
                Envíame el PDF Gratis
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-5 text-center md:text-left">
              Cero spam. Promesa de mamá. Dándote de alta aceptas unirte a nuestro ecosistema de correos.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
