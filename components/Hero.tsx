'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { siteConfig } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full py-24">

        {/* Availability badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 text-xs font-mono text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-500/20 dark:border-emerald-400/20 px-3 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
          {t.hero.availability}
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight tracking-tight"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl font-mono text-cyan-500 dark:text-cyan-400 mb-6"
        >
          {t.hero.role}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-4 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-zinc-500 dark:text-zinc-500 max-w-2xl mb-10 leading-relaxed text-sm"
        >
          {t.hero.description}
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
            href="#projects"
            className="px-6 py-3 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-zinc-950 font-semibold rounded-lg hover:bg-cyan-600 dark:hover:bg-cyan-300 active:bg-cyan-700 dark:active:bg-cyan-500 transition-colors text-sm"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
          >
            {t.contact.title}
          </a>
          <a
            href={siteConfig.contact.cvUrl}
            className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold rounded-lg hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors text-sm"
          >
            {t.hero.downloadCV}
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
          <div className="card p-5">
            <div className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 tabular-nums">{t.hero.metrics.accuracy.value}</div>
            <div className="text-sm text-zinc-900 dark:text-white mt-1 font-medium leading-tight">{t.hero.metrics.accuracy.label}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-500 font-mono mt-1">{t.hero.metrics.accuracy.context}</div>
          </div>
          <div className="card p-5">
            <div className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 tabular-nums">{t.hero.metrics.requests.value}</div>
            <div className="text-sm text-zinc-900 dark:text-white mt-1 font-medium leading-tight">{t.hero.metrics.requests.label}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-500 font-mono mt-1">{t.hero.metrics.requests.context}</div>
          </div>
          <div className="card p-5">
            <div className="text-3xl font-bold text-cyan-500 dark:text-cyan-400 tabular-nums">{t.hero.metrics.experience.value}</div>
            <div className="text-sm text-zinc-900 dark:text-white mt-1 font-medium leading-tight">{t.hero.metrics.experience.label}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-500 font-mono mt-1">{t.hero.metrics.experience.context}</div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-4 mt-10"
        >
          <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            {t.contact.github} ↗
          </a>
          <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
            {t.contact.linkedin} ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
