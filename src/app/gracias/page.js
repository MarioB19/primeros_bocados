"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Clock } from "lucide-react";
import { trackPurchase } from "@/lib/metaPixel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GraciasPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const isApproved = status === "approved";
  const isPending = status === "pending";

  useEffect(() => {
    // Solo disparar Purchase cuando el pago fue realmente aprobado
    if (isApproved && typeof window !== 'undefined' && !sessionStorage.getItem('purchase_tracked')) {
      trackPurchase(199, "MXN");
      sessionStorage.setItem('purchase_tracked', 'true');
    }
  }, [isApproved]);

  return (
    <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-border text-center flex flex-col items-center">
        
        {isPending ? (
          <>
            <div className="bg-amber-100 p-5 rounded-full mb-8">
              <Clock className="w-16 h-16 text-amber-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Tu pago está en proceso
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tu pago está siendo procesado. Te notificaremos por correo electrónico en cuanto sea confirmado. Esto puede tomar unos minutos.
            </p>
          </>
        ) : (
          <>
            <div className="bg-emerald-100 p-5 rounded-full mb-8">
              <CheckCircle className="w-16 h-16 text-emerald-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              ¡Felicidades, ya eres fundadora!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tu pago se ha procesado con éxito. Acabamos de enviarte un correo a la dirección que usaste en MercadoPago con tu <strong>Guía PDF Primeros Bocados</strong>.
            </p>
          </>
        )}

        <div className="bg-secondary/10 p-6 rounded-2xl mb-8 w-full">
          <p className="text-secondary-foreground font-medium mb-2">Próximos pasos:</p>
          <ul className="text-left text-sm text-muted-foreground space-y-3">
            <li>1. Revisa tu bandeja de entrada (y tu carpeta de spam, por si acaso).</li>
            <li>2. Descarga y lee tu guía para empezar con seguridad.</li>
            <li>3. Te avisaremos a ese mismo correo en cuanto la app esté lista para que la descargues gratis.</li>
          </ul>
        </div>

        <Link href="/">
          <Button variant="outline" className="rounded-full px-8 h-12">
            Volver a la página principal
          </Button>
        </Link>
      </div>
    </main>
  );
}

