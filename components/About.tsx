'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { siteConfig } from '@/lib/data';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

export default function About({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useTranslation();

  const paragraphs = [
    t.about.journey,
    t.about.current,
    t.about.community,
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-zinc-100/50 dark:bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          01. {t.nav.about}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {t.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text column */}
          <div className="md:col-span-3 space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
              >
                {p}
              </motion.p>
            ))}

            {/* Education */}
            {config.education[0] && (
              <motion.div
                className="mt-6 pt-6 border-t border-zinc-300 dark:border-zinc-800"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500 mb-2 uppercase tracking-widest">Educación</p>
                {config.education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="text-sm text-zinc-900 dark:text-white font-medium">{edu.degree}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                      {edu.institution} · {edu.period}
                      {edu.distinction ? ` · ${edu.distinction}` : ''}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Metric column */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="card p-5 flex items-center gap-4">
              <span className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 tabular-nums min-w-[72px]">{t.about.metrics.years.value}</span>
              <div>
                <p className="text-zinc-900 dark:text-white text-sm font-medium">{t.about.metrics.years.label}</p>
                <p className="text-zinc-500 dark:text-zinc-500 text-xs font-mono">{t.about.metrics.years.sublabel}</p>
              </div>
            </div>
            <div className="card p-5 flex items-center gap-4">
              <span className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 tabular-nums min-w-[72px]">{t.about.metrics.accuracy.value}</span>
              <div>
                <p className="text-zinc-900 dark:text-white text-sm font-medium">{t.about.metrics.accuracy.label}</p>
                <p className="text-zinc-500 dark:text-zinc-500 text-xs font-mono">{t.about.metrics.accuracy.sublabel}</p>
              </div>
            </div>
            <div className="card p-5 flex items-center gap-4">
              <span className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 tabular-nums min-w-[72px]">{t.about.metrics.uptime.value}</span>
              <div>
                <p className="text-zinc-900 dark:text-white text-sm font-medium">{t.about.metrics.uptime.label}</p>
                <p className="text-zinc-500 dark:text-zinc-500 text-xs font-mono">{t.about.metrics.uptime.sublabel}</p>
              </div>
            </div>

            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-colors group"
            >
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500 mb-1">{t.contact.github}</p>
              <p className="text-sm text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                @{config.contact.githubUsername} ↗
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
