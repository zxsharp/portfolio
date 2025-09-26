"use client"
import { motion } from "motion/react";
import { Pointer } from "./ui/pointer";
import { CodeXml } from "lucide-react";

export default function CodePointer() {
    return (
        <>
            <Pointer>
                <motion.div
                    animate={{
                    scale: [0.8, 1, 0.8],
                    rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    }}
                >
                    <CodeXml 
                    className="text-secondary font-extrabold text-lg"
                    strokeWidth={3}
                    />
                    
                </motion.div>
            </Pointer>
        </>
    )
}