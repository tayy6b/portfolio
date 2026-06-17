"use client"

import { motion } from "motion/react"
import { MascotBunny } from "@/components/mascot"

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#hero" className="flex items-center gap-2.5">
          <MascotBunny size={30} />
          <span className="font-heading text-sm font-bold tracking-tight text-foreground">
            tayyab<span className="text-primary">.</span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-heading text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
