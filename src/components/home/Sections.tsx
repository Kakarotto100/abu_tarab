import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CircleCheck, Landmark, MapPin, Quote, ShieldCheck } from "lucide-react";
import { AutoScroller } from "@/components/AutoScroller";
import { Counter, Panel, Reveal, SectionHeading } from "@/components/ui-bits";
import {
  disciplines,
  leader,
  leaderPoints,
  projects,
  registrations,
  services,
  stats,
  team,
  testimonials,
  updates,
} from "@/lib/site-data";

export function ProjectsSection() {
  const sneakPeek = projects.slice(0, 3);

  return (
    <section id="projects" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Current projects"
            title="Latest residential and renovation work"
            intro="A quick look at our active projects in DHA, Bahria Town and Lake City. See the full portfolio on the Projects page."
            align="left"
          />
          <Link
            to="/projects"
            className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
          >
            View all projects <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {sneakPeek.map((project) => (
            <Panel key={project.title} className="overflow-hidden bg-card/50">
              <img
                src={project.image}
                alt={`${project.title}, ${project.location}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="p-5">
                <p className="text-sm font-semibold text-foreground">{project.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary">{project.location}</p>
                {project.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                ) : null}
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#0a0a0a] py-16 lg:py-24">
      {/* Subtle top divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3 lg:gap-6">
          {stats.map((s, i) => (
            <Panel
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.1)] lg:p-10"
            >
              {/* Soft inner gradient glow (appears on hover) */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
                <p className="font-display text-4xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary lg:text-5xl">
                  <Counter value={s.value} />
                </p>
                
                {/* Divider Line */}
                <div className="my-4 h-px w-12 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-primary/50" />
                
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                  {s.label}
                </p>
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Architecture & Construction · Finishing — each box opens its own photo page. */
export function DisciplinesSection() {
  return (
    <section id="disciplines" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What we build"
          title="Architecture & Construction · Finishing"
          intro="Four disciplines, one accountable team. Open a card to see real work from our sites."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.slug} className="reveal-step h-full" delay={i * 130}>
              <Panel className="group h-full overflow-hidden bg-card/50">
                <Link to="/work/$slug" params={{ slug: d.slug }} className="flex h-full flex-col">
                  <div className="relative overflow-hidden rounded-t-[1.2rem]">
                    <img
                      src={d.cover}
                      alt={d.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-lg">{d.title}</h3>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary">{d.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                    <ul className="mt-4 space-y-2">
                      {d.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-foreground">
                          <CircleCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="min-w-0">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="btn-shake mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      View photos <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


export function RegisteredSection() {
  // Load only actual files present in /public/images/logos via Vite glob.
  const logosMap = import.meta.glob("/public/images/logos/*.{webp,png,jpg,jpeg}", {
    eager: true,
    import: "default",
  });

  const logos = Object.keys(logosMap).map((p) => {
    const filename = p.split("/").pop() ?? "";
    const nameRaw = filename.replace(/\.(webp|png|jpg|jpeg)$/i, "");
    const name = nameRaw.replace(/[-_]+/g, " ").replace(/\bAND\b/gi, "&").trim().toUpperCase();
    const src = `/images/logos/${filename}`;
    return { name, src };
  });

  const loop = [...logos, ...logos];

  const privateSocietiesMap = import.meta.glob("/public/images/Private Registered Center/*.{webp,png,jpg,jpeg}", {
    eager: true,
    import: "default",
  });

  const privateSocieties = Object.keys(privateSocietiesMap).map((p) => {
    const filename = p.split("/").pop() ?? "";
    const nameRaw = filename.replace(/\.(webp|png|jpg|jpeg)$/i, "");
    const name = nameRaw.replace(/[-_]+/g, " ").replace(/\bAND\b/gi, "&").trim().toUpperCase();
    const src = `/images/Private Registered Center/${filename}`;
    return { name, src };
  });

  const privateLoop = [...privateSocieties, ...privateSocieties];

  return (
    <div className="bg-[#0a0a0a]">
      {/* ================= GOVERNMENT REGISTERED ================= */}
      <section className="relative overflow-hidden border-y border-white/[0.05] py-24 lg:py-32">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.05] via-transparent to-transparent" />
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.15]" />
        
        {/* Glowing Top Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal>
            {/* Glowing Badge */}
            <div className="group mx-auto flex w-fit cursor-default items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 backdrop-blur-md transition-all duration-500 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
              <Landmark className="size-4 text-primary transition-transform duration-500 group-hover:scale-110" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary sm:text-xs">
                Government Registered
              </span>
            </div>
            
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
              Registered &amp; approved with <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/50 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                all major departments
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground/80">
              A licensed, government-registered construction firm — approved to design, build and renovate inside DHA,
              Bahria Town, Lake City and every other private housing society.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mt-16 lg:mt-20">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-40" />
            
            <AutoScroller speed={0.05} innerClassName="gap-6 px-5 lg:px-8 py-8">
              {loop.map((r, i) => (
                <figure
                  key={`${r.name}-${i}`}
                  className="group relative flex w-[180px] shrink-0 flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.4)] sm:w-[220px] sm:p-8"
                >
                  {/* Card Inner Glow */}
                  <div className="absolute inset-0 z-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Premium Overlapping Logo Pill */}
                  <div className="relative z-10 -mt-14 flex w-full items-center justify-center sm:-mt-16">
                    <div className="flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_10px_40px_-5px_rgba(var(--primary),0.6)]">
                      <img
                        src={r.src}
                        alt={`${r.name} logo`}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-auto max-w-[80%] object-contain p-3 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <figcaption className="relative z-10 mt-2 text-center">
                    <p className="text-[11px] font-black uppercase leading-tight tracking-[0.2em] text-white/90 transition-colors duration-300 group-hover:text-primary sm:text-xs">
                      {r.name}
                    </p>
                    <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                      Verified Partner
                    </p>
                  </figcaption>
                  
                  {/* Bottom glowing line */}
                  <span className="absolute inset-x-6 bottom-0 h-[2px] scale-x-0 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(var(--primary),0.8)] transition-transform duration-500 group-hover:scale-x-100" />
                </figure>
              ))}
            </AutoScroller>
          </div>
        </Reveal>
      </section>

      {/* ================= PRIVATE SOCIETIES ================= */}
      <section className="relative overflow-hidden border-y border-white/[0.05] py-24 lg:py-32">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/[0.05] via-transparent to-transparent" />
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.15]" />
        
        {/* Glowing Top Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <Reveal>
            {/* Glowing Badge */}
            <div className="group mx-auto flex w-fit cursor-default items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 backdrop-blur-md transition-all duration-500 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
              <ShieldCheck className="size-4 text-primary transition-transform duration-500 group-hover:scale-110" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary sm:text-xs">
                Approved Private Societies
              </span>
            </div>
            
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
              Approved &amp; registered in <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary via-primary to-primary/50 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                major housing societies
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground/80">
              Approved to design, build, and execute projects across top housing societies including Bahria Town, DHA,
              Lake City, Citi Housing, and more.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mt-16 lg:mt-20">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-40" />
            
            <AutoScroller speed={0.05} innerClassName="gap-6 px-5 lg:px-8 py-8">
              {privateLoop.map((r, i) => (
                <figure
                  key={`${r.name}-${i}`}
                  className="group relative flex w-[180px] shrink-0 flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.4)] sm:w-[220px] sm:p-8"
                >
                  {/* Card Inner Glow */}
                  <div className="absolute inset-0 z-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Premium Overlapping Logo Pill */}
                  <div className="relative z-10 -mt-14 flex w-full items-center justify-center sm:-mt-16">
                    <div className="flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_10px_40px_-5px_rgba(var(--primary),0.6)]">
                      <img
                        src={r.src}
                        alt={`${r.name} logo`}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-auto max-w-[80%] object-contain p-3 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <figcaption className="relative z-10 mt-2 text-center">
                    <p className="text-[11px] font-black uppercase leading-tight tracking-[0.2em] text-white/90 transition-colors duration-300 group-hover:text-primary sm:text-xs">
                      {r.name}
                    </p>
                    <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                      Verified Partner
                    </p>
                  </figcaption>
                  
                  {/* Bottom glowing line */}
                  <span className="absolute inset-x-6 bottom-0 h-[2px] scale-x-0 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(var(--primary),0.8)] transition-transform duration-500 group-hover:scale-x-100" />
                </figure>
              ))}
            </AutoScroller>
          </div>
        </Reveal>
      </section>
    </div>
  );
}


export function LeadershipSection() {
  return (
    <section id="leadership" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Leadership" title="The mind behind Abbu Turab" align="center" />
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.2fr] lg:items-center">
          <Reveal>
            <Panel className="mx-auto w-full max-w-sm overflow-hidden bg-card/50 text-center">
              <img
                src={leader.image}
                alt={leader.name}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-t-[1.2rem] object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg capitalize">{leader.name}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
                  {leader.role} · Since {leader.since}
                </p>
              </div>
            </Panel>
          </Reveal>
          <Reveal delay={140}>
            <Quote className="size-8 text-primary" />
            <p className="mt-4 text-base leading-relaxed text-foreground sm:text-xl">“{leader.quote}”</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Abbu Turab Design Studio & Construction Developers is led end-to-end by one accountable team —
              architecture, interior, structural planning, renovation and site execution under a single roof.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {leaderPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                  <CircleCheck className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              About us <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our team" title="People who build your dream" />
          <Reveal>
            <Link
              to="/about"
              className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
            >
              Meet the team <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 justify-items-center gap-4 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} className="reveal-step w-full" delay={i * 120}>
              <Panel className="group w-full overflow-hidden bg-card/50">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-t-[1.2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="truncate text-sm sm:text-lg">{m.name}</h3>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-primary sm:text-[10px]">{m.role}</p>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Our services" title="What we do best" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} className="reveal-step" delay={i * 170}>
              <Panel className="group h-full overflow-hidden bg-card/50">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full rounded-t-[1.2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6 sm:p-7">
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <Link
                    to="/services"
                    hash={s.slug}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-transform hover:translate-x-1"
                  >
                    Learn more <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Reveal>
            <Link
              to="/services"
              className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-primary hover:text-primary"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function UpdatesSection() {
  const loop = [...updates, ...updates];
  return (
    <section className="border-t border-border py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Site updates"
          title="Live from our projects"
          intro="A snapshot of live A.T Developers builds — swipe through project milestones straight from site."
          align="center"
        />
      </div>
      <AutoScroller className="mt-12 py-4" innerClassName="gap-6 px-5" speed={0.15}>
        {loop.map((u, i) => (
          <Panel key={`${u.image}-${i}`} className="group flex w-[19rem] shrink-0 flex-col overflow-hidden bg-card/50 sm:w-[26rem]">
            <img
              src={u.image}
              alt={u.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="aspect-[4/3] w-full rounded-t-[1.2rem] object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="w-fit rounded-full border border-primary/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
                {u.tag}
              </span>
              <h3 className="mt-3 font-display text-base leading-snug sm:text-lg">{u.title}</h3>
              <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-primary sm:text-xs">
                <MapPin className="size-3.5 shrink-0" />
                {u.location}
              </p>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
            </div>
          </Panel>
        ))}
      </AutoScroller>
    </section>
  );
}

export function TestimonialsSection() {
  const loop = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="border-t border-border bg-gradient-to-b from-background to-card/20 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
      </div>
      <AutoScroller className="mt-12 py-4" innerClassName="gap-5 px-5" speed={0.15}>
        {loop.map((t, i) => (
          <Panel
            key={`${t.name}-${i}`}
            className="relative flex min-h-[16rem] w-[19rem] shrink-0 flex-col overflow-hidden bg-card/60 p-6 text-left shadow-lg backdrop-blur-sm sm:w-[22rem] sm:p-8"
          >
            <Quote className="pointer-events-none absolute right-4 top-4 size-20 rotate-180 text-primary/5" />
            <div className="flex-1">
              <Quote className="size-7 text-primary" />
              <p className="mt-5 text-sm leading-relaxed text-foreground/90 sm:text-base">“{t.quote}”</p>
            </div>
            <div className="mt-7 flex items-center gap-4 border-t border-border/50 pt-5">
              <div className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-lg font-bold text-primary ring-2 ring-primary/20">
                {t.name[0]}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">{t.name}</p>
                <p className="truncate text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </Panel>
        ))}
      </AutoScroller>
    </section>
  );
}


import {  CheckCircle2, ClipboardList, DraftingCompass, HardHat, Key, Shield, Clock, Award, Users } from "lucide-react";



/* =========================================
   1. WHY CHOOSE US / THE PROCESS SECTION
   ========================================= */
export function WhyChooseUsSection() {
  const features = [
    { icon: Shield, title: "Government Registered", desc: "Fully licensed and approved by all major departments including LDA, DHA, and Bahria Town." },
    { icon: Clock, title: "On-Time Delivery", desc: "We respect your time. Our strict project management ensures your build is completed on schedule." },
    { icon: Award, title: "Premium Materials", desc: "Only the highest-grade materials and finishes are used, guaranteeing lasting value and beauty." },
    { icon: Users, title: "Expert Team", desc: "In-house architects, structural engineers, and interior designers working in perfect sync." },
  ];

  const processSteps = [
    { icon: ClipboardList, step: "01", title: "Consultation", desc: "Understanding your vision and budget." },
    { icon: DraftingCompass, step: "02", title: "3D Design", desc: "Visualizing your space before we build." },
    { icon: HardHat, step: "03", title: "Construction", desc: "Flawless execution with premium materials." },
    { icon: Key, step: "04", title: "Handover", desc: "Delivering your dream home, ready to move in." },
  ];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.05] bg-[#050505] py-20 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-4xl -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Building trust, one home at a time"
          intro="We don't just build structures; we craft legacies. With over a decade of experience, we bring unmatched precision and luxury to every project."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <Panel className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/[0.04]">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                  <f.icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">{f.desc}</p>
              </Panel>
            </Reveal>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-24">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">How We Bring Your Vision to Life</h3>
            <p className="mt-3 text-muted-foreground/80">A seamless, transparent 4-step process from start to finish.</p>
          </div>
          
          <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting Line (Desktop) */}
            <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />
            
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 150}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex size-16 items-center justify-center rounded-full border border-primary/30 bg-[#0a0a0a] text-primary shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
                    <p.icon className="size-7" />
                    <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-black ring-4 ring-[#0a0a0a]">
                      {p.step}
                    </span>
                  </div>
                  <h4 className="mt-6 text-lg font-bold text-white">{p.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground/80">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   2. CALL TO ACTION (CTA) SECTION
   ========================================= */
export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.05] bg-[#0a0a0a] py-24 lg:py-32">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/[0.1] via-transparent to-transparent" />
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.15]" />
      
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <Reveal>
          <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4 mb-6">
            <DraftingCompass className="size-8 text-primary" />
          </div>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to build your <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-primary to-primary/50 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              dream home?
            </span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground/90">
            Whether you have a plot ready or just an idea in mind, our expert architects and engineers are here to guide you. Let's turn your vision into reality.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Book a Free Consultation <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/projects"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10 hover:text-primary sm:w-auto"
            >
              View Our Portfolio
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              <span>No Hidden Fees</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}