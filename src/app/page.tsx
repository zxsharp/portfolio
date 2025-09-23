import Image from "next/image";
import { Pointer } from "@/components/ui/pointer";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="h-96 min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      
      <DotPattern 
        glow={true}
        className={cn(
          "z-1 fixed [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
      
      <div className="z-2 flex justify-around gap-10 items-center">
        <BlurFade delay={0.25} inView>
          <Image
            aria-hidden
            src="/pfp.png"
            alt="Window icon"
            width={180}
            height={180}
            className="rounded-full"
          />
        </BlurFade>
        <BlurFade delay={0.25} inView>
          <div className="flex flex-col gap-4 text-slate-100">
            <div className="items-center text-3xl font-semibold">
              Ishansh 
            </div>
            <div>
              Average full stack dev
            </div>
          </div>
        </BlurFade>
      </div>

      <Pointer className="z-[999] fill-blue-500" />

    </div>
  );
}
