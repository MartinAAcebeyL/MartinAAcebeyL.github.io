'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { Project } from '@/types';

interface Props {
  data: Project[];
}

const INITIAL_VISIBLE = 6;

const CATEGORY_ORDER: Project['category'][] = ['ai-agents', 'backend', 'automation', 'fullstack'];

const CATEGORY_LABEL: Record<Project['category'], { en: string; es: string }> = {
  'ai-agents': { en: 'AI Agents', es: 'Agentes IA' },
  backend: { en: 'Backend', es: 'Backend' },
  automation: { en: 'Automation', es: 'Automatización' },
  fullstack: { en: 'Full-stack', es: 'Full-stack' },
};

// Per-category accent system: a single hue drives badge, glow, dot and rail.
const CATEGORY_THEME: Record<
  Project['category'],
  { badge: string; dot: string; glow: string; rail: string; hoverText: string }
> = {
  'ai-agents': {
    badge: 'bg-violet-500/10 text-violet-600 dark:text-violet-300 ring-1 ring-inset ring-violet-500/20',
    dot: 'bg-violet-500 dark:bg-violet-400',
    glow: 'from-violet-500/20 via-violet-500/5',
    rail: 'bg-violet-500 dark:bg-violet-400',
    hoverText: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
  },
  backend: {
    badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 ring-1 ring-inset ring-cyan-500/20',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    glow: 'from-cyan-500/20 via-cyan-500/5',
    rail: 'bg-cyan-500 dark:bg-cyan-400',
    hoverText: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
  },
  automation: {
    badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 ring-1 ring-inset ring-amber-500/20',
    dot: 'bg-amber-500 dark:bg-amber-400',
    glow: 'from-amber-500/20 via-amber-500/5',
    rail: 'bg-amber-500 dark:bg-amber-400',
    hoverText: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
  },
  fullstack: {
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 ring-1 ring-inset ring-emerald-500/20',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    glow: 'from-emerald-500/20 via-emerald-500/5',
    rail: 'bg-emerald-500 dark:bg-emerald-400',
    hoverText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
  },
};

export default function Projects({ data }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { t, language } = useTranslation();

  const sorted = [...data].sort(
    (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
  );
  const visible = showAll ? sorted : sorted.slice(0, INITIAL_VISIBLE);

  const detailsLabel = language === 'es' ? 'Ver detalles' : 'View details';

  // Lock body scroll while the drawer is open + close on Escape.
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  const activeDesc = active
    ? t.projectDescriptions[active.descriptionKey as keyof typeof t.projectDescriptions]
    : null;
  const activeTheme = active ? CATEGORY_THEME[active.category] : null;

  return (
    <section id="projects" ref={ref} className="py-14 px-6 bg-zinc-100/50 dark:bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          04. {t.nav.projects}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((project, i) => {
            const desc = t.projectDescriptions[project.descriptionKey as keyof typeof t.projectDescriptions];
            const theme = CATEGORY_THEME[project.category];
            return (
              <motion.button
                key={project.id}
                onClick={() => setActive(project)}
                className="group relative isolate text-left rounded-2xl p-px overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                {/* Radial glow that fades in on hover, tinted per category */}
                <span
                  className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${theme.glow} to-transparent`}
                  aria-hidden
                />

                <span className="relative flex flex-col h-full rounded-[15px] p-5 bg-white dark:bg-zinc-900/70 ring-1 ring-zinc-200/80 dark:ring-zinc-800 group-hover:ring-transparent transition-all duration-300 group-hover:-translate-y-1">
                  {/* Left accent rail grows on hover */}
                  <span
                    className={`absolute left-0 top-5 bottom-5 w-0.5 rounded-full ${theme.rail} opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 origin-center transition-all duration-300`}
                    aria-hidden
                  />

                  <span className="flex items-center gap-2 mb-3">
                    <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} aria-hidden />
                    <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full ${theme.badge}`}>
                      {CATEGORY_LABEL[project.category][language]}
                    </span>
                  </span>

                  <h3 className="text-[15px] font-semibold leading-snug text-zinc-900 dark:text-white mb-1.5 transition-colors duration-200">
                    {desc.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 flex-1">
                    {desc.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 self-center">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <span className={`inline-flex items-center gap-1 text-xs font-mono text-zinc-400 dark:text-zinc-500 ${theme.hoverText} transition-colors duration-200`}>
                    {detailsLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Show more / less */}
        {sorted.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group inline-flex items-center gap-2 text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-200 px-4 py-2 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800 hover:ring-cyan-500/30 active:scale-[0.97]"
            >
              {showAll
                ? (language === 'es' ? 'Ver menos' : 'Show less')
                : (language === 'es'
                    ? `Ver ${sorted.length - INITIAL_VISIBLE} proyectos más`
                    : `Show ${sorted.length - INITIAL_VISIBLE} more`)}
              <span className={`transition-transform duration-200 ${showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}>↓</span>
            </button>
          </div>
        )}
      </div>

      {/* Detail drawer (slides in from the right) */}
      <AnimatePresence>
        {active && activeDesc && activeTheme && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-zinc-950/50 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-md h-full overflow-y-auto bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            >
              {/* Accent gradient strip at the very top */}
              <div className={`h-1 w-full bg-gradient-to-r ${activeTheme.glow} to-transparent`} />

              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-100 dark:border-zinc-900">
                <div>
                  <span className="flex items-center gap-2 mb-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${activeTheme.dot}`} aria-hidden />
                    <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-full ${activeTheme.badge}`}>
                      {CATEGORY_LABEL[active.category][language]}
                    </span>
                  </span>
                  <h3 className="text-xl font-bold leading-tight text-zinc-900 dark:text-white">
                    {activeDesc.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label={language === 'es' ? 'Cerrar' : 'Close'}
                  className="shrink-0 -mr-1 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 rounded-lg p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  ✕
                </button>
              </div>

              <div className="px-6 py-6 space-y-7">
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{activeDesc.tagline}</p>

                <div className="relative pl-4">
                  <span className={`absolute left-0 top-1 bottom-1 w-0.5 rounded-full ${activeTheme.rail}`} aria-hidden />
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1.5">
                    {language === 'es' ? 'Problema' : 'Problem'}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{activeDesc.problem}</p>
                </div>

                <div className="relative pl-4">
                  <span className={`absolute left-0 top-1 bottom-1 w-0.5 rounded-full ${activeTheme.rail}`} aria-hidden />
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1.5">
                    {language === 'es' ? 'Solución' : 'Solution'}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{activeDesc.solution}</p>
                </div>

                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                    {language === 'es' ? 'Resultados' : 'Results'}
                  </p>
                  <ul className="space-y-2.5">
                    {activeDesc.results.map((r, idx) => (
                      <li key={idx} className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 flex items-start gap-2.5">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${activeTheme.dot}`} aria-hidden />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3 mt-5">
                    {language === 'es' ? 'Stack' : 'Tech stack'}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.tech.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
