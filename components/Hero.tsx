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
  const { t, language } = useTranslation();


  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 px-6">
      {/* Maintenance Banner */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/10 dark:to-blue-950/10 border-b border-cyan-200/50 dark:border-cyan-800/50 py-3 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
          <span className="text-cyan-500 dark:text-cyan-400 text-sm">🚧</span>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
            {language === 'es'
              ? 'Este portafolio está en constante evolución y mejora'
              : 'This portfolio is constantly evolving and improving'
            }
          </p>
        </div>
      </div>
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
          style={{ textWrap: 'balance' } as any}
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
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-4 leading-relaxed" style={{ textWrap: 'pretty' } as any}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-zinc-500 dark:text-zinc-500 max-w-2xl mb-10 leading-relaxed text-sm" style={{ textWrap: 'pretty' } as any}
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
            className="px-6 py-3 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-zinc-950 font-semibold rounded-xl hover:bg-cyan-600 dark:hover:bg-cyan-300 active:scale-[0.96] transition-[background-color,transform] duration-200 text-sm min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg dark:shadow-cyan-500/20 dark:hover:shadow-cyan-500/30"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-xl hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 active:scale-[0.96] transition-[border-color,background-color,transform] duration-200 text-sm min-h-[44px] flex items-center justify-center"
          >
            {t.contact.title}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
