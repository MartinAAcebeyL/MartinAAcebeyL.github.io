'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { ExperienceEntry } from '@/types';

interface Props {
  data: ExperienceEntry[];
}

export default function Experience({ data }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();

  return (
    <section id="experience" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          04. {t.nav.experience}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.experience.title}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-zinc-300 dark:bg-zinc-800 hidden md:block" />

          <div className="space-y-8">
            {data.map((entry, i) => (
              <motion.div
                key={entry.id}
                className="relative md:pl-12"
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-7 h-7 hidden md:flex items-center justify-center">
                  <div className={`w-2.5 h-2.5 rounded-full border-2 ${
                    i === 0 ? 'bg-cyan-500 dark:bg-cyan-400 border-cyan-500 dark:border-cyan-400' : 'bg-white dark:bg-zinc-950 border-zinc-400 dark:border-zinc-600'
                  }`} />
                </div>

                <div className="card p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{entry.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-sm text-cyan-500 dark:text-cyan-400 font-medium">{entry.company}</span>
                        <span className="text-zinc-400 dark:text-zinc-600">·</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">{entry.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">{entry.periodLabel}</p>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-600">{entry.duration}</p>
                    </div>
                  </div>

                  {/* Industry + team */}
                  <div className="flex gap-4 mb-4">
                    {entry.industry && (
                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-600 bg-zinc-200/60 dark:bg-zinc-800/60 px-2 py-0.5 rounded">
                        {entry.industry}
                      </span>
                    )}
                    {entry.teamSize && (
                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-600 bg-zinc-200/60 dark:bg-zinc-800/60 px-2 py-0.5 rounded">
                        {t.language === 'es' ? 'Equipo: ' : 'Team: '}{entry.teamSize}
                      </span>
                    )}
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {entry.achievements.map((a, idx) => (
                      <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                        <span className="text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0">→</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {entry.techStack.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
