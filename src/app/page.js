import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import BenefitsIncludes from "@/components/BenefitsIncludes";
import SocialProof from "@/components/SocialProof";
import AppUpsell from "@/components/AppUpsell";
import Pricing from "@/components/Pricing";
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
      <Pricing />
      <FAQ />
      <FinalCta />
      
      <footer style={{textAlign: 'center', padding: '2rem', fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>
        © {new Date().getFullYear()} Primeros Bocados. Todos los derechos reservados.
      </footer>
    </main>
  );
}
