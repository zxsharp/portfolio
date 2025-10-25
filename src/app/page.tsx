import Image from "next/image";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import NavBar from "@/components/nav-bar";
import { TypingAnimation } from "@/components/ui/typing-animation";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import WavingHand from "@/components/waving-hand";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="px-2 custom-scrollbar h-screen overflow-y-auto scroll-smooth">
      {/* <div className="mx-4"> */}

        {/* <DotPattern 
          glow={true}
          className={cn(
            "z-1 fixed [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          )}
        /> */}

        
        
        

        {/* <CodePointer /> */}

        <NavBar />
        
        <section
          id="hero"
          className="z-2 h-screen relative w-full overflow-hidden flex flex-col justify-start pt-[15vh] scroll-mt-[72px]"
        >
          
          <div className="flex flex-col justify-center sm:gap-8 items-center">
            <div className="flex justify-center relative w-full items-center ">
                <div className="absolute w-full flex items-center justify-center gap-10 ">
                {/* left wing: positioned to the left of the profile, slightly behind (z-0) */}
                <BlurFade
                  delay={0.25}
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
                  delay={0.25}
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
                  className="inline whitespace-normal break-words align-baseline font-bold bg-gradient-to-r from-teal-100 via-stone-200 to-cyan-100 text-transparent bg-clip-text"
                >
                  {"\u00A0Ishansh"}
                </TypingAnimation>
              </div>
              <div className="font-semibold text-md sm:text-lg lg:text-2xl caret-underscore caret-blink min-w-0 max-w-full px-2 ">
                <TypingAnimation delay={50} typeSpeed={40} showCursor={false} className=" align-baseline leading-tight whitespace-normal break-words text-center text-transparent bg-gradient-to-r from-stone-300 via-neutral-200 to-zinc-300 bg-clip-text">
                  Full Stack Developer Building Testing Optimizing
                </TypingAnimation>
              </div>
            </div>
            
          </div>
        </section >
          
        <section id="about" className=" h-auto relative z-2 overflow-hidden w-full scroll-mt-[72px]">
          <div className="flex justify-center w-full">
            <div className="flex justify-center border-t-3 border-stone-400 w-[1020px]">
              <BlurFade duration={0.5} inView={true} className="max-w-lg md:max-w-[768px]">
                <div className="mt-8 flex justify-center text-2xl sm:text-4xl md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider bg-gradient-to-r from-teal-200 via-stone-100 to-cyan-200 text-transparent bg-clip-text ">
                  About me
                </div>
                <div className="mt-6 md:mt-8 align-baseline leading-tight whitespace-normal break-words font-semibold text-md sm:text-lg lg:text-xl text-center text-transparent bg-gradient-to-r from-stone-300 via-neutral-200 to-zinc-300 bg-clip-text">
                  I make things because I&apos;m genuinely obsessed with how they work. 
                  I love breaking down an idea, improving it, and turning it into something people actually enjoy using. 
                  I build full stack apps with React, Next.js, TypeScript, and cloud technologies to take concepts from rough sketch to real projects. 
                  If you&apos;re building something exciting, I&apos;d love to get involved.
                </div>
                <div className="m-4 pt-4 flex justify-center">
                  <Button
                  className="py-5 scale-95 text-lg cursor-pointer bg-gradient-to-br from-zinc-700 via-slate-600 to-cyan-800 transition delay-50 duration-150 ease-in hover:scale-100 hover:from-cyan-800 "
                  >
                    Get in Touch
                  </Button>
                </div>
              </BlurFade>
            </div>
            
          </div>
        </section>

        <section
          id="projects"
          className="mt-10 flex justify-center bg-gray-900/60 relative z-2 overflow-hidden w-full scroll-mt-[72px]"
        >
          <div className="flex justify-center border-t-3 border-stone-400 w-[1020px] ">
            <BlurFade duration={0.5} inView={true}>
              <div className="m-4 flex justify-center text-2xl sm:text-4xl  md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider bg-gradient-to-r from-teal-200 via-stone-100 to-cyan-200 text-transparent bg-clip-text ">
                Projects
              </div>

              <div className="flex flex-wrap justify-center">
                <Projects />
              </div>
            </BlurFade>
          </div>
          
        </section>

        <section id="tech-stack" className="mt-8 relative z-2 min-h-screen overflow-hidden w-full flex flex-col md:gap-8 gap-4 scroll-mt-[72px]"
        >
          <div className="flex justify-center w-full">
            <div className="flex justify-center border-t-3 border-stone-400 w-[1020px]">
              <BlurFade duration={0.5} inView={true}>
                <div className="m-4 pb-2 md:pb-4 flex justify-center text-2xl sm:text-4xl  md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider bg-gradient-to-r from-teal-200 via-stone-100 to-cyan-200 text-transparent bg-clip-text">
                  Tech Stack
                </div>

              <div className="flex flex-wrap justify-center">
                <TechStack />
              </div>
              </BlurFade>
            </div>
          </div>
            
        </section>

        <section id="contact" className=" h-auto relative z-2 overflow-hidden w-full scroll-mt-[72px]">
          <div className="flex justify-center w-full">
            <div className=" flex justify-center border-t-3 border-stone-400 w-[1020px]">
              <BlurFade duration={0.5} inView={true} className="max-w-lg md:max-w-[768px]">
                <div className="m-4 flex justify-center text-2xl sm:text-4xl  md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-wider bg-gradient-to-r from-teal-200 via-stone-100 to-cyan-200 text-transparent bg-clip-text ">
                  Get in Touch
                </div>
                <div className="mt-8 align-baseline leading-tight whitespace-normal break-words font-semibold text-md sm:text-lg lg:text-xl text-center text-transparent bg-gradient-to-r from-stone-300 via-neutral-200 to-zinc-300 bg-clip-text">
                  [contact info]
                </div>
                <div className="m-4 pt-4 flex justify-center">
                  <Button
                  className="py-5 scale-95 text-lg cursor-pointer bg-gradient-to-br from-zinc-700 via-slate-600 to-cyan-800 transition delay-50 duration-150 ease-in hover:scale-100 hover:from-cyan-800 "
                  >
                    Get in Touch
                  </Button>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

      {/* </div> */}
    </div>
  );
}
