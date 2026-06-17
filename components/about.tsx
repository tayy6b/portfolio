"use client"

import type React from "react"
import { motion } from "motion/react"
import { Reveal } from "@/components/reveal"
import { Code2, Palette, Megaphone, Clapperboard } from "lucide-react"

const tools = [
  { name: "Python", desc: "Algorithms, data structures & backend logic.", icon: Code2, span: "sm:col-span-2 sm:row-span-2", accent: "var(--toxic)" },
  { name: "Graphic Design", desc: "Brand visuals & social media assets.", icon: Palette, span: "", accent: "var(--magenta)" },
  { name: "Marketing", desc: "Client outreach & growth strategy.", icon: Megaphone, span: "", accent: "var(--magenta)" },
  { name: "Video Editing", desc: "Short-form edits with CapCut & more.", icon: Clapperboard, span: "sm:col-span-2", accent: "var(--toxic)" },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="mb-2 font-heading text-xs tracking-widest text-accent">{"// MY TOOLKIT"}</p>
        <h2 className="mb-10 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills I work with.
        </h2>
      </Reveal>

      <div className="grid auto-rows-[150px] grid-cols-1 gap-4 sm:grid-cols-3">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08 }}
            className={`group relative flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors duration-200 ${tool.span}`}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = tool.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = ""
            }}
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-colors"
              style={{ background: `color-mix(in oklch, ${tool.accent} 12%, transparent)` }}
            >
              <tool.icon className="h-5 w-5" style={{ color: tool.accent }} />
            </span>
            <div>
              <h3 className="font-heading text-base font-bold text-foreground">{tool.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tool.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
