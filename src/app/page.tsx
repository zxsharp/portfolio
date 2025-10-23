import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import NavBar from "@/components/nav-bar";
import { TypingAnimation } from "@/components/ui/typing-animation";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import WavingHand from "@/components/waving-hand";


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

        
          {/* <FlickeringGrid
            className="fixed z-0 w-screen overflow-hidden bg-background [mask-image:radial-gradient(850px_circle_at_center,white,transparent)]"
            squareSize={4}
            gridGap={5}
            color="#60A5FA"
            maxOpacity={0.1}
            flickerChance={0.4}
            height={1600}
            width={1600}
          /> */}
        
        

        {/* <CodePointer /> */}

        <NavBar />
        
        <section
          id="hero"
          className="z-2 min-h-screen relative w-full overflow-hidden flex flex-col justify-start pt-[15vh] scroll-mt-[72px]"
        >
          
          <div className="flex flex-col justify-center gap-10 items-center">
            <div className="flex justify-center relative w-full items-center">
              <BlurFade delay={0.5} duration={1} direction="right" inView className="absolute">
                <Image 
                  aria-hidden
                  src="/wings.png"
                  alt="wings"
                  width={490}
                  height={340}
                  className="w-[340px] sm:w-[540px]"
                />
              </BlurFade>
              <BlurFade delay={0.25} inView>
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
            
            <div className="flex flex-col gap-4">
              <div className="flex items-end text-4xl sm:text-7xl font-semibold caret-underscore caret-blink min-w-0 max-w-full">
                <TypingAnimation delay={150} className="inline whitespace-normal break-words align-baseline">
                  {"Hi\u00A0"}
                </TypingAnimation>
                <WavingHand appearDelayMs={150} />
                <TypingAnimation delay={150} className="inline whitespace-normal break-words align-baseline">
                  {"\u00A0\u00A0I'm Ishansh"}
                </TypingAnimation>
              </div>
              <div className="font-semibold text-lg caret-underscore caret-blink min-w-0 max-w-full">
                <TypingAnimation delay={150} className="inline whitespace-normal break-words align-baseline">
                  Average full stack dev
                </TypingAnimation>
              </div>
            </div>
            
          </div>

        </section>

        <section
          id="tech-stack"
          className="relative z-2 min-h-screen overflow-hidden w-full flex flex-col md:gap-8 gap-4 scroll-mt-[72px]"
        >
          <BlurFade duration={0.5} inView>
              <div className="m-4 flex justify-center text-2xl md:text-5xl font-heading font-semibold backdrop-blur-2xl tracking-widest">
                TECH STACK
              </div>
          </BlurFade>

          <BlurFade duration={0.5} inView className="flex flex-wrap justify-center">
            <TechStack />
          </BlurFade>
        </section>

        <section
          id="projects"
          className="mt-8 relative z-2 min-h-screen overflow-hidden w-full scroll-mt-[72px]"
        >
          <BlurFade duration={0.5} inView>
              <div className="m-4 flex justify-center text-5xl font-heading font-semibold backdrop-blur-2xl tracking-widest">
                PROJECTS
              </div>
          </BlurFade>

          <BlurFade duration={0.5} inView className="flex flex-wrap justify-center">
            <Projects />
          </BlurFade>
          
        </section>

      {/* </div> */}
    </div>
  );
}
