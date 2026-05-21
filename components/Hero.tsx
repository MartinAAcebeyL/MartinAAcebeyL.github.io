'use client';

import { motion } from 'framer-motion';
import type { SiteConfig } from '@/types';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: 'easeOut' },
  }),
};

interface Props {
  config: SiteConfig;
}

export default function Hero({ config }: Props) {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full py-24">

        {/* Availability badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          {config.availabilityLabel}
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
        >
          {config.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl font-mono text-cyan-400 mb-6"
        >
          {config.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-zinc-400 max-w-2xl mb-4 leading-relaxed"
        >
          {config.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-zinc-500 max-w-2xl mb-10 leading-relaxed text-sm"
        >
          4+ años diseñando backends distribuidos en HealthTech, HRTech y Logistics.
          Implementé arquitecturas RAG con ADK y LangChain que mejoraron la precisión de sistemas
          internos en 70%. Speaker en PyConChile 2025.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 mb-20"
        >
          <a
            href="#proyectos"
            className="px-6 py-3 bg-cyan-400 text-zinc-950 font-semibold rounded-lg hover:bg-cyan-300 active:bg-cyan-500 transition-colors text-sm"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:border-zinc-500 hover:bg-zinc-900 transition-colors text-sm"
          >
            Contactar
          </a>
          <a
            href={config.contact.cvUrl}
            className="px-6 py-3 border border-zinc-800 text-zinc-400 font-semibold rounded-lg hover:text-white hover:border-zinc-600 transition-colors text-sm"
          >
            Descargar CV
          </a>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl"
        >
          {config.metrics.map((metric) => (
            <div key={metric.label} className="card p-5">
              <div className="text-3xl font-bold text-cyan-400 tabular-nums">{metric.value}</div>
              <div className="text-sm text-white mt-1 font-medium leading-tight">{metric.label}</div>
              <div className="text-xs text-zinc-500 font-mono mt-1">{metric.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-4 mt-10"
        >
          <a href={config.contact.github} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 hover:text-cyan-400 transition-colors">
            GitHub ↗
          </a>
          <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 hover:text-cyan-400 transition-colors">
            LinkedIn ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
