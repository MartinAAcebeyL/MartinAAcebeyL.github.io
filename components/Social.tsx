'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

export default function Social({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: config.contact.linkedin,
      description: t.social.subtitle,
      color: 'hover:border-blue-500/40 dark:hover:border-blue-400/40',
      featured: true,
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: config.contact.github,
      stats: [
        { label: t.social.repos, value: config.socialStats.github.repos },
        { label: t.social.stars, value: config.socialStats.github.stars },
      ],
      color: 'hover:border-purple-500/40 dark:hover:border-purple-400/40',
    },
    {
      name: 'LeetCode',
      icon: '💻',
      url: config.contact.leetcode,
      stats: [
        { label: t.social.problems, value: config.socialStats.leetcode.problems },
        { label: t.social.rating, value: config.socialStats.leetcode.rating },
      ],
      color: 'hover:border-amber-500/40 dark:hover:border-amber-400/40',
    },
    {
      name: 'Codeforces',
      icon: '🏅',
      url: config.contact.codeforces,
      stats: [
        { label: t.social.rating, value: config.socialStats.codeforces.rating },
      ],
      color: 'hover:border-red-500/40 dark:hover:border-red-400/40',
    },
    {
      name: 'HackerRank',
      icon: '👨‍💻',
      url: config.contact.hackerrank,
      color: 'hover:border-emerald-500/40 dark:hover:border-emerald-400/40',
    },
  ];

  return (
    <section id="social" ref={ref} className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          06. {t.social.title}
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          {t.social.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socialPlatforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card p-5 transition-all group ${platform.color} ${
                platform.featured ? 'lg:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{platform.icon}</span>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {platform.name}
                  </h3>
                  
                  {platform.description && (
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2">
                      {platform.description}
                    </p>
                  )}

                  {platform.stats && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {platform.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-lg font-bold text-cyan-500 dark:text-cyan-400 tabular-nums">
                            {stat.value}
                          </p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-500 font-mono">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400 mt-2 group-hover:translate-x-1 transition-transform">
                    View profile →
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
