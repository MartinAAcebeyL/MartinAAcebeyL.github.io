'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';

interface Props {
  data: Project[];
}

const typeLabel: Record<string, string> = {
  professional: 'Profesional',
  personal: 'Personal',
};

export default function Projects({ data }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="proyectos" ref={ref} className="py-24 px-6 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          03. proyectos
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Lo que he construido
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {data.map((project, i) => {
            const isOpen = expanded === project.id;
            return (
              <motion.article
                key={project.id}
                className={`card overflow-hidden ${project.highlight ? 'md:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                          project.type === 'professional'
                            ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                            : 'bg-violet-400/10 text-violet-400 border border-violet-400/20'
                        }`}>
                          {typeLabel[project.type]}
                        </span>
                        {project.company && (
                          <span className="text-xs text-zinc-500 font-mono">{project.company}</span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-white">{project.title}</h3>
                    </div>
                    {project.repoPublic && (
                      <span className="text-xs font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded shrink-0">
                        Open source
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-zinc-400 mb-4">{project.tagline}</p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => setExpanded(isOpen ? null : project.id)}
                    className="text-xs font-mono text-zinc-500 hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    {isOpen ? 'Ocultar detalles ↑' : 'Ver detalles ↓'}
                  </button>
                </div>

                {/* Expandable details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-zinc-800"
                    >
                      <div className="p-6 grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Problema</p>
                          <p className="text-sm text-zinc-400">{project.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Solución</p>
                          <p className="text-sm text-zinc-400">{project.solution}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Resultados</p>
                          <ul className="space-y-1">
                            {project.results.map((r, idx) => (
                              <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                                <span className="text-cyan-400 mt-0.5 shrink-0">→</span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
