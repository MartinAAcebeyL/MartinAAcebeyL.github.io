'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SkillCategory } from '@/types';

interface Props {
  data: SkillCategory[];
}

const categoryColors: Record<string, string> = {
  'Backend & Core Languages': 'border-cyan-400/30 bg-cyan-400/5 text-cyan-600 dark:text-cyan-400',
  'AI & Agents': 'border-purple-400/30 bg-purple-400/5 text-purple-600 dark:text-purple-400',
  'Backend Frameworks': 'border-blue-400/30 bg-blue-400/5 text-blue-600 dark:text-blue-400',
  'Bases de Datos': 'border-amber-400/30 bg-amber-400/5 text-amber-600 dark:text-amber-400',
  'Cloud & DevOps': 'border-emerald-400/30 bg-emerald-400/5 text-emerald-600 dark:text-emerald-400',
  'Frontend': 'border-pink-400/30 bg-pink-400/5 text-pink-600 dark:text-pink-400',
};

const getColorForCategory = (category: string): string => {
  return categoryColors[category] || 'border-zinc-400/30 bg-zinc-400/5 text-zinc-600 dark:text-zinc-400';
};

export default function Skills({ data }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();

  return (
    <section id="skills" ref={ref} className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          03. {t.nav.skills}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.skills.title}
        </motion.h2>

        <div className="space-y-8">
          {data.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + catIdx * 0.08, duration: 0.4 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                {cat.icon && <span className="text-xl">{cat.icon}</span>}
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{cat.category}</h3>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group relative px-3 py-1.5 rounded-full border text-xs font-medium transition-all hover:scale-105 ${getColorForCategory(cat.category)}`}
                    title={skill.evidence || ''}
                  >
                    <span className="flex items-center gap-1.5">
                      {skill.name}
                      {skill.years && (
                        <span className="text-[10px] font-mono opacity-70">
                          · {skill.years}a
                        </span>
                      )}
                    </span>
                    
                    {/* Tooltip on hover */}
                    {skill.evidence && (
                      <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-zinc-900 dark:bg-zinc-800 text-white text-[10px] rounded shadow-lg z-10">
                        {skill.evidence}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-800"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
