import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const activeSlide = heroSlides[index];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 7500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] pb-16 pt-28 lg:justify-start lg:pb-24 lg:pt-32">
      {/* Cinematic Background Images */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((s, i) => (
          <img
            key={s.image}
            src={s.image}
            alt=""
            aria-hidden
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
            className={`absolute inset-0 size-full object-cover transition-all duration-[2000ms] ease-out ${
              i === index ? "scale-110 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        ))}
        {/* Premium Gradient Overlays (Dark on left for text, fades to right) */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          
          {/* Animated Content Wrapper */}
          <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-primary backdrop-blur-md sm:text-xs">
                <Sparkles className="size-3.5" />
                Welcome to Abbu Turab
              </span>
              <span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md sm:inline-flex sm:text-xs">
                <ShieldCheck className="size-3.5 text-primary" />
                Govt. Registered
              </span>
            </div>

            {/* Title with Shine Effect */}
            <h1 className="hero-rise mt-8 text-4xl font-extrabold capitalize leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {activeSlide.title}
            </h1>

            {/* Highlight / Subtitle */}
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
              {activeSlide.highlight}
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                View Projects <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10 hover:text-primary active:scale-95"
              >
                Request Consultation
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Premium Slide Indicators (Bottom Left/Right depending on screen) */}
      <div className="absolute bottom-8 left-0 z-20 w-full px-6 lg:bottom-12 lg:left-12 lg:w-auto lg:px-0">
        <div className="flex items-center gap-4">
          {heroSlides.map((s, i) => (
            <button
              key={s.image}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`group relative h-1.5 overflow-hidden rounded-full bg-white/20 transition-all duration-500 hover:bg-white/40 ${
                i === index ? "w-16" : "w-6"
              }`}
            >
              {i === index && (
                <span className="absolute inset-y-0 left-0 w-full animate-[progress_7.5s_linear_forwards] bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}