'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SkillCategory } from '@/types';

interface Props {
  data: SkillCategory[];
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              className="card p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + catIdx * 0.06, duration: 0.4 }}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                {cat.icon && <span className="text-lg leading-none">{cat.icon}</span>}
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{cat.category}</h3>
                <span className="ml-auto text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                  {cat.skills.length}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/chip relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all cursor-default hover:border-cyan-400/50 hover:bg-cyan-400/5 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/5"
                  >
                    {skill.devicon && (
                      <i className={`${skill.devicon} text-base leading-none`} />
                    )}
                    {skill.name}

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
