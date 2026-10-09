"use client";

import { HandNote, Scribble } from "@/components/ui/Doodles";
import { ArrowUpRightIcon, UsersIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { communityRoles } from "@/lib/content";

export function Community() {
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
      </div>
    </section>
  );
}
