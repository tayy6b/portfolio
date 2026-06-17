"use client"

import { Reveal } from "@/components/reveal"
import { MascotHover } from "@/components/mascot-hover"
import { Mail, Phone } from "lucide-react"
import { LinkedinIcon } from "@/components/brand-icons"

const contacts = [
  {
    label: "Email",
    value: "tayyabhassan10@gmail.com",
    href: "mailto:tayyabhassan10@gmail.com",
    icon: Mail,
    accent: "var(--toxic)",
  },
  {
    label: "Phone",
    value: "(+92) 335-2260100",
    href: "tel:+923352260100",
    icon: Phone,
    accent: "var(--magenta)",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
    icon: LinkedinIcon,
    accent: "var(--toxic)",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="mb-2 font-heading text-xs tracking-widest text-accent">{"// GET IN TOUCH"}</p>
        <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something great.
        </h2>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Open to collaboration, internships, and interesting problems. Reach out through any of
          these — I&apos;ll get back to you.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.1}>
            <MascotHover mascotSize={46} className="block w-full">
              <a
                href={c.href}
                className="group flex w-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-200"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = c.accent
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ""
                }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border"
                  style={{ background: `color-mix(in oklch, ${c.accent} 12%, transparent)` }}
                >
                  <c.icon className="h-5 w-5" style={{ color: c.accent }} />
                </span>
                <div>
                  <p className="font-heading text-[11px] tracking-widest text-muted-foreground">
                    {c.label.toUpperCase()}
                  </p>
                  <p className="mt-1 break-all font-medium text-foreground">{c.value}</p>
                </div>
              </a>
            </MascotHover>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
