'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

const paragraphs = [
  `Empecé construyendo aplicaciones web para negocios locales en Bolivia — cuatro proyectos, cero incumplimientos. Eso me llevó a liderar un equipo de cinco developers distribuidos en tres zonas horarias para una startup de EE.UU., donde aprendí que la calidad del software se mide en impacto de negocio, no en líneas de código.`,
  `Hoy trabajo en Envíame (Santiago, remoto) como Backend & AI Engineer. Implementé arquitecturas RAG con ADK y LangChain que mejoraron la precisión de los sistemas internos en 70%, y reduje la latencia entre microservicios en 25% migrando a gRPC. Mi especialidad es la intersección entre backends robustos e IA aplicada: construyo el sistema y lo hago inteligente.`,
  `Organizo y hablo en eventos de la comunidad Python — PyConChile 2025, PyDay La Paz 2024 — y competí en ACM-ICPC quedando entre los 90 mejores de LATAM y los 50 mejores de Bolivia.`,
];

export default function About({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre-mi" ref={ref} className="py-24 px-6 bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          01. sobre mí
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Quién soy
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text column */}
          <div className="md:col-span-3 space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-zinc-400 leading-relaxed text-sm"
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
                className="mt-6 pt-6 border-t border-zinc-800"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">Educación</p>
                {config.education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="text-sm text-white font-medium">{edu.degree}</p>
                    <p className="text-xs text-zinc-500 font-mono">
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
            {config.metrics.map((m) => (
              <div key={m.label} className="card p-5 flex items-center gap-4">
                <span className="text-3xl font-bold text-cyan-400 tabular-nums min-w-[72px]">{m.value}</span>
                <div>
                  <p className="text-white text-sm font-medium">{m.label}</p>
                  <p className="text-zinc-500 text-xs font-mono">{m.sub}</p>
                </div>
              </div>
            ))}

            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 hover:border-cyan-400/40 transition-colors group"
            >
              <p className="text-xs font-mono text-zinc-500 mb-1">GitHub</p>
              <p className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                @{config.contact.githubUsername} ↗
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
