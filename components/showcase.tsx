"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Reveal } from "@/components/reveal"
import { MascotBunny } from "@/components/mascot"
import { ShoppingCart, Flame, Megaphone, HeartHandshake, TrendingUp, Gamepad2, ArrowUpRight } from "lucide-react"

type Item = {
  title: string
  role: string
  desc: string
  icon: typeof TrendingUp
  span: string
  accent: string
}

const experience: Item[] = [
  {
    title: "Sweet Savings",
    role: "E-Commerce Operations Manager",
    desc: "Managed global fulfillment pipelines, handled worldwide customer support, and optimized profit margins.",
    icon: ShoppingCart,
    span: "md:col-span-2",
    accent: "var(--toxic)",
  },
  {
    title: "Nexus Fire Solutions",
    role: "Operations Intern",
    desc: "Designed wireframes for the company website to improve user experience.",
    icon: Flame,
    span: "md:col-span-1",
    accent: "var(--magenta)",
  },
  {
    title: "Ingenuity Productions",
    role: "Sales & Marketing Intern",
    desc: "Handled international clients and produced social media design.",
    icon: Megaphone,
    span: "md:col-span-1",
    accent: "var(--magenta)",
  },
  {
    title: "Cedar Care",
    role: "Society Head",
    desc: "Led a 200+ member community service society, organizing major fund drives.",
    icon: HeartHandshake,
    span: "md:col-span-2",
    accent: "var(--toxic)",
  },
]

const projects: Item[] = [
  {
    title: "Limit Order Book Simulation",
    role: "Python · Skip Lists",
    desc: "High-frequency trade matching engine built with Python and Skip Lists for fast order insertion and matching.",
    icon: TrendingUp,
    span: "md:col-span-1",
    accent: "var(--toxic)",
  },
  {
    title: "Python Snake Game",
    role: "Python · From Scratch",
    desc: "Classic arcade mechanics built entirely from scratch.",
    icon: Gamepad2,
    span: "md:col-span-1",
    accent: "var(--magenta)",
  },
]

function BentoCard({ item, isProject }: { item: Item; isProject?: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group relative flex h-full min-h-[190px] flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors duration-200"
      style={hovered ? { borderColor: item.accent } : undefined}
    >
      {/* Bunny jumps onto the card */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none absolute right-5 top-0 z-20 -translate-y-1/2"
            style={{ originY: 1 }}
            initial={{ opacity: 0, y: 12, scaleY: 0.7, scaleX: 1.25 }}
            animate={{
              opacity: 1,
              y: [12, -8, 0],
              scaleY: [0.7, 1.3, 0.78, 1],
              scaleX: [1.25, 0.82, 1.18, 1],
            }}
            exit={{ opacity: 0, y: 10, scaleY: 0.7, transition: { duration: 0.18 } }}
            transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.45, 0.75, 1] }}
          >
            <MascotBunny size={46} />
          </motion.div>
        )}
      </AnimatePresence>

      <span
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border"
        style={{ background: `color-mix(in oklch, ${item.accent} 12%, transparent)` }}
      >
        <item.icon className="h-5 w-5" style={{ color: item.accent }} />
      </span>

      <div className="mt-5">
        <p className="font-heading text-[11px] tracking-wide" style={{ color: item.accent }}>
          {item.role}
        </p>
        <h3 className="mt-1 flex items-center gap-1.5 font-heading text-lg font-bold text-foreground">
          {item.title}
          {isProject && (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
      </div>
    </motion.article>
  )
}

export function Showcase() {
  return (
    <>
      {/* Experience */}
      <section id="experience" className="relative mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="mb-2 font-heading text-xs tracking-widest text-accent">{"// EXPERIENCE & LEADERSHIP"}</p>
          <h2 className="mb-10 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where I&apos;ve made an impact.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {experience.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className={item.span}>
              <BentoCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 pt-0">
        <Reveal>
          <p className="mb-2 font-heading text-xs tracking-widest text-accent">{"// PROJECTS"}</p>
          <h2 className="mb-10 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Things I&apos;ve built.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <BentoCard item={item} isProject />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
