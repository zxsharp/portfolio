"use client"
import React, { useState } from "react"
import { BlurFade } from "./blur-fade"
import { RippleButton } from "./ripple-button"

export interface TabDefinition {
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: TabDefinition[]
  defaultIndex?: number
  onChange?(index: number): void
  className?: string
  buttonClassName?: string
  activeButtonClassName?: string
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultIndex = 0,
  onChange,
  className = "dark:border-neutral-800 w-full flex flex-wrap gap-3 justify-center items-center p-2 backdrop-blur-2xl",
  buttonClassName = "flex items-center justify-center rounded-full h-fit px-4 py-2 text-md text-foreground font-medium tracking-widest uppercase transform will-change-transform hover:scale-105 border-2 border-transparent hover:border-secondary transition-all duration-200 ease-out",
  activeButtonClassName = "dark:text-neutral-900 bg-secondary font-semibold dark:bg-white"
}) => {
  const [selected, setSelected] = useState<number>(defaultIndex)

  const handleSelect = (i: number) => {
    if (i === selected) return
    setSelected(i)
    onChange?.(i)
  }
  
  return (
    <div className="flex flex-col w-full items-center gap-6">
      <div role="tablist" className={className}>
        {tabs.map((t, i) => (
          <RippleButton
            key={t.label + i}
            role="tab"
            aria-selected={selected === i}
            onClick={() => handleSelect(i)}
            className={
              buttonClassName +
              (selected === i ? ` ${activeButtonClassName}` : "")
            }
            rippleColor="oklch(61.073% 0.10792 261.156)"
          >
            {t.label}
          </RippleButton>
        ))}
      </div>
      <BlurFade key={selected} delay={0.2}>
        <div role="tabpanel" className="w-full">
          {tabs[selected]?.content}
        </div>
      </BlurFade>
    </div>
  )
}
            