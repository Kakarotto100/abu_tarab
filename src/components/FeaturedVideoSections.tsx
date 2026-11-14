
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import { Panel, Reveal } from "@/components/ui-bits";

// Change these paths to your actual video filenames
const HOUSE_VIDEO = "https://pub-3e201335a4384c1b812cb18a2c40eacf.r2.dev/Abu%20Turab%20House%20Reel.mp4";
const CEO_VIDEO = "https://pub-3e201335a4384c1b812cb18a2c40eacf.r2.dev/sequence2.mp4";

export function FeaturedHouseVideoSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/20 py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-1/2 size-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-primary sm:text-xs">
                <span className="size-1.5 rounded-full bg-primary" />
                Featured project
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Experience the Art of
                <span className="block text-primary">
                  Exceptional Living.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
                Take a closer look at one of our signature residences.
                Discover the architecture, beautiful interiors and
                craftsmanship that make every Abbu Turab project special.
              </p>

              <div className="mt-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,161,42,0.2)]"
                >
                  Explore our projects
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-7">
                <div className="flex items-center gap-3">
                  <Building2 className="size-5 text-primary" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider">
                      Signature architecture
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Designed with detail
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="size-5 text-primary" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider">
                      Lahore, Pakistan
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Premium residences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT - HORIZONTAL HOUSE VIDEO */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[1.8rem] border border-primary/20" />

              <Panel className="relative overflow-hidden rounded-[1.5rem] border border-primary/35 bg-black p-1.5 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                <video
                  src={HOUSE_VIDEO}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full rounded-[1.1rem] bg-black object-contain"
                  aria-label="Featured luxury house walkthrough"
                />
              </Panel>

              <div className="mt-4 flex items-center justify-between px-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Abbu Turab
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Featured residence
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}


export function CEOIntroductionSection() {
  return (
    <section className="border-y border-border bg-card/20 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">

        {/* LEFT - VERTICAL CEO VIDEO */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="absolute -inset-3 rounded-[2rem] border border-primary/20" />

            <Panel className="relative overflow-hidden rounded-[1.7rem] border border-primary/40 bg-black p-2 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
              <video
                src={CEO_VIDEO}
                controls
                playsInline
                preload="metadata"
                className="aspect-[9/16] max-h-[650px] w-full rounded-[1.25rem] bg-black object-contain"
                aria-label="Abbu Turab CEO introduction"
              />
            </Panel>

            <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              A message from our leadership
            </p>
          </div>
        </Reveal>

        {/* RIGHT - CEO INTRODUCTION */}
        <Reveal delay={150}>
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-primary sm:text-xs">
              <span className="size-1.5 rounded-full bg-primary" />
              Meet our leadership
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              A Personal Vision.
              <span className="block text-primary">
                A Lasting Legacy.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Every home represents a family's dreams, aspirations and
              future. At Abbu Turab, we believe building a home is about
              much more than bricks and architecture. It is about trust,
              responsibility and delivering something families can
              proudly call their own.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Watch our CEO share the vision, values and commitment
              behind Abbu Turab and the work we deliver for our clients.
            </p>

            <div className="mt-8 border-t border-border pt-7">
              <p className="text-sm font-bold text-foreground">
                Building dreams since 2014
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Architecture. Construction. Excellence.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
