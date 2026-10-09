"use client";

import { useState } from "react";
import { HandNote, Scribble } from "@/components/ui/Doodles";
import { ArrowUpRightIcon, BookOpenIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { articles, profile } from "@/lib/content";
import { cx } from "@/lib/styles";

const CATEGORIES = ["All", "Cybersecurity", "AI Security", "Product Strategy", "Tech Careers"] as const;

export function Writing() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = selectedCategory === "All"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <section id="writing" aria-labelledby="writing-title" className="relative bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Writing &amp; Thought Leadership</Eyebrow>
              <h2
                id="writing-title"
                className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]"
              >
                Dispatches on <Scribble kind="underline">security</Scribble>, product &amp; tech
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                Essays, threat breakdowns, and candid reflections published on Medium about AI security, product simplicity, and the realities of working in technology.
              </p>
            </div>
            <a
              href={profile.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-accent hover:underline"
            >
              medium.com/@dhwanill <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
        </Reveal>

        {/* Filter categories */}
        <Reveal delay={0.06} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cx(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200",
                  selectedCategory === cat
                    ? "bg-ink text-white shadow-sm"
                    : "bg-chip text-muted hover:bg-black/10 hover:text-ink",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Article Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col justify-between rounded-[20px] border border-black/[0.08] bg-white p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-float">
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-muted">
                    <span className="rounded-full bg-chip px-2.5 py-0.5 font-semibold text-ink/75">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </h3>

                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.05] pt-4 font-mono text-xs">
                  <span className="text-muted">{article.date}</span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-ink hover:text-accent"
                  >
                    Read on Medium <ArrowUpRightIcon className="size-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
