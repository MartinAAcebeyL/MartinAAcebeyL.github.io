'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

const typeColor: Record<string, string> = {
  talk: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  article: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  whitepaper: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  competition: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  award: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  meetup: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
};

export default function Publications({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t, language } = useTranslation();

  return (
    <section id="publications" ref={ref} className="py-24 px-6 bg-zinc-100/50 dark:bg-zinc-900/20">
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

        {/* Publications Section */}
        {config.publications && config.publications.length > 0 && (
          <div className="mb-12">
            <motion.h3
              className="text-sm font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {t.community.publications}
            </motion.h3>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {config.publications.map((pub, i) => (
                <motion.div
                  key={pub.title}
                  className="card p-6 hover:border-transparent transition-[border-color,box-shadow,transform] duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-4xl flex-shrink-0">{pub.thumbnail}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1.5 line-clamp-2">
                        {pub.title}
                      </h4>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2">
                        {pub.event || pub.platform} · {pub.date}
                      </p>
                      <span className={`inline-block text-[10px] font-mono border px-2 py-1 rounded-md transition-colors duration-200 ${typeColor[pub.type]}`}>
                        {pub.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                    {pub.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-200 dark:border-zinc-800/50">
                    {pub.videoUrl && pub.videoUrl !== '#' && (
                      <a
                        href={pub.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-150 hover:underline min-h-[32px] flex items-center"
                      >
                        {t.community.viewRecording} ↗
                      </a>
                    )}
                    {pub.slidesUrl && pub.slidesUrl !== '#' && (
                      <a
                        href={pub.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-150 hover:underline min-h-[32px] flex items-center"
                      >
                        {t.community.viewSlides} ↗
                      </a>
                    )}
                    {pub.url && pub.url !== '#' && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-150 hover:underline min-h-[32px] flex items-center"
                      >
                        {t.community.viewArticle} ↗
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Community Participation Section */}
        {config.community && config.community.length > 0 && (
          <div>
            <motion.h3
              className="text-sm font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {language === 'es' ? 'Participación Comunitaria' : 'Community Participation'}
            </motion.h3>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {config.community.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="card p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.4 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</h4>
                        <span className={`text-[10px] font-mono border px-1.5 py-0.5 rounded ${typeColor[item.type]}`}>
                          {item.year}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
