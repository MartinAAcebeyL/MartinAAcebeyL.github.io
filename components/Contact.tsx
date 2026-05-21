'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

export default function Contact({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          06. contacto
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Hablemos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email CTA */}
          <motion.a
            href={`mailto:${config.contact.email}`}
            className="card p-8 hover:border-cyan-400/40 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              Email directo
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Para propuestas de trabajo, colaboraciones o consultas sobre proyectos.
            </p>
            <p className="text-sm font-mono text-cyan-400">{config.contact.email} →</p>
          </motion.a>

          {/* LinkedIn CTA */}
          <motion.a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-8 hover:border-cyan-400/40 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              LinkedIn
            </h3>
            <p className="text-sm text-zinc-400 mb-4">
              Perfil completo, endorsements y recomendaciones de colegas y clientes.
            </p>
            <p className="text-sm font-mono text-cyan-400">Ver perfil →</p>
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
            className="text-sm font-mono text-zinc-500 hover:text-white transition-colors">
            GitHub ↗
          </a>
          <a href={config.contact.leetcode} target="_blank" rel="noopener noreferrer"
            className="text-sm font-mono text-zinc-500 hover:text-white transition-colors">
            LeetCode ↗
          </a>
          <a href={config.contact.codeforces} target="_blank" rel="noopener noreferrer"
            className="text-sm font-mono text-zinc-500 hover:text-white transition-colors">
            Codeforces ↗
          </a>
          <a href={config.contact.cvUrl}
            className="text-sm font-mono text-zinc-500 hover:text-white transition-colors">
            Descargar CV ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
