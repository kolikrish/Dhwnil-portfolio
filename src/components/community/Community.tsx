"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DoodleStar, HandNote, Scribble, Tape } from "@/components/ui/Doodles";
import { ArrowUpRightIcon, UsersIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { communityRoles, eventPhotos, type EventPhoto } from "@/lib/content";

const CATEGORIES = ["All", "Meetups", "Workshops", "Seminars", "Speaking"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export function Community() {
  const [filter, setFilter] = useState<CategoryFilter>("All");

  const filteredPhotos = filter === "All"
    ? eventPhotos
    : eventPhotos.filter((p) => p.category === filter);

  return (
    <section id="community" aria-labelledby="community-title" className="relative bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Leadership &amp; Community</Eyebrow>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="community-title"
                className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]"
              >
                Bringing people together to <Scribble kind="underline">learn</Scribble> &amp; build
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                Technology grows when knowledge is shared openly. From co-leading Indore's largest cybersecurity meetup to mentoring students and documenting developer stories.
              </p>
            </div>
            <HandNote rotate={-3} className="text-xl text-accent">
              600+ community members &amp; counting 🤝
            </HandNote>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communityRoles.map((role, i) => (
            <Reveal key={role.name} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-[20px] border border-black/[0.08] bg-mist/60 p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-float">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <UsersIcon className="size-4" />
                    </span>
                    {role.stats && (
                      <span className="rounded-full bg-chip px-2.5 py-1 font-mono text-[11px] font-semibold text-ink/75">
                        {role.stats}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">{role.name}</h3>
                  <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {role.role}
                  </p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{role.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-black/[0.05]">
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[10.5px] text-ink/70 ring-1 ring-black/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {role.link && (
                    <a
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent hover:underline ml-auto"
                    >
                      {role.linkText ?? "View Community"} <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*  Events, Workshops & Seminars Photo Showcase                       */}
        {/* ------------------------------------------------------------------ */}
        <div id="events" className="mt-28 md:mt-36">
          <Reveal className="relative">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow>On Ground &amp; In Action</Eyebrow>
                <h3 className="mt-4 flex flex-wrap items-center gap-3 text-[clamp(1.9rem,4vw,2.75rem)] font-bold tracking-tight text-ink">
                  Events, Workshops &amp; <Scribble kind="circle">Seminars</Scribble>
                  <DoodleStar className="size-7 text-accent" delay={0.6} />
                </h3>
                <p className="mt-3 max-w-2xl text-[16.5px] leading-relaxed text-muted">
                  Memories from hosting <strong>The Hackers Meetup Indore</strong>, conducting hands-on cybersecurity labs, Google Gemini workshops, and speaking at university auditoriums.
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex flex-wrap items-center gap-1.5 rounded-full bg-chip p-1 self-start md:self-auto">
                {CATEGORIES.map((cat) => {
                  const active = filter === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFilter(cat)}
                      className={`relative rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold transition-colors duration-200 ${
                        active ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="event-filter-pill"
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-white shadow-[0_1px_3px_rgb(0_0_0/0.08)]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">
                        {cat}
                        {cat === "All" && ` (${eventPhotos.length})`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Photo Grid */}
          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, i) => (
                <motion.div
                  layout
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 10 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group relative overflow-hidden rounded-[16px] border border-black/[0.08] bg-white p-2.5 shadow-photo transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  {i % 4 === 1 && (
                    <Tape tone="yellow" className="left-6 -top-2.5 z-20 -rotate-3" />
                  )}
                  {i % 4 === 3 && (
                    <Tape tone="purple" className="right-6 -top-2.5 z-20 rotate-4" />
                  )}

                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-neutral-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-500 ease-out-soft group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-ink shadow-xs">
                      {photo.badge}
                    </span>
                  </div>

                  <div className="px-2 pt-3 pb-1">
                    <h4 className="font-semibold text-sm text-ink tracking-tight line-clamp-1 group-hover:text-accent transition-colors">
                      {photo.title}
                    </h4>
                    <p className="mt-1 font-mono text-[11px] text-muted uppercase tracking-wider">
                      {photo.category} · Indore
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
