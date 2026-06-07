'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { ExperienceEntry, ExperienceRole } from '@/types';

interface Props {
  data: ExperienceEntry[];
}

function RoleItem({ role, isLast, showTimeline, defaultOpen }: { role: ExperienceRole; isLast: boolean; showTimeline: boolean; defaultOpen: boolean }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(defaultOpen);
  const roleT = t.experienceRoles[role.roleKey as keyof typeof t.experienceRoles];

  return (
    <div className={`relative ${showTimeline ? 'pl-8' : ''}`}>
      {/* Mini timeline */}
      {showTimeline && (
        <>
          {!isLast && <div className="absolute left-[7px] top-6 bottom-0 w-px bg-zinc-300 dark:bg-zinc-800" />}
          <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white dark:bg-zinc-950 border-zinc-400 dark:border-zinc-600" />
        </>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full text-left group"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-2">
            <svg
              className={`w-4 h-4 mt-1 shrink-0 text-zinc-400 dark:text-zinc-600 transition-transform ${open ? 'rotate-90' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                {roleT.role}
              </h3>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-600 bg-zinc-200/60 dark:bg-zinc-800/60 px-2 py-0.5 rounded inline-block mt-1.5">
                {roleT.industry}
              </span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">{roleT.periodLabel}</p>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-600">{roleT.duration}</p>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-6">
              <ul className="space-y-2 mb-4">
                {roleT.achievements.map((a, idx) => (
                  <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                    <span className="text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0">→</span>
                    {a}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {role.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CompanyCard({ entry, index, inView }: { entry: ExperienceEntry; index: number; inView: boolean }) {
  const { t } = useTranslation();
  const location = t.experienceLocations[entry.id as keyof typeof t.experienceLocations];

  return (
    <motion.div
      className="relative md:pl-12"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-7 h-7 hidden md:flex items-center justify-center">
        <div className={`w-2.5 h-2.5 rounded-full border-2 ${
          index === 0 ? 'bg-cyan-500 dark:bg-cyan-400 border-cyan-500 dark:border-cyan-400' : 'bg-white dark:bg-zinc-950 border-zinc-400 dark:border-zinc-600'
        }`} />
      </div>

      <div className="card p-6">
        {/* Company header (shown once) */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{entry.company}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">{location}</span>
              {entry.teamSize && (
                <>
                  <span className="text-zinc-400 dark:text-zinc-600">·</span>
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-600 bg-zinc-200/60 dark:bg-zinc-800/60 px-2 py-0.5 rounded">
                    {t.experience.team}{entry.teamSize}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Roles stacked vertically (LinkedIn-style) */}
        <div className="space-y-5">
          {entry.roles.map((role, i) => (
            <RoleItem
              key={role.id}
              role={role}
              isLast={i === entry.roles.length - 1}
              showTimeline={entry.roles.length > 1}
              defaultOpen={role.period.end === null}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience({ data }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();

  return (
    <section id="experience" ref={ref} className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          04. {t.nav.experience}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.experience.title}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-zinc-300 dark:bg-zinc-800 hidden md:block" />

          <div className="space-y-8">
            {data.map((entry, i) => (
              <CompanyCard key={entry.id} entry={entry} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
