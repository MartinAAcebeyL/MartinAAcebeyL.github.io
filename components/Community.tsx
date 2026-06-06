'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

const communityItemsBase = [
  { type: 'talk',        icon: '🎤', title: 'PyConChile 2025',  key: 'pyconchile', year: '2025' },
  { type: 'talk',        icon: '🎤', title: 'PyDay La Paz 2024', key: 'pyday',      year: '2024' },
  { type: 'competition', icon: '🏆', title: 'ACM-ICPC LATAM',    key: 'acmicpc',    year: '2023' },
  { type: 'award',       icon: '⭐', title: 'Mención de Honor',  key: 'mention',    year: '2022' },
] as const;

const typeColor: Record<string, string> = {
  talk: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  competition: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  award: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
};

export default function Community({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();

  return (
    <section id="community" ref={ref} className="py-14 px-6 bg-zinc-100/50 dark:bg-zinc-900/20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          05. {t.nav.community}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.community.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {communityItemsBase.map((item, i) => {
            const translated = t.communityItems[item.key];
            return (
              <motion.div
                key={item.title}
                className="card p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                      <span className={`text-[10px] font-mono border px-1.5 py-0.5 rounded ${typeColor[item.type]}`}>
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500">{translated.role}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{translated.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        {config.certifications.length > 0 && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-4">
              {t.communityLabels.certifications}
            </h3>
            <div className="flex flex-wrap gap-2">
              {config.certifications.map((cert) => (
                <div key={cert.name} className="tech-badge py-1.5 px-3">
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer"
                      className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                      {cert.name}{cert.issuer ? ` · ${cert.issuer}` : ''}{cert.year ? ` · ${cert.year}` : ''}
                    </a>
                  ) : (
                    <span>{cert.name}{cert.issuer ? ` · ${cert.issuer}` : ''}{cert.year ? ` · ${cert.year}` : ''}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
