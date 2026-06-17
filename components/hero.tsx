"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { MascotIdle } from "@/components/mascot"
import { MascotHover } from "@/components/mascot-hover"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-10 px-5 pb-16 pt-28 md:grid md:grid-cols-2 md:items-center md:gap-8 md:pt-24"
    >
      {/* Left — intro */}
      <div className="relative z-10 w-full">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 font-heading text-[11px] tracking-widest text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          BSCS SOPHOMORE · HABIB UNIVERSITY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m <span className="text-primary">Tayyab.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 font-heading text-lg tracking-tight text-accent sm:text-xl"
        >
          Building logic. Designing experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground"
        >
          I&apos;m a Computer Science sophomore at Habib University. I bridge the gap between heavy
          backend architecture and sleek, creative digital solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9"
        >
          <MascotHover mascotSize={52}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-heading text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </MascotHover>
        </motion.div>
      </div>

      {/* Right — mascot */}
      <div className="relative flex items-center justify-center">
        <MascotIdle size={320} />
      </div>
    </section>
  )
}
