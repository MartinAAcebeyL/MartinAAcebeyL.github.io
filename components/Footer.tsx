'use client';

import { useTranslation } from '@/hooks/useTranslation';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

export default function Footer({ config }: Props) {
  const year = new Date().getFullYear();
  const { t, language } = useTranslation();

  return (
    <footer className="border-t border-zinc-300 dark:border-zinc-800">
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

      {/* Footer Content */}
      <div className="py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-mono text-cyan-500 dark:text-cyan-400 font-bold text-sm">{config.name}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-0.5">{config.role} · {config.location}</p>
        </div>

        <div className="flex gap-5">
          <a href={config.contact.github} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400 transition-colors">
            {t.contact.github}
          </a>
          <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-500 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400 transition-colors">
            {t.contact.linkedin}
          </a>
          <a href={`mailto:${config.contact.email}`}
            className="text-xs font-mono text-zinc-500 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400 transition-colors">
            {t.contact.email}
          </a>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-700 font-mono">
          © {year} {config.fullName}
        </p>
      </div>
      </div>
    </footer>
  );
}
