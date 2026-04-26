"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, Loader2, BookOpen } from "lucide-react";
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
                  Listo, revisa tu correo en los próximos minutos.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Te acabamos de enviar la <strong>guía PDF Primeros Bocados</strong> al correo{" "}
                  <strong className="text-primary">{email}</strong>. Si no lo ves, no olvides revisar tu carpeta de spam.<br/>
                </p>
              </div>
            ) : (
              /* ---- Estado NORMAL / CARGANDO / ERROR ---- */
              <>
                <div className="text-center mb-8">
                  <div className="bg-amber-100/80 border border-amber-300 text-amber-900 font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
                    🎁 Guía Gratis
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                    ¿Aún no estás lista para fundadora? <br className="hidden sm:block"/>
                    <span className="text-primary">Empieza con la guía gratis.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                    Déjame tu correo y te envío la guía PDF de inmediato, sin costo.
                  </p>
                </div>

                <form className="flex flex-col gap-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>

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
                      {Array.from({ length: 21 }, (_, i) => i + 4).map((m) => (
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
                        <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                      </span>
                    ) : "Enviarme la guía gratis →"}
                  </Button>
                </form>

                {status === "error" && (
                  <p className="text-red-500 text-sm mt-3 font-medium text-center">{errorMsg}</p>
                )}

                <p className="text-xs text-muted-foreground mt-5 text-center max-w-sm mx-auto">
                  Cero spam. Promesa de mamá. Al registrarte aceptas recibir correos de Primeros Bocados.
                </p>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
