"use client"

import type React from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { MascotBunny } from "@/components/mascot"
import { cn } from "@/lib/utils"

/**
 * Wraps an interactive element. On hover, the hamster leaps up from below
 * with a physically believable arc: it stretches in flight, then squashes
 * when its paws hit the element. A soft contact shadow scales with the jump.
 */
export function MascotHover({
  children,
  className,
  mascotSize = 48,
}: {
  children: React.ReactNode
  className?: string
  mascotSize?: number
}) {
  const [hovered, setHovered] = useState(false)
  // Pose flips to "land" partway through the arc so the limbs settle on contact.
  const [landed, setLanded] = useState(false)

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => {
        setHovered(true)
        setLanded(false)
        // Switch to landing pose right as the hamster reaches the top.
        window.setTimeout(() => setLanded(true), 360)
      }}
      onMouseLeave={() => {
        setHovered(false)
        setLanded(false)
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="pointer-events-none absolute left-1/2 z-30 flex -translate-x-1/2 flex-col items-center"
            style={{ bottom: "calc(100% - 6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {/* Hamster: arcs up with stretch, then squashes on contact */}
            <motion.div
              style={{ originY: 1 }}
              initial={{ y: 34, scaleY: 0.72, scaleX: 1.22 }}
              animate={{
                y: [34, -16, 0],
                scaleY: [0.72, 1.28, 0.82, 1],
                scaleX: [1.22, 0.8, 1.16, 1],
              }}
              exit={{ y: 26, scaleY: 0.7, scaleX: 1.2, transition: { duration: 0.18 } }}
              transition={{ duration: 0.52, ease: [0.34, 1.56, 0.64, 1], times: [0, 0.5, 1] }}
            >
              <MascotBunny size={mascotSize} pose={landed ? "land" : "jump"} />
            </motion.div>

            {/* Contact shadow grows as the hamster nears the surface */}
            <motion.div
              className="rounded-full bg-background/60 blur-[2px]"
              style={{ height: 4 }}
              initial={{ width: mascotSize * 0.3, opacity: 0.2 }}
              animate={{
                width: [mascotSize * 0.3, mascotSize * 0.7, mascotSize * 0.55],
                opacity: [0.2, 0.5, 0.4],
              }}
              transition={{ duration: 0.52, ease: "easeOut", times: [0, 0.5, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  )
}
