import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import BenefitsIncludes from "@/components/BenefitsIncludes";
import AppUpsell from "@/components/AppUpsell";
import SemaphoreVisual from "@/components/SemaphoreVisual";
import SocialProof from "@/components/SocialProof";
import UrgencyBanner from "@/components/UrgencyBanner";
import WaitlistOptin from "@/components/WaitlistOptin";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  // =========================================================================
  // CONFIGURACIÓN MANUAL: Actualiza este número al vender una plaza fundadora
  // =========================================================================
  const PLAZAS_RESTANTES = 8;

  return (
    <main>
      <Hero />
      <ProblemSolution />
      <BenefitsIncludes />
      <AppUpsell />
      <SemaphoreVisual />
      <SocialProof />
      <UrgencyBanner plazasRestantes={PLAZAS_RESTANTES} />
      <WaitlistOptin />
      <FAQ />
      <FinalCta plazasRestantes={PLAZAS_RESTANTES} />

      <footer className="text-center py-10 px-6 font-medium text-sm text-muted-foreground border-t border-border">
        <p className="mb-2">© {new Date().getFullYear()} Primeros Bocados. Todos los derechos reservados.</p>
        <p>Soporte: productos@inovaris.online</p>
      </footer>
    </main>
  );
}
