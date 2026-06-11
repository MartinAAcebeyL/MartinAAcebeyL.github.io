'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { Project } from '@/types';

interface Props {
  data: Project[];
}

const INITIAL_VISIBLE = 6;

export default function Projects({ data }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { t, language } = useTranslation();

  const highlighted = data.filter((p) => p.highlight);
  const others = data.filter((p) => !p.highlight);
  const visibleOthers = showAll ? others : others.slice(0, INITIAL_VISIBLE);

  const detailsLabel = language === 'es' ? 'Ver detalles' : 'View details';

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

        {/* Highlighted — large feature cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {highlighted.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              className={`group relative text-left rounded-2xl overflow-hidden p-6 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.45 }}
            >
              {/* gradient glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.85l-5.2 2.66.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
                  </svg>
                  {language === 'es' ? 'Destacado' : 'Featured'}
                </span>

                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl">{project.tagline}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {detailsLabel} →
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* The rest — clean uniform grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleOthers.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              className="group relative text-left rounded-xl p-5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.04, duration: 0.35 }}
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 flex-1">{project.tagline}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="tech-badge">+{project.tech.length - 4}</span>
                )}
              </div>

              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
                {detailsLabel} →
              </span>
            </motion.button>
          ))}
        </div>

        {/* Show more / less */}
        {others.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="text-sm font-mono text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-200 px-4 py-2 rounded-lg border border-cyan-500/20 dark:border-cyan-400/20 bg-cyan-500/5 dark:bg-cyan-400/5 hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 active:scale-[0.97]"
            >
              {showAll
                ? (language === 'es' ? 'Ver menos ↑' : 'Show less ↑')
                : (language === 'es'
                    ? `Ver ${others.length - INITIAL_VISIBLE} proyectos más ↓`
                    : `Show ${others.length - INITIAL_VISIBLE} more projects ↓`)}
            </button>
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="sticky top-0 flex items-start justify-between gap-4 p-6 pb-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{active.title}</h3>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label={language === 'es' ? 'Cerrar' : 'Close'}
                  className="shrink-0 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 rounded-md p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 pt-4 space-y-5">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{active.tagline}</p>

                <div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-1">
                    {language === 'es' ? 'Problema' : 'Problem'}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{active.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-1">
                    {language === 'es' ? 'Solución' : 'Solution'}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{active.solution}</p>
                </div>

                <div>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2">
                    {language === 'es' ? 'Resultados' : 'Results'}
                  </p>
                  <ul className="space-y-1">
                    {active.results.map((r, idx) => (
                      <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                        <span className="text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0">→</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {active.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
