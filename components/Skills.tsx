'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SkillCategory } from '@/types';

interface Props {
  data: SkillCategory[];
}

const levelLabels: Record<string, string> = {
  expert: 'Experto',
  advanced: 'Avanzado',
  intermediate: 'Intermedio',
  beginner: 'Básico',
};

const levelWidth: Record<string, string> = {
  expert: 'w-full',
  advanced: 'w-3/4',
  intermediate: 'w-1/2',
  beginner: 'w-1/4',
};

const levelColor: Record<string, string> = {
  expert: 'bg-cyan-400',
  advanced: 'bg-blue-400',
  intermediate: 'bg-violet-400',
  beginner: 'bg-zinc-500',
};

export default function Skills({ data }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          02. {t.nav.skills}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.skills.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              className="card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + catIdx * 0.07, duration: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                {cat.icon && <span className="text-lg">{cat.icon}</span>}
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{cat.category}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600">
                        {levelLabels[skill.level]}
                        {skill.years ? ` · ${skill.years}a` : ''}
                      </span>
                    </div>
                    <div className="h-0.5 bg-zinc-300 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${levelWidth[skill.level]} ${levelColor[skill.level]}`} />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
