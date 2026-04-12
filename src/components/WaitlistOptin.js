"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Loader2, Gift } from "lucide-react";
import { trackLead } from "@/lib/metaPixel";

export default function WaitlistOptin() {
  const [email, setEmail] = useState("");
  const [babyAge, setBabyAge] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [emailTouched, setEmailTouched] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const emailIsValid = isValidEmail(email);
  const showEmailError = emailTouched && email.length > 0 && !emailIsValid;

  const formIsReady = emailIsValid && babyAge !== "";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, babyAge }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Hubo un error. Intenta de nuevo.");
        setStatus("error");
      } else {
        trackLead();
        setStatus("success");
      }
    } catch {
      setErrorMsg("Sin conexión. Verifica tu internet e intenta de nuevo.");
      setStatus("error");
    }
  }

  return (
    <section id="registro" className="bg-secondary/10 py-16 md:py-24 border-y border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-[0_10px_60px_rgba(0,0,0,0.05)] border border-secondary/20 flex flex-col gap-10 relative overflow-hidden">

          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none"></div>

          <div className="relative z-10 w-full">
            {status === "success" ? (
              /* ---- Estado de ÉXITO ---- */
              <div className="flex flex-col items-center gap-4 py-4 text-center">
                <div className="bg-emerald-100 p-4 rounded-full">
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                  ¡Ya estás dentro! 🎉
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Te acabamos de enviar el <strong>ebook Primeros Bocados</strong> al correo{" "}
                  <strong className="text-primary">{email}</strong>. Revisa tu bandeja — si no lo ves en 2 minutos, revisa spam.<br/>
                  <span className="block mt-2 text-sm">Cuando la app esté lista, serás de las primeras en saberlo. 💚</span>
                </p>
              </div>
            ) : (
              /* ---- Estado NORMAL / CARGANDO / ERROR ---- */
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                    Regístrate y accede cuando lancemos.<br/>
                  <span className="text-primary">Acceso gratuito desde el primer día.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Regístrate ahora y garantizas tu lugar antes de que abramos el acceso al público general.
                    <strong> Sin tarjeta de crédito. Sin compromisos.</strong>
                  </p>
                </div>

                <p className="text-sm md:text-base text-muted-foreground text-center max-w-lg mx-auto mb-8 leading-relaxed">
                  La ventana de alimentación complementaria dura solo 6 meses. Cada semana que pasa es una semana sin la respuesta clara que tu bebé necesita.
                </p>

                {/* Freebie */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-5 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 text-center sm:text-left border-l-4 border-l-primary shadow-sm">
                  <div className="bg-white rounded-full p-3 shadow-md shrink-0">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-foreground text-lg mb-1">🎁 Ebook de regalo al registrarte</strong>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      Te enviamos de inmediato el <strong>Ebook Primeros Bocados</strong> — guía completa de alimentación
                      complementaria + recetario de +50 recetas. Tuyo hoy, gratis.
                    </span>
                  </div>
                </div>

                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"/>
                    <input
                      type="email"
                      placeholder="Tu mejor correo electrónico"
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

                  {/* Edad en meses */}
                  <div className="relative mt-2">
                    <select
                      value={babyAge}
                      onChange={(e) => setBabyAge(e.target.value)}
                      className="w-full h-14 pl-5 pr-10 rounded-full border-2 border-border focus:border-primary focus:ring-0 outline-none transition-all text-foreground font-medium bg-white disabled:opacity-60 appearance-none"
                      required
                      disabled={status === "loading"}
                    >
                      <option value="" disabled>¿Cuántos meses tiene tu bebé?</option>
                      {Array.from({ length: 13 }, (_, i) => i + 4).map((m) => (
                        <option key={m} value={m}>{m} meses</option>
                      ))}
                    </select>
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">▾</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 rounded-full px-8 font-bold text-lg hover:-translate-y-1 transition-transform shadow-lg shadow-primary/30 w-full disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 mt-2"
                    disabled={status === "loading" || !formIsReady}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" /> Registrando...
                      </span>
                    ) : "Quiero acceso gratuito →"}
                  </Button>
                </form>

                {status === "error" && (
                  <p className="text-red-500 text-sm mt-3 font-medium text-center">{errorMsg}</p>
                )}

                <p className="text-xs text-muted-foreground mt-5 text-center">
                  Cero spam. Promesa de mamá. Al registrarte aceptas recibir noticias de Primeros Bocados.
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
