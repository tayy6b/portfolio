"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Pose = "idle" | "jump" | "land"

/**
 * The mascot: a chubby flat-vector hamster with animated, lifelike parts.
 * Ears twitch, cheeks puff, paws wiggle and the body breathes.
 * `blink` toggles the eyes; `pose` drives the limb posture for jumps/landings.
 */
export function MascotBunny({
  size = 64,
  className,
  blink = false,
  pose = "idle",
}: {
  size?: number
  className?: string
  blink?: boolean
  pose?: Pose
}) {
  // Limb / body posture targets per pose.
  const armUp = pose === "jump"
  const squash = pose === "land"

  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // Whole-body breathing / squash
        animate={{
          scaleY: squash ? 0.86 : 1,
          scaleX: squash ? 1.12 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 18 }}
        style={{ originY: 1, overflow: "visible" }}
      >
        {/* Back feet */}
        <motion.g
          animate={{ y: armUp ? -2 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 16 }}
        >
          <ellipse cx="28" cy="90" rx="11" ry="7" fill="var(--foreground)" />
          <ellipse cx="72" cy="90" rx="11" ry="7" fill="var(--foreground)" />
          <ellipse cx="28" cy="90" rx="5" ry="3" fill="var(--toxic)" opacity="0.9" />
          <ellipse cx="72" cy="90" rx="5" ry="3" fill="var(--toxic)" opacity="0.9" />
        </motion.g>

        {/* Body */}
        <ellipse cx="50" cy="60" rx="40" ry="36" fill="var(--foreground)" />
        {/* Belly patch */}
        <ellipse cx="50" cy="68" rx="24" ry="22" fill="var(--background)" opacity="0.14" />

        {/* Ears — twitch independently */}
        <motion.g
          animate={{ rotate: pose === "idle" ? [0, -8, 0] : 0 }}
          transition={{
            duration: 0.5,
            repeat: pose === "idle" ? Number.POSITIVE_INFINITY : 0,
            repeatDelay: 2.2,
            ease: "easeInOut",
          }}
          style={{ originX: "26px", originY: "26px" }}
        >
          <circle cx="26" cy="26" r="12" fill="var(--foreground)" />
          <circle cx="26" cy="26" r="6" fill="var(--magenta)" />
        </motion.g>
        <motion.g
          animate={{ rotate: pose === "idle" ? [0, 8, 0] : 0 }}
          transition={{
            duration: 0.5,
            repeat: pose === "idle" ? Number.POSITIVE_INFINITY : 0,
            repeatDelay: 2.6,
            ease: "easeInOut",
          }}
          style={{ originX: "74px", originY: "26px" }}
        >
          <circle cx="74" cy="26" r="12" fill="var(--foreground)" />
          <circle cx="74" cy="26" r="6" fill="var(--magenta)" />
        </motion.g>

        {/* Cheeks — puff slightly while idle */}
        <motion.g
          animate={{ scale: pose === "idle" ? [1, 1.08, 1] : 1 }}
          transition={{
            duration: 2.4,
            repeat: pose === "idle" ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
          style={{ originX: "50px", originY: "64px" }}
        >
          <circle cx="22" cy="64" r="13" fill="var(--foreground)" />
          <circle cx="78" cy="64" r="13" fill="var(--foreground)" />
          <circle cx="20" cy="68" r="5" fill="var(--magenta)" opacity="0.8" />
          <circle cx="80" cy="68" r="5" fill="var(--magenta)" opacity="0.8" />
        </motion.g>

        {/* Eyes */}
        {blink ? (
          <>
            <rect x="34" y="56" width="10" height="3.4" rx="1.7" fill="var(--background)" />
            <rect x="56" y="56" width="10" height="3.4" rx="1.7" fill="var(--background)" />
          </>
        ) : (
          <>
            <circle cx="39" cy="57" r="5.2" fill="var(--background)" />
            <circle cx="61" cy="57" r="5.2" fill="var(--background)" />
            <circle cx="40.8" cy="55.2" r="1.7" fill="var(--foreground)" />
            <circle cx="62.8" cy="55.2" r="1.7" fill="var(--foreground)" />
          </>
        )}

        {/* Nose + mouth */}
        <ellipse cx="50" cy="66" rx="3.2" ry="2.4" fill="var(--toxic)" />
        <path
          d="M50 68 q-4 4 -8 1 M50 68 q4 4 8 1"
          stroke="var(--background)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
          fill="none"
        />

        {/* Whiskers */}
        <g stroke="var(--background)" strokeWidth="1.4" strokeLinecap="round" opacity="0.4">
          <line x1="34" y1="66" x2="20" y2="63" />
          <line x1="34" y1="68" x2="20" y2="70" />
          <line x1="66" y1="66" x2="80" y2="63" />
          <line x1="66" y1="68" x2="80" y2="70" />
        </g>

        {/* Front paws — raise up during a jump, wiggle while idle */}
        <motion.g
          animate={{
            y: armUp ? -14 : 0,
            rotate: pose === "idle" ? [0, 6, 0] : armUp ? -20 : 0,
          }}
          transition={{
            type: armUp ? "spring" : "tween",
            stiffness: 400,
            damping: 14,
            duration: pose === "idle" ? 1.8 : undefined,
            repeat: pose === "idle" ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
          style={{ originX: "34px", originY: "78px" }}
        >
          <ellipse cx="34" cy="80" rx="6" ry="8" fill="var(--foreground)" />
        </motion.g>
        <motion.g
          animate={{
            y: armUp ? -14 : 0,
            rotate: pose === "idle" ? [0, -6, 0] : armUp ? 20 : 0,
          }}
          transition={{
            type: armUp ? "spring" : "tween",
            stiffness: 400,
            damping: 14,
            duration: pose === "idle" ? 1.8 : undefined,
            repeat: pose === "idle" ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
          style={{ originX: "66px", originY: "78px" }}
        >
          <ellipse cx="66" cy="80" rx="6" ry="8" fill="var(--foreground)" />
        </motion.g>
      </motion.svg>
    </div>
  )
}

/**
 * Idle hamster that breathes, twitches its ears and occasionally blinks.
 */
export function MascotIdle({ size = 64, className }: { size?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -3, 0], rotate: [0, -1.5, 1.5, 0] }}
      transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <BlinkingHamster size={size} />
    </motion.div>
  )
}

function BlinkingHamster({ size }: { size: number }) {
  const [blink, setBlink] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const loop = () => {
      const next = 1800 + Math.random() * 3000
      timeout = setTimeout(() => {
        setBlink(true)
        setTimeout(() => setBlink(false), 130)
        loop()
      }, next)
    }
    loop()
    return () => clearTimeout(timeout)
  }, [])

  return <MascotBunny size={size} blink={blink} pose="idle" />
}
