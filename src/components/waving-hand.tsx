"use client"
import { motion } from "motion/react"

export default function WavingHand({ appearDelayMs = 0 }: { appearDelayMs?: number }){
    const delayS = appearDelayMs / 1000
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                rotate: [-20, 25, -20],
            }}
            transition={{
                opacity: { delay: delayS, duration: 0.2, ease: "easeOut" },
                rotate: { delay: delayS, duration: 1.4, ease: "easeInOut", repeat: Infinity },
            }}
            style={{ display: "inline-block", transformOrigin: "bottom right", willChange: "transform, opacity", opacity: 0 }}
        >
            👋
        </motion.span>
    )
}