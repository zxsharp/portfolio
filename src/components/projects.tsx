"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { ProjectCard } from "./ui/project-card";
import Autoplay from "embla-carousel-autoplay"
import ClassNames from "embla-carousel-class-names"
import { useRef, useState } from "react";
import {ExternalLink, Github} from "lucide-react"
import { Badge } from "./ui/badge";
import { useDotButton } from "./ui/EmblaCarouselDotButton";

export default function Projects() {
    const autoplay = useRef(Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false}))
    const classNames = useRef(
        ClassNames({
            snapped: [
                "is-snapped"
            ],
            dragging: "duration-0",
        })
    );
    // capture Embla API from shadcn Carousel
    const [api, setApi] = useState<CarouselApi | undefined>(undefined);

    return (
        <>
            <Carousel
                opts={{ align: "center", loop: true }}
                plugins={[autoplay.current, classNames.current]}
                className="w-full my-4 max-w-5xl flex flex-col "
                setApi={setApi}
            >
                <CarouselContent className="pb-6 ">

                    <CarouselCard
                        imageUrl="/escape.png"
                        title="ESCAPE"
                        about="A 3D first person POV game. A random maze with a single path to exit is generated. Player memorizes and tries to exit in 3D"
                        githubUrl="https://github.com/zxsharp/Escape"
                        liveUrl="https://escapeit.vercel.app"
                        tech={["React", "Three.js", "Web APIs"]}
                    />

                    <CarouselCard
                        imageUrl="/file-share.png"
                        title="FILE-SHARE"
                        about="File Sharing app requires no login, file is stored in cloud and cron job deletes the file in couple of hours"
                        githubUrl="https://github.com/zxsharp/file-share"
                        liveUrl="https://file-share-jade.vercel.app"
                        tech={["Next.js", "Zustand", "Vercel", "GitHub Actions"]}
                    />

                    <CarouselCard
                        imageUrl="/password-generator.png"
                        title="PASSWORD-GENERATOR"
                        about="React SPA that generates random passowrds."
                        githubUrl="https://github.com/zxsharp/Password-Generator"
                        liveUrl="https://password-generator-lovat-omega.vercel.app"
                        tech={["React"]}
                    />

                    <CarouselCard
                        imageUrl="/metadata-reader.png"
                        title="METADATA-READER"
                        about="A UI wrapper of multiple metadata parsing libraries that reades the metadata based on the file type."
                        githubUrl="https://github.com/zxsharp/metadata-reader"
                        liveUrl="https://metadata-reader-roan.vercel.app"
                        tech={["React", "bunch of parsing libs..."]}
                    />

                    <CarouselCard
                        imageUrl="/text-compare.png"
                        title="TEXT-COMPARE"
                        about="UI wrapper to highlight difference in two different texts like in git but letter by letter."
                        githubUrl="https://github.com/zxsharp/compare-text"
                        liveUrl="https://compare-text-lake.vercel.app"
                        tech={["React", "tailwind", "diff-match-patch"]}
                    />

                </CarouselContent>
                <div className="h-8 flex items-center justify-around">
                    <div className="flex gap-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                    <CarouselDots api={api} />
                </div>
            </Carousel>
        </>
    )   
}

type CarouselProps = {
    imageUrl: string,
    title: string,
    about: string,
    githubUrl?: string,
    liveUrl?: string,
    tech?: string[]
}

function CarouselCard(props: CarouselProps) {
    return (
        <CarouselItem className="basis-auto px-4">
            <div className="p-1 relative embla-slide-card
                transition-all duration-300 ease-in-out"
            >
                <ProjectCard imageUrl={props.imageUrl} display={props.title}>
                    <div className="flex flex-col items-center justify-center p-2 gap-4 ">
                        <span className="text-xl tracking-widest font-semibold">{props.title}</span>
                        <span className="h-[5rem]">
                            {props.about.length > 123 ? `${props.about.slice(0, 123)}....` : props.about}
                        </span>
                        <span className="flex gap-12 h-8 m-2 items-center">
                            {props.githubUrl && (
                                <a
                                    href={props.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${props.title} GitHub`}
                                    className="inline-flex rounded-md hover:bg-black/60 hover:scale-120 transition-all duration-100 ease-in-out"
                                >
                                    <Github />
                                </a>
                            )}
                            {props.liveUrl && (
                                <a
                                    href={props.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${props.title} Live site`}
                                    className="inline-flex rounded-md hover:text-sky-300 hover:scale-120 transition-all duration-100 ease-in-out"
                                >
                                    <ExternalLink />
                                </a>
                            )}
                        </span>
                        <span className="flex gap-2">
                        {props.tech?.map((item, index) => {
                            return (
                                <Badge variant="outline" key={index} className="px-1">{item}</Badge>
                            )
                        })}
                        </span>
                        
                    </div>
                </ProjectCard>
            </div>
        </CarouselItem>
    )
}


function CarouselDots({ api }: { api: CarouselApi | undefined }) {
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

    return (
        <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => {
                const isActive = index === selectedIndex;
                return (
                    <button
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={isActive ? "true" : "false"}
                        className={`h-2 rounded-full transition-all ${
                            isActive
                                ? "w-6 bg-slate-200"
                                : "w-2 bg-slate-500/50 hover:bg-slate-400/70"
                        }`}
                    />
                );
            })}
        </div>
    );
}
