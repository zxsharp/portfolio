import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";
import NavBar from "@/components/nav-bar";
import CodePointer from "@/components/code-pointer";
import { TypingAnimation } from "@/components/ui/typing-animation";
import TechStack from "@/components/tech-stack";


export default function Home() {
  return (
    <>

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
      
      

      <CodePointer />

      <NavBar />
      
      <section id="hero" className=" z-2 min-h-screen relative w-full overflow-hidden flex flex-col justify-start pt-[30vh]">
        
        <div className="flex flex-col justify-center gap-10 items-center">
          <BlurFade delay={0.25} inView>
            <Image
              aria-hidden
              src="/pfp.png"
              alt="Window icon"
              width={200}
              height={200}
              className="rounded-full"
            />
          </BlurFade>
          
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

        <BlurFade delay={0.2} inView>
          <TechStack />
        </BlurFade>


      </section>

     
      

    </>
  );
}
