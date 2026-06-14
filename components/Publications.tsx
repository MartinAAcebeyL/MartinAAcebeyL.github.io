'use client';

import { useRef, useState, useLayoutEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import type { SiteConfig } from '@/types';

interface Props {
  config: SiteConfig;
}

type TranslationShape = ReturnType<typeof useTranslation>['t'];

const communityItemsBase = [
  { type: 'workshop',    icon: '🎤', title: 'PyCon Chile 2025',  key: 'pyconchile',         year: '2025' },
  { type: 'competition', icon: '🏆', title: 'ACM-ICPC LATAM',    key: 'acmicpc',            year: '2023' },
  { type: 'award',       icon: '⭐', title: 'Mención de Honor',  key: 'mention',            year: '2023' },
  { type: 'meetup',      icon: '🐍', title: 'Python Sucre',      key: 'pythonSucreLead',    year: '2023-2026' },
  { type: 'meetup',      icon: '🤝', title: 'Python Sucre Summit', key: 'pythonSucreSummit', year: '2025' },
  { type: 'meetup',      icon: '🎪', title: 'PyCon Bolivia',     key: 'pyconBolivia',       year: '2022–2023' },
  { type: 'meetup',      icon: '🧮', title: 'ACM-Sucre',         key: 'acmSucre',           year: '2023-2024' },
  { type: 'meetup',      icon: '👩‍💻', title: 'PyLadies Cochabamba', key: 'pyladiesCochabamba', year: '2021' },
  { type: 'talk',        icon: '🎤', title: 'PyDay La Paz 2024', key: 'grpcPyday', year: '2024' },
  { type: 'talk',        icon: '🎤', title: 'PyCon con Altura',      key: 'pyConAltura', year: '2025' },
] as const;

const typeColor: Record<string, string> = {
  talk: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  workshop: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  article: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  whitepaper: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  competition: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  award: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  meetup: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
};

// Per-type accent for the timeline dot + ping ring (literal classes for Tailwind JIT).
const typeDot: Record<string, { dot: string; ring: string; glow: string }> = {
  talk:        { dot: 'bg-cyan-400',    ring: 'bg-cyan-400/40',    glow: 'shadow-[0_0_12px_2px_rgba(34,211,238,0.5)]' },
  workshop:    { dot: 'bg-violet-400',  ring: 'bg-violet-400/40',  glow: 'shadow-[0_0_12px_2px_rgba(167,139,250,0.5)]' },
  competition: { dot: 'bg-amber-400',   ring: 'bg-amber-400/40',   glow: 'shadow-[0_0_12px_2px_rgba(251,191,36,0.5)]' },
  award:       { dot: 'bg-emerald-400', ring: 'bg-emerald-400/40', glow: 'shadow-[0_0_12px_2px_rgba(52,211,153,0.5)]' },
  meetup:      { dot: 'bg-pink-400',    ring: 'bg-pink-400/40',    glow: 'shadow-[0_0_12px_2px_rgba(244,114,182,0.5)]' },
};

// Sort newest-first by the latest year mentioned in the (possibly ranged) year string.
const latestYear = (y: string) => {
  const nums = y.match(/\d{4}/g);
  return nums ? Math.max(...nums.map(Number)) : 0;
};

type SnakeItem = (typeof communityItemsBase)[number];

// Map the per-type dot color to a matching popover ring/accent (literal classes).
const typePopover: Record<string, string> = {
  talk:        'ring-cyan-400/40',
  workshop:    'ring-violet-400/40',
  competition: 'ring-amber-400/40',
  award:       'ring-emerald-400/40',
  meetup:      'ring-pink-400/40',
};

/**
 * Snake-game timeline. Every event is a "pellet" (a small dot) and the dots are
 * laid out in a compact boustrophedon grid joined by a connecting body — like
 * the snake in the classic game. Hovering / focusing a pellet pops a card with
 * the full details. Very space-efficient: the whole history fits in a few rows.
 */
function SnakeTimeline({
  items,
  t,
  inView,
}: {
  items: readonly SnakeItem[];
  t: TranslationShape;
  inView: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Measure the board width so the wavy body is drawn in real px (no stretch).
  useLayoutEffect(() => {
    const measure = () => setWidth(boardRef.current?.clientWidth ?? 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Pellets ride a single continuous sine wave from left to right: evenly
  // spaced on X, Y oscillates up/down — a slithering snake, not a grid.
  const n = items.length;
  const padX = 36;                 // keep end pellets off the edges
  const amplitude = 34;            // how tall the wave is
  const waves = 2.2;               // number of up/down humps across the width
  const midY = 56;                 // vertical center
  const height = midY + amplitude + 36;

  const xAt = (i: number) =>
    n <= 1 ? width / 2 : padX + (i / (n - 1)) * Math.max(0, width - padX * 2);
  const yAt = (i: number) =>
    n <= 1 ? midY : midY - Math.sin((i / (n - 1)) * Math.PI * 2 * waves) * amplitude;

  // Smooth Catmull-Rom → Bézier path threaded through all pellet centers.
  const bodyPath = (() => {
    if (!width || n < 2) return '';
    const pts = items.map((_, i) => ({ x: xAt(i), y: yAt(i) }));
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] ?? pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] ?? p2;
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  })();

  return (
    <div className="relative">
      <p className="mb-4 text-[11px] font-mono text-zinc-400 dark:text-zinc-600">
        <span className="inline-block">🐍</span> hover / tap
      </p>

      {/* Snake board — full width, fluid */}
      <div ref={boardRef} className="relative w-full" style={{ height }}>
        {/* Smooth wavy body threaded through every pellet (Catmull-Rom→Bézier). */}
        {width > 0 && (
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="snakeBody" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(34,211,238)" stopOpacity="0.45" />
                <stop offset="50%" stopColor="rgb(167,139,250)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(244,114,182)" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            {/* main body */}
            <motion.path
              d={bodyPath}
              stroke="url(#snakeBody)"
              strokeWidth={18}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.6, ease: 'easeInOut' }}
            />
            {/* belly highlight */}
            <motion.path
              d={bodyPath}
              className="text-white/50 dark:text-white/15"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.6, ease: 'easeInOut' }}
            />
          </svg>
        )}

        {/* Pellets, placed along the wave */}
        {width > 0 && items.map((item, i) => {
          const translated = t.communityItems[item.key as keyof typeof t.communityItems];
          const accent = typeDot[item.type] ?? typeDot.talk;
          const ring = typePopover[item.type] ?? typePopover.talk;
          const isActive = active === i;
          const isHead = i === 0;
          // Flip popover below the pellet when it sits high (near the top edge).
          const below = yAt(i) < midY;
          return (
            <motion.button
              key={item.title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive((cur) => (cur === i ? null : cur))}
              onFocus={() => setActive(i)}
              onBlur={() => setActive((cur) => (cur === i ? null : cur))}
              onClick={() => setActive((cur) => (cur === i ? null : i))}
              aria-label={`${translated.title} — ${item.year}`}
              className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
              style={{ left: xAt(i), top: yAt(i), zIndex: isActive ? 60 : undefined }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.45 + i * 0.07, type: 'spring', stiffness: 380, damping: 20 }}
              whileHover={{ scale: 1.18 }}
            >
              {isHead && (
                <span className={`absolute inline-flex h-14 w-14 animate-ping rounded-full ${accent.ring}`} aria-hidden />
              )}
              <span
                className={`relative flex h-14 w-14 items-center justify-center rounded-full text-xl ${accent.dot} ${accent.glow} ring-[3px] ring-white/80 dark:ring-zinc-950/80`}
              >
                {item.icon}
              </span>

              <AnimatePresence>
                {isActive && (
                  <motion.span
                    role="tooltip"
                    className={`card absolute left-1/2 z-50 w-60 -translate-x-1/2 cursor-default p-3.5 text-left ring-1 ${ring} ${below ? 'top-full mt-3' : 'bottom-full mb-3'}`}
                    initial={{ opacity: 0, y: below ? -6 : 6, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: below ? -6 : 6, scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    <span className="mb-1 flex items-center gap-2">
                      <span className="text-lg leading-none">{item.icon}</span>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">{translated.title}</span>
                    </span>
                    <span className="mb-1.5 flex items-center gap-2">
                      <span className={`text-[10px] font-mono border px-1.5 py-0.5 rounded ${typeColor[item.type]}`}>
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500">{translated.role}</span>
                    </span>
                    <span className="block text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">{translated.desc}</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Legend so colors are decodable (only show types actually present) */}
      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-mono text-zinc-500 dark:text-zinc-500">
        {([
          ['workshop', 'bg-violet-400'],
          ['talk', 'bg-cyan-400'],
          ['meetup', 'bg-pink-400'],
          ['competition', 'bg-amber-400'],
          ['award', 'bg-emerald-400'],
        ] as const)
          .filter(([type]) => items.some((it) => it.type === type))
          .map(([type, dot]) => (
            <span key={type} className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
              {t.communityTypes[type as keyof typeof t.communityTypes]}
            </span>
          ))}
      </div>
    </div>
  );
}


export default function Publications({ config }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // Newest-first chronological order for the timeline.
  const timelineItems = [...communityItemsBase].sort(
    (a, b) => latestYear(b.year) - latestYear(a.year)
  );

  const toggleExpanded = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section id="publications" ref={ref} className="py-14 px-6 bg-zinc-100/50 dark:bg-zinc-900/20">
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
            
            <div className="flex flex-col gap-2">
              {config.publications.map((pub, i) => {
                const isExpanded = expanded.has(pub.title);
                const links = [
                  pub.videoUrl && pub.videoUrl !== '#' && { href: pub.videoUrl, label: t.community.viewRecording },
                  pub.slidesUrl && pub.slidesUrl !== '#' && { href: pub.slidesUrl, label: t.community.viewSlides },
                  pub.url && pub.url !== '#' && { href: pub.url, label: t.community.viewArticle },
                ].filter(Boolean) as { href: string; label: string }[];

                return (
                  <motion.div
                    key={pub.title}
                    className="card px-4 py-3 transition-[border-color,box-shadow,transform] duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white truncate">
                          {t.publicationTitles[pub.descriptionKey as keyof typeof t.publicationTitles] ?? pub.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                            {pub.event || pub.platform} · {pub.date}
                          </p>
                          <span className={`inline-block text-[10px] font-mono border px-1.5 py-0.5 rounded-md transition-colors duration-200 ${typeColor[pub.type]}`}>
                            {pub.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        {links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-150 hover:underline"
                          >
                            {l.label} ↗
                          </a>
                        ))}
                        <button
                          onClick={() => toggleExpanded(pub.title)}
                          aria-label={isExpanded ? t.community.showLess : t.community.showMore}
                          className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-[color,transform] duration-200"
                        >
                          <span className={`inline-block transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>▾</span>
                        </button>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-3 mt-3 border-t border-zinc-200 dark:border-zinc-800/50">
                            {t.publicationDescriptions[pub.descriptionKey]}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
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
              {t.communityLabels.communityParticipation}
            </motion.h3>
            
            <SnakeTimeline items={timelineItems} t={t} inView={inView} />
          </div>
        )}
      </div>
    </section>
  );
}
