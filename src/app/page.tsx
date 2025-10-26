import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import {NavBar, NavButton } from "@/components/nav-components";
import { TypingAnimation } from "@/components/ui/typing-animation";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import WavingHand from "@/components/waving-hand";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";


export default function Home() {
  return (
    <div className="px-2 custom-scrollbar h-screen 2xl:h-auto overflow-y-auto scroll-smooth">
        
        <NavBar />
        
        <section
          id="hero"
          className="z-2 mb-8 min-h-screen 2xl:min-h-0 2xl:h-auto relative w-full overflow-hidden flex flex-col justify-start pt-[15vh] scroll-mt-[72px]"
        >
          
          <div className="flex flex-col justify-center sm:gap-8 items-center">
            <div className="flex justify-center relative w-full items-center ">
                <div className="absolute w-full flex items-center justify-center gap-10 ">
                {/* left wing: positioned to the left of the profile, slightly behind (z-0) */}
                <BlurFade
                  oneTimeDelay={0.5}
                  delay={0}
                  duration={1}
                  direction="left"
                  offset={25}
                  inView={true}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 z-0 pointer-events-none
                             -translate-x-[150px] sm:-translate-x-[255px]"
                >
                  <Image
                    aria-hidden
                    src="/wing-l.png"
                    alt="Left wing"
                    width={240}
                    height={340}
                    className="w-[140px] sm:w-[240px]"
                  />
                </BlurFade>

                {/* right wing: positioned to the right of the profile, slightly behind (z-0) */}
                <BlurFade
                  oneTimeDelay={0.5}
                  delay={0}
                  duration={1}
                  direction="right"
                  offset={25}
                  inView={true}
                  className="absolute top-1/2 right-1/2 -translate-y-1/2 z-0 pointer-events-none
                             translate-x-[150px] sm:translate-x-[255px]"
                >
                  <Image
                    aria-hidden
                    src="/wing-r.png"
                    alt="Right wing"
                    width={240}
                    height={340}
                    className="w-[140px] sm:w-[240px]"
                  />
                </BlurFade>
                </div>

              <BlurFade delay={0.15} duration={0.5} inView={true} triggerOnce={true}>
                <Image
                  aria-hidden
                  src="/pfp.png"
                  alt="profile pic"
                  width={240}
                  height={240}
                  className="rounded-full w-[150px] sm:w-[240px]"
                />
              </BlurFade>
            </div>
            
            <div className="flex flex-col md:gap-4 max-w-[640px] w-full items-center mx-auto text-center">
              <div className="flex justify-center items-center text-4xl sm:text-7xl h-18 sm:h-20 caret-underscore caret-blink w-full">
                <TypingAnimation delay={50} showCursor={false} className="inline whitespace-normal break-words align-baseline font-medium  ">
                  {"Hi\u00A0"}
                </TypingAnimation>
                <WavingHand appearDelayMs={50} />
                <TypingAnimation delay={100} showCursor={false} className="inline whitespace-normal break-words align-baseline font-medium">
                  {"\u00A0I'm"}
                </TypingAnimation>
                <TypingAnimation
                  delay={150}
                  showCursor={false}
                  className="inline whitespace-normal break-words align-baseline font-bold bg-gradient-to-br from-teal-300 via-stone-200 to-cyan-300 text-transparent bg-clip-text"
                >
                  {"\u00A0Ishansh"}
                </TypingAnimation>
              </div>
              <div className="font-semibold text-md sm:text-lg lg:text-2xl caret-underscore caret-blink min-w-0 max-w-full px-2 ">
                <TypingAnimation delay={50} typeSpeed={40} showCursor={false} className=" align-baseline leading-tight whitespace-normal break-words text-center text-transparent bg-gradient-to-r from-stone-300 via-neutral-200 to-zinc-300 bg-clip-text">
                  Full-Stack Developer | Building • Testing • Optimizing
                </TypingAnimation>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <div className="p-8 sm:p-4 flex flex-col sm:flex-row gap-8 items-center">
                <BlurFade oneTimeDelay={2.5} inView={true} offset={12}>
                  <NavButton name="About me" navTo="about" />
                </BlurFade>
                <BlurFade oneTimeDelay={3} inView={true}>
                  <NavButton name="My Projects" navTo="projects" />
                </BlurFade>
              </div>
            </div>
            
          </div>
        </section >
          
        <section id="about" className=" h-auto relative z-2 overflow-hidden w-full scroll-mt-[72px]">
          <div className="flex justify-center w-full">
            <div className="flex justify-center w-[1020px] relative before:content-[''] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-br before:from-slate-600 before:via-gray-400 before:to-stone-600">
              <BlurFade duration={0.5} inView={true} className="max-w-lg md:max-w-[768px]">
                <div className="mt-8 md:mt-10 flex justify-center text-3xl sm:text-4xl md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider bg-gradient-to-r from-emerald-400 via-stone-200 to-cyan-400 text-transparent bg-clip-text ">
                  About me
                </div>
                <div className="mt-6 md:mt-8 align-baseline leading-tight whitespace-normal break-words font-semibold text-md sm:text-lg lg:text-xl text-center text-transparent bg-gradient-to-r from-stone-300 via-neutral-200 to-zinc-300 bg-clip-text">
                  I build full-stack apps using React, Next.js, TypeScript, and cloud technologies to take concepts from rough sketches to real projects. 
                  I enjoy creating things because I&apos;m fascinated by how they work.
                  I love breaking down an idea, improving it, and turning it into something people actually enjoy using.
                  If you&apos;re building something exciting, I&apos;d love to get involved.
                </div>
                <div className="m-4 pt-4 flex justify-center">
                  <NavButton name="Get in Touch" navTo="contact" />
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mt-10 flex justify-center bg-gray-900/60 relative z-2 overflow-hidden w-full scroll-mt-[72px]"
        >
          <div className="flex justify-center w-[1020px] relative before:content-[''] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-br before:from-slate-600 before:via-gray-400 before:to-stone-600">
            <BlurFade duration={0.5} inView={true}>
              <div className="mt-8 md:mt-10 mb-4 flex justify-center text-3xl sm:text-4xl  md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider bg-gradient-to-r from-emerald-400 via-stone-200 to-cyan-400 text-transparent bg-clip-text ">
                Projects
              </div>

              <div className="flex flex-wrap justify-center">
                <Projects />
              </div>
            </BlurFade>
          </div>
        </section>

        <section id="tech-stack" className="mt-8 mb-14 md:mb-20 relative z-2 h-auto overflow-hidden w-full flex flex-col md:gap-8 gap-4 scroll-mt-[72px]"
        >
          <div className="flex justify-center w-full">
            <div className="flex justify-center w-[1020px] relative before:content-[''] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-br before:from-slate-600 before:via-gray-400 before:to-stone-600">
              <BlurFade duration={0.5} inView={true}>
                <div className="mt-8 md:mt-10 mb-4 md:pb-4 flex justify-center text-3xl sm:text-4xl  md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider bg-gradient-to-r from-teal-200 via-stone-100 to-cyan-200 text-transparent bg-clip-text">
                  Tech Stack
                </div>

              <div className="flex flex-wrap justify-center">
                <TechStack />
              </div>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="contact" className=" mt-8 mb-8 h-auto relative z-2 overflow-hidden w-full scroll-mt-[72px]">
          <div className="flex justify-center w-full">
            <div className="flex justify-center w-[1020px] relative before:content-[''] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-br before:from-slate-600 before:via-gray-400 before:to-stone-600">
              <BlurFade duration={0.5} inView={true} className="max-w-lg md:max-w-[768px]">
                <div className="m-8 md:mt-10 flex justify-center text-3xl sm:text-4xl  md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider  ">
                  <span
                  className="bg-gradient-to-r from-teal-100 via-stone-100 to-red-100 text-transparent bg-clip-text"
                  >
                    Get in
                  </span>
                  <span
                  className="bg-gradient-to-r from-amber-200 via-lime-100 to-rose-300 text-transparent bg-clip-text"
                  >
                    {"\u00A0Touch"}
                  </span>
                </div>
                <p className="mt-6 align-baseline leading-tight whitespace-normal break-words font-semibold text-md sm:text-lg lg:text-xl text-center text-transparent bg-gradient-to-r from-stone-300 via-neutral-200 to-zinc-300 bg-clip-text">
                  Get in touch with me, follow along, and say hi (most active on X).
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  {/* Replace href values with your actual handles */}
                  <a
                    href="https://x.com/ishanshX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="text-xl">𝕏</div>
                  </a>
                  <a
                    href="https://github.com/zxsharp"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ishansh-dimaniya"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:ishanshdimaniya@gmail.com"
                    aria-label="Email"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
                <div className="m-4 pt-4 flex justify-center">
                  <a
                    href="https://twitter.com/intent/follow?screen_name=ishanshX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="py-5 scale-95 text-lg cursor-pointer bg-gradient-to-br from-zinc-700 via-slate-600 to-cyan-800 transition delay-50 duration-150 ease-in hover:scale-100 hover:from-cyan-800 ">
                      Connect on 𝕏
                    </Button>
                  </a>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
    </div>
  );
}
