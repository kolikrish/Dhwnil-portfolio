import Image from "next/image";
import type { ReactNode } from "react";
import { LockIcon } from "@/components/ui/icons";
import type { Project, TerminalLine } from "@/lib/content";
import { cx } from "@/lib/styles";

const LINE_TONE: Record<TerminalLine["kind"], string> = {
  cmd: "text-white",
  out: "text-white/75",
  dim: "text-white/45",
  accent: "text-[#9be39b]",
};

function TrafficLights({ muted = false }: { muted?: boolean }) {
  const dot = "size-2 rounded-full sm:size-2.5";
  return (
    <span className="flex shrink-0 gap-1.5">
      <span className={cx(dot, muted ? "bg-white/20" : "bg-[#ff5f57]")} />
      <span className={cx(dot, muted ? "bg-white/20" : "bg-[#febc2e]")} />
      <span className={cx(dot, muted ? "bg-white/20" : "bg-[#28c840]")} />
    </span>
  );
}

export function BrowserFrame({ url, compact = false, children }: { url: string; compact?: boolean; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[12px] bg-white shadow-lift ring-1 ring-black/[0.08]">
      <div className={cx("flex items-center gap-2 border-b border-black/[0.06] bg-[#f5f5f5]", compact ? "px-2.5 py-1.5" : "px-3 py-2")}>
        <TrafficLights />
        {!compact && (
          <>
            <span className="mx-auto flex min-w-0 max-w-[64%] items-center gap-1 rounded-full bg-white px-3 py-0.5 font-mono text-[9px] text-muted ring-1 ring-black/[0.05] sm:text-[10.5px]">
              <LockIcon className="size-2.5 shrink-0" />
              <span className="truncate">{url}</span>
            </span>
            <span className="w-[38px] shrink-0" />
          </>
        )}
      </div>
      {children}
    </div>
  );
}

