import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import NavBar from "@/components/nav-bar";
import { TypingAnimation } from "@/components/ui/typing-animation";
import TechStack from "@/components/tech-stack";


export default function Home() {
  return (
    <div className="custom-scrollbar h-screen overflow-y-auto">
      <div className="mx-4">

        <DotPattern 
          glow={true}
          className={cn(
            "z-1 fixed [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          )}
        />

        
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
        
        <section id="hero" className=" z-2 min-h-screen relative w-full overflow-hidden flex flex-col justify-start pt-[20vh]">
          
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
              <div className="flex items-end text-4xl sm:text-6xl font-semibold caret-underscore caret-blink min-w-0 max-w-full">
                <TypingAnimation delay={150} className="inline whitespace-normal break-words align-baseline">
                  Hi 👋 I&apos;m Ishansh
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


        <section id="tech-stack" className="relative z-2 overflow-hidden w-full">
          <BlurFade delay={0.1} duration={0.5} inView>
            {/* <VideoText src="/matrix.mp4"> */}
              <div className="m-4 flex justify-center text-4xl font-heading font-semibold">
                Tech Stack
              </div>
            {/* </VideoText> */}
          </BlurFade>

          <BlurFade delay={0.2} inView className="flex flex-wrap justify-center">
            <TechStack />
          </BlurFade>


        </section>

      </div>
    </div>
  );
}
