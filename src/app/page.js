import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import BenefitsIncludes from "@/components/BenefitsIncludes";
import SocialProof from "@/components/SocialProof";
import AppUpsell from "@/components/AppUpsell";
import WaitlistOptin from "@/components/WaitlistOptin";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <BenefitsIncludes />
      <SocialProof />
      <AppUpsell />
      <WaitlistOptin />
      <FAQ />
      <FinalCta />

      <footer className="text-center py-10 px-6 font-medium text-sm text-muted-foreground border-t border-border">
        <p className="mb-2">© {new Date().getFullYear()} Primeros Bocados. Todos los derechos reservados.</p>
        <p>Soporte: hola@primerosbocados.com</p>
      </footer>
    </main>
  );
}