export function TerminalFrame({ title, lines }: { title: string; lines: TerminalLine[] }) {
  return (
    <div className="overflow-hidden rounded-[12px] bg-[#0d0d0d] shadow-lift ring-1 ring-white/10">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2">
        <TrafficLights muted />
        <span className="ml-1 truncate font-mono text-[9px] text-white/45 sm:text-[10px]">{title}</span>
      </div>
      <pre className="overflow-hidden px-3 py-2.5 font-mono text-[8.5px] leading-[1.65] sm:text-[10.5px]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className={cx("block overflow-hidden text-ellipsis whitespace-pre", LINE_TONE[line.kind])}>
              {line.kind === "cmd" && <span className="text-accent">$ </span>}
              {line.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

function ProjectDisplayScreen({ project }: { project: Project }) {
  const { slug } = project;

  if (slug === "phishnet-sentinel") {
    return (
      <div className="flex aspect-[16/10] flex-col justify-between bg-[#0b0f19] p-4 text-white sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">Sentinel Threat Engine</span>
          </div>
          <span className="rounded-full bg-red-500/20 px-2 py-0.5 font-mono text-[9px] font-semibold text-red-400">
            HIGH THREAT 94.2%
          </span>
        </div>
        <div className="my-2 space-y-2">
          <div className="rounded-[6px] bg-white/[0.04] p-2.5 font-mono text-[10px] text-white/80">
            <span className="text-white/40">Target: </span>
            <span className="text-red-300">https://paypaI-verify.account-auth.cc/login</span>
          </div>
          <div className="grid grid-cols-2 gap-2 font-mono text-[9px]">
            <div className="rounded bg-white/[0.03] p-2 text-white/60">
              <span className="block text-white/35">HEURISTIC</span>
              <span className="text-amber-300">Homoglyph 'I' used</span>
            </div>
            <div className="rounded bg-white/[0.03] p-2 text-white/60">
              <span className="block text-white/35">DOMAIN AGE</span>
              <span className="text-red-300">Registered 4h ago</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[9px] text-white/40">
          <span>Classifier: TensorFlow / Python</span>
          <span className="text-emerald-400">Quarantine Active</span>
        </div>
      </div>
    );
  }

  if (slug === "ship-it") {
    return (
      <div className="relative flex aspect-[16/10] flex-col justify-between bg-[#131722] p-4 text-white sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">Walkover: Ship It! [2D]</span>
          <span className="font-mono text-[9px] text-emerald-400">60 FPS · Canvas</span>
        </div>
        <div className="relative my-auto flex h-24 items-end justify-between border-b border-dashed border-white/20 pb-1">
          {/* 2D level platforms representation */}
          <div className="h-10 w-12 rounded bg-amber-500/80 flex items-center justify-center font-mono text-[8px] text-black font-bold">
            BOX #1
          </div>
          <div className="h-16 w-8 rounded bg-cyan-500/60" />
          <div className="relative mb-2 flex flex-col items-center">
            <span className="text-lg">🏃</span>
            <span className="font-mono text-[8px] text-accent">DASH 280px/s</span>
          </div>
          <div className="h-6 w-16 rounded bg-emerald-500/80" />
          <div className="h-12 w-10 rounded bg-indigo-500/80 flex items-center justify-center font-mono text-[8px]">
            GOAL
          </div>
        </div>
        <div className="flex items-center justify-between font-mono text-[9px] text-white/50">
          <span>Phaser 3 Arcade Physics</span>
          <span>Delivery Timer: 00:48s</span>
        </div>
      </div>
    );
  }

  if (slug === "dead-county") {
    return (
      <div className="flex aspect-[16/10] flex-col justify-between bg-[#080a0f] p-4 text-white sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-sky-400">Godot 4.4.1 · Dead County</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[8.5px] text-white/70">Vulkan Forward+</span>
        </div>
        <div className="my-auto rounded-lg bg-black/60 p-3 ring-1 ring-white/10">
          <div className="flex items-center justify-between font-mono text-[9px] text-white/40">
            <span>SCENE: Abandoned_District_Night</span>
            <span className="text-amber-400/80">3D Volumetric Fog</span>
          </div>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-white/70">
            Environmental storytelling layer: spatial audio zones, dynamic shadows, and narrative exploration.
          </p>
        </div>
        <div className="flex items-center justify-between font-mono text-[9px] text-white/40">
          <span>Engine: Godot 4 / GDScript</span>
          <span>Camera: Free Orbit Rig</span>
        </div>
      </div>
    );
  }

  // work-logging-agent
  return (
    <div className="flex aspect-[16/10] flex-col justify-between bg-[#0e131f] p-4 text-white sm:p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">50Agents Workflow</span>
        </div>
        <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-mono text-[9px] text-indigo-300">
          viaSocket Webhook
        </span>
      </div>
      <div className="my-auto space-y-2 font-mono text-[9px]">
        <div className="rounded bg-white/[0.04] p-2">
          <span className="text-white/40">&gt; Prompt: </span>
          <span className="text-white/90">"Finished SaaS OAuth refactor and tested viaSocket sync."</span>
        </div>
        <div className="rounded bg-emerald-500/10 border border-emerald-500/20 p-2 text-emerald-300">
          <span>✓ Extracted: </span>
          <span className="text-white/90">[Feature] OAuth Refactor completed · Status: Synced</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[9px] text-white/40">
        <span>Platform: 50Agents Automation</span>
        <span className="text-emerald-400">Status: Dispatched</span>
      </div>
    </div>
  );
}

function FloatingBadgeCard({ slug }: { slug: string }) {
  if (slug === "phishnet-sentinel") {
    return (
      <div className="overflow-hidden rounded-[12px] bg-white p-3 shadow-lift ring-1 ring-black/[0.08] sm:p-4">
        <div className="flex items-center gap-2">
          <span className="text-base">🛡️</span>
          <span className="font-mono text-[11px] font-bold text-ink">Threat Classifier</span>
        </div>
        <div className="mt-2 space-y-1 font-mono text-[9px] text-muted">
          <p>• Homoglyph parser</p>
          <p>• WHOIS entropy score</p>
          <p>• TensorFlow weights</p>
        </div>
      </div>
    );
  }

  if (slug === "ship-it") {
    return (
      <div className="overflow-hidden rounded-[12px] bg-white p-3 shadow-lift ring-1 ring-black/[0.08] sm:p-4">
        <div className="flex items-center gap-2">
          <span className="text-base">🎮</span>
          <span className="font-mono text-[11px] font-bold text-ink">Phaser 3 Canvas</span>
        </div>
        <div className="mt-2 space-y-1 font-mono text-[9px] text-muted">
          <p>• 60 FPS physics tick</p>
          <p>• Velocity buffers</p>
          <p>• Jump buffering</p>
        </div>
      </div>
    );
  }

  if (slug === "dead-county") {
    return (
      <div className="overflow-hidden rounded-[12px] bg-white p-3 shadow-lift ring-1 ring-black/[0.08] sm:p-4">
        <div className="flex items-center gap-2">
          <span className="text-base">🎬</span>
          <span className="font-mono text-[11px] font-bold text-ink">Godot 4.4 Engine</span>
        </div>
        <div className="mt-2 space-y-1 font-mono text-[9px] text-muted">
          <p>• Vulkan Forward+</p>
          <p>• Volumetric shaders</p>
          <p>• Spatial audio bus</p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[12px] bg-white p-3 shadow-lift ring-1 ring-black/[0.08] sm:p-4">
      <div className="flex items-center gap-2">
        <span className="text-base">⚡</span>
        <span className="font-mono text-[11px] font-bold text-ink">viaSocket Flow</span>
      </div>
      <div className="mt-2 space-y-1 font-mono text-[9px] text-muted">
        <p>• 50Agents platform</p>
        <p>• Auto log synthesis</p>
        <p>• JSON schema sync</p>
      </div>
    </div>
  );
}

/**
 * 2–3 overlapping, fanned frames per project: a browser window with the real
 * screenshot, a zoomed "detail" window peeking from behind, and a terminal with
 * real artifacts from the repo. Frames idle-float and fan out further on hover.
 */
export function MockupCluster({ project }: { project: Project }) {
  const { cover } = project;

  return (
    <div className="group relative mx-auto aspect-[4/3] w-full max-w-[560px] select-none">
      {/* Back frame, top-right */}
      <div aria-hidden="true" className="absolute right-0 top-0 w-[44%] animate-float [animation-delay:-2s]">
        <div className="rotate-[6deg] transition-[rotate,translate] duration-500 ease-out-soft group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-[9deg]">
          {cover ? (
            <BrowserFrame url={project.domain} compact>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <Image
                  src={cover.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 250px, 44vw"
                  className="object-cover"
                  style={{ objectPosition: cover.crop, transform: "scale(1.7)", transformOrigin: cover.crop }}
                />
              </div>
            </BrowserFrame>
          ) : (
            <FloatingBadgeCard slug={project.slug} />
          )}
        </div>
      </div>

      {/* Main frame */}
      <div className="absolute left-[3%] top-[12%] z-10 w-[86%] animate-float">
        <div className="-rotate-2 transition-[rotate,translate] duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:-rotate-3">
          <BrowserFrame url={project.domain}>
            {cover ? (
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                sizes="(min-width: 768px) 480px, 86vw"
                className="block h-auto w-full"
              />
            ) : (
              <ProjectDisplayScreen project={project} />
            )}
          </BrowserFrame>
        </div>
      </div>

      {/* Terminal frame, bottom-left */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 z-20 w-[58%] animate-float [animation-delay:-4s]">
        <div className="-rotate-[4deg] transition-[rotate,translate] duration-500 ease-out-soft group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:-rotate-[7deg]">
          <TerminalFrame title={project.terminal.title} lines={project.terminal.lines} />
        </div>
      </div>
    </div>
  );
}
