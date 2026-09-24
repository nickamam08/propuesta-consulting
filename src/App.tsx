import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProposalOverview from './components/ProposalOverview';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

const ProjectStart = lazy(() => import('./components/ProjectStart'));
const Phases = lazy(() => import('./components/Phases'));
const PhaseComparator = lazy(() => import('./components/PhaseComparator'));
const AdditionalServices = lazy(() => import('./components/AdditionalServices'));
const PymesFinanciables = lazy(() => import('./components/PymesFinanciables'));
const InvestmentSummary = lazy(() => import('./components/InvestmentSummary'));
const InvestmentCalculator = lazy(() => import('./components/InvestmentCalculator'));
const Team = lazy(() => import('./components/Team'));
const ClientRequirements = lazy(() => import('./components/ClientRequirements'));
const Conditions = lazy(() => import('./components/Conditions'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function LazyFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-[#1DB954]/20 border-t-[#1DB954] rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <>
      <div className="grain" />
      <div className="reading-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <Navbar />

      <main className="relative z-10 pb-20 md:pb-12">
        {/* 1. Contexto & 2. Objetivo */}
        <Hero />

        {/* 3. Cómo está estructurada la propuesta */}
        <ProposalOverview />
        
        <Suspense fallback={<LazyFallback />}>
          {/* 4. Propuesta 01 — Ecosistema Digital */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <ProjectStart />
          </div>
          <Phases />
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <PhaseComparator />
          </div>

          {/* 5. Servicios Complementarios */}
          <AdditionalServices />

          {/* 6. Propuesta 02 — Campaña Pymes Financiables */}
          <PymesFinanciables />

          {/* 7. Inversión (Resumen Oficial + Simulador Interactivo) */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <InvestmentSummary />
          </div>
          <InvestmentCalculator />

          {/* 8. Ecosistema de trabajo y relación entre las propuestas */}
          <Team />

          {/* 9. Requerimientos, condiciones y alcance */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <ClientRequirements />
          </div>
          <Conditions />

          {/* 10. Siguiente paso */}
          <ContactForm />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppFloat />

      {/* Mobile Sticky Action Bar */}
      <div className="mobile-cta-rail-bento" aria-label="Acciones rápidas móviles">
        <a
          href="#comparar"
          className="bg-white/[0.06] border border-white/[0.1] text-white flex items-center justify-center"
        >
          Comparar Fases
        </a>
        <a
          href="#contacto"
          className="btn-spotify justify-center"
        >
          Hablar con el equipo
        </a>
      </div>
    </>
  );
}
