"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CalendarDays, CheckCircle, Loader2 } from "lucide-react";

export default function WaitlistOptin() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [emailTouched, setEmailTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const emailIsValid = isValidEmail(email);
  const showEmailError = emailTouched && email.length > 0 && !emailIsValid;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Hubo un error. Intenta de nuevo.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Sin conexión. Verifica tu internet e intenta de nuevo.");
      setStatus("error");
    }
  }

  return (
    <section className="bg-secondary/10 py-16 md:py-24 border-y border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_10px_60px_rgba(0,0,0,0.05)] border border-secondary/20 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none"></div>

          <div className="flex-1 text-center md:text-left relative z-10 w-full">
            {status === "success" ? (
              /* ---- Estado de ÉXITO ---- */
              <div className="flex flex-col items-center md:items-start gap-4 py-4">
                <div className="bg-emerald-100 p-4 rounded-full">
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                  ¡Revisa tu bandeja de entrada! 🎉
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Te acabamos de enviar tu <strong>Calendario de 7 Días en PDF</strong> al correo <strong className="text-primary">{email}</strong>. Si no lo ves en 2 minutos, revisa tu carpeta de Spam.
                </p>
              </div>
            ) : (
              /* ---- Estado NORMAL / CARGANDO / ERROR ---- */
              <>
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
                      Al registrarte te enviaremos por correo un <strong>Plan de Comidas en PDF</strong> exacto para tu primera semana. Quítate el estrés de decidir <em>&quot;qué le doy mañana&quot;</em>. ¡Te lo regalamos hoy mismo!
                    </span>
                  </div>
                </div>

                <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={handleSubmit}>
                  <div className="relative flex-1 block">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"/>
                    <input 
                      type="email" 
                      placeholder="Tu mejor correo electrónico..." 
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailTouched(true); }}
                      onBlur={() => setEmailTouched(true)}
                      className={`w-full h-14 pl-12 pr-4 rounded-full border-2 focus:ring-0 outline-none transition-all text-foreground font-medium disabled:opacity-60 ${
                        showEmailError
                          ? "border-red-400 focus:border-red-500"
                          : emailTouched && emailIsValid
                          ? "border-emerald-400 focus:border-emerald-500"
                          : "border-border focus:border-primary"
                      }`}
                      required
                      disabled={status === "loading"}
                    />
                  {showEmailError && (
                    <p className="absolute left-4 -bottom-5 text-xs text-red-500 font-medium">
                      Escribe un correo válido (ej. hola@gmail.com)
                    </p>
                  )}
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="h-14 rounded-full px-8 font-bold text-lg hover:-translate-y-1 transition-transform shadow-lg shadow-primary/30 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
                    disabled={status === "loading" || !emailIsValid}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                      </span>
                    ) : "Envíame el PDF Gratis"}
                  </Button>
                </form>

                {status === "error" && (
                  <p className="text-red-500 text-sm mt-3 font-medium">{errorMsg}</p>
                )}

                <p className="text-xs text-muted-foreground mt-5 text-center md:text-left">
                  Cero spam. Promesa de mamá. Dándote de alta aceptas unirte a nuestro ecosistema de correos.
                </p>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
