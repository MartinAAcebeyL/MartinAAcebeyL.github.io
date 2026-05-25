'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

export default function Contact({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t, language } = useTranslation();

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          06. {t.nav.contact}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.contact.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email CTA */}
          <motion.a
            href={`mailto:${config.contact.email}`}
            className="card p-8 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              {language === 'es' ? 'Email directo' : 'Direct email'}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              {t.contact.subtitle}
            </p>
            <p className="text-sm font-mono text-cyan-500 dark:text-cyan-400">{config.contact.email} →</p>
          </motion.a>

          {/* LinkedIn CTA */}
          <motion.a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-8 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
              {t.contact.linkedin}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              {language === 'es' 
                ? 'Perfil completo, endorsements y recomendaciones de colegas y clientes.'
                : 'Full profile, endorsements and recommendations from colleagues and clients.'
              }
            </p>
            <p className="text-sm font-mono text-cyan-500 dark:text-cyan-400">
              {language === 'es' ? 'Ver perfil →' : 'View profile →'}
            </p>
          </motion.a>
        </div>

        {/* Extra links */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
        >
          <a href={config.contact.github} target="_blank" rel="noopener noreferrer"
            className="text-sm font-mono text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {t.contact.github} ↗
          </a>
          <a href={config.contact.leetcode} target="_blank" rel="noopener noreferrer"
            className="text-sm font-mono text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
            LeetCode ↗
          </a>
          <a href={config.contact.codeforces} target="_blank" rel="noopener noreferrer"
            className="text-sm font-mono text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
            Codeforces ↗
          </a>
          <a href={config.contact.cvUrl}
            className="text-sm font-mono text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
            {t.nav.downloadCV} ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
