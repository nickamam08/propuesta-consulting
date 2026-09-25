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
      <div className="reading-progress no-print" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <Navbar />

      <main className="relative z-10 pb-20 md:pb-12">
        {/* Header exclusivo para impresión limpia en PDF */}
        <div className="hidden print:block max-w-[1240px] mx-auto px-4 pt-6 pb-4 mb-6 border-b-2 border-[#1DB954]">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-mono font-bold text-[#169c46] uppercase tracking-wider block">
                Punto D' Partida × Finanzas Consulting
              </span>
              <h1 className="text-2xl font-bold text-slate-900 mt-1">
                Propuesta Comercial — De conocimiento financiero a ecosistema digital
              </h1>
            </div>
            <div className="text-right text-[11px] font-mono text-slate-500">
              Documento Oficial · {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Contexto & Objetivo */}
        <Hero />

        {/* Estructura de la propuesta */}
        <ProposalOverview />
        
        <Suspense fallback={<LazyFallback />}>
          {/* Ecosistema Digital */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <ProjectStart />
          </div>
          <Phases />
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <PhaseComparator />
          </div>

          {/* Campaña Pymes Financiables */}
          <PymesFinanciables />

          {/* Servicios Complementarios (ubicados antes de la inversión) */}
          <AdditionalServices />

          {/* Inversión (Resumen Oficial + Simulador Interactivo) */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <InvestmentSummary />
          </div>
          <div className="no-print">
            <InvestmentCalculator />
          </div>

          {/* Ecosistema de trabajo y relación entre las propuestas */}
          <Team />

          {/* Requerimientos y condiciones */}
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
            <ClientRequirements />
          </div>
          <Conditions />

          {/* Siguiente paso */}
          <div className="no-print">
            <ContactForm />
          </div>
        </Suspense>
      </main>

      <Footer />
      <div id="whatsapp-float" className="no-print">
        <WhatsAppFloat />
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="mobile-cta-rail-bento no-print" aria-label="Acciones rápidas móviles">
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
