import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProposalOverview from './components/ProposalOverview';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

const ProjectStart = lazy(() => import('./components/ProjectStart'));
const Phases = lazy(() => import('./components/Phases'));
const PhaseComparator = lazy(() => import('./components/PhaseComparator'));
const PymesFinanciables = lazy(() => import('./components/PymesFinanciables'));
const AdditionalServices = lazy(() => import('./components/AdditionalServices'));
const InvestmentCalculator = lazy(() => import('./components/InvestmentCalculator'));
const ClientRequirements = lazy(() => import('./components/ClientRequirements'));
const Team = lazy(() => import('./components/Team'));
const InvestmentSummary = lazy(() => import('./components/InvestmentSummary'));
const Conditions = lazy(() => import('./components/Conditions'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function LazyFallback() {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
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

      <main className="relative z-10">
        <Hero />
        <ProposalOverview />
        
        <Suspense fallback={<LazyFallback />}>
          {/* Track 1: Ecosistema Digital */}
          <div id="propuesta-ecosistema">
            <ProjectStart />
            <Phases />
            <PhaseComparator />
          </div>

          {/* Track 2: Campaña Pymes Financiables */}
          <div id="propuesta-pymes">
            <PymesFinanciables />
          </div>

          {/* Servicios Complementarios */}
          <AdditionalServices />

          {/* Simulador Interactivo de Inversión */}
          <InvestmentCalculator />

          {/* Requerimientos Previos para Iniciar */}
          <ClientRequirements />

          {/* Equipo Multidisciplinario */}
          <Team />

          {/* Cuadro Oficial de Inversión */}
          <InvestmentSummary />

          {/* Condiciones Contractuales */}
          <Conditions />

          {/* Formulario y Cierre */}
          <ContactForm />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppFloat />

      {/* Mobile Sticky Action Bar */}
      <div className="mobile-cta-rail-obsidian" aria-label="Acciones rápidas móviles">
        <a
          href="#comparar"
          className="bg-white/[0.06] border border-white/[0.1] text-white flex items-center justify-center"
        >
          Comparar Fases
        </a>
        <a
          href="#siguiente-paso"
          className="btn-primary-obsidian justify-center"
        >
          Hablar con el equipo
        </a>
      </div>
    </>
  );
}
