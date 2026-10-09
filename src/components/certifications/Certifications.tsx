"use client";

import { Scribble } from "@/components/ui/Doodles";
import { ShieldCheckIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { certifications, skillCategories } from "@/lib/content";

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title" className="relative bg-mist/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Skills &amp; Credentials</Eyebrow>
          <h2
            id="certifications-title"
            className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Verified learning &amp; <Scribble kind="circle">domains</Scribble>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Structured skill categories and validated learning programs across cybersecurity, cloud fundamentals, and practical AI.
          </p>
        </Reveal>

        {/* Skill Domains Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.06}>
              <div className="rounded-[20px] border border-black/[0.08] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{cat.category}</h3>
                <p className="mt-1 text-sm text-muted">{cat.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-chip px-3 py-1 font-mono text-xs text-ink/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications Row */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-bold tracking-tight text-ink">
            Credentials &amp; Security Certifications
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-start gap-3 rounded-[16px] border border-black/[0.06] bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <ShieldCheckIcon className="size-4" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-ink leading-snug">{cert.title}</h4>
                  <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-muted">
                    <span>{cert.issuer}</span>
                    <span>·</span>
                    <span className="text-emerald-700 font-medium">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
