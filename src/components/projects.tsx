"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import { ProjectCard } from "./ui/project-card";
import Autoplay from "embla-carousel-autoplay"
import ClassNames from "embla-carousel-class-names"
import { useRef, useState } from "react";
import {ExternalLink, Github, GithubIcon} from "lucide-react"
import Image from "next/image";
import { Badge } from "./ui/badge";
import { useDotButton } from "./ui/EmblaCarouselDotButton";

export default function Projects() {
    const autoplay = useRef(Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false, stopOnFocusIn: true}))
    const classNames = useRef(
        ClassNames({
            snapped: [
                "brightness-125"
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
                        tech={["Next.js", "Zustand", "Vercel", "Prisma", "GitHub Actions"]}
                    />

                    <CarouselCard
                        imageUrl="/vision.png"
                        title="EYEDESK"
                        about="A real-time attention-tracking pipeline utilizing a monocular camera to continuously monitor user focus and spatial behavior."
                        githubUrl="https://github.com/zxsharp/eyedesk"
                        tech={["Python", "Typescript", "OpenCV", "MediaPipe", "SQLite"]}
                    />

                    <CarouselCard
                        imageUrl="/mlops.png"
                        title="DATA LINEAGE POLICY ENGINE"
                        about="A deterministic MLOps policy engine to simulate and mitigate the downstream blast radius of breaking schema mutations."
                        githubUrl="https://github.com/zxsharp/metadata-change-guard"
                        tech={["TypeScript", "Node.js", "Fastify", "React", "OpenMetadata"]}
                    />

                    <CarouselCard
                        imageUrl="/traffic.png"
                        title="API TRAFFIC ANALYZER"
                        about="A real-time high-throughput streaming data pipeline to ingest, aggregate, and continuously process asynchronous API traffic logs."
                        githubUrl="https://github.com/zxsharp/api-traffic-monitor"
                        tech={["Python", "Pandas", "Scikit-learn", "Redis Streams"]}
                    />

                    <CarouselCard
                        imageUrl="/p2p.png"
                        title="ONION P2P MESSAGING APP"
                        about="A decentralized peer-to-peer network over Tor utilizing multi-hop routing for secure, resilient, and censorship-resistant communication."
                        githubUrl="https://github.com/zxsharp/onion-p2p-app"
                        tech={["TypeScript", "Node.js", "Tor", "WebSockets"]}
                    />

                </CarouselContent>
                
                <div className="h-8 flex items-center justify-center gap-[10%] md:gap-[50%]">
                    <div className="flex gap-4">
                        <CarouselPrevious className="hover:-translate-y-1 transform transition duration-200 hover:shadow-md"/>
                        <CarouselNext className="hover:-translate-y-1 transform transition duration-200 hover:shadow-md" />
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
            <div className="p-1 relative brightness-80
                transition-all duration-300 ease-in-out"
            >
                <ProjectCard imageUrl={props.imageUrl} display={props.title}>
                    <div className="flex flex-col items-center justify-center p-1 gap-4 ">
                        <span className="text-md md:text-xl tracking-widest font-semibold">{props.title}</span>
                        <span className="text-sm md:text-md h-[5rem]">
                            {props.about.length > 123 ? `${props.about.slice(0, 123)}....` : props.about}
                        </span>
                        <span className="flex gap-12 h-8 m-2 items-center">
                            {props.githubUrl && (
                                <a
                                    href={props.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${props.title} GitHub`}
                                    className="inline-flex p-1 rounded-full shadow-xs shadow-black hover:bg-black/60 hover:scale-120 transition-all duration-100 ease-out"
                                >
                                    <GithubIcon />
                                </a>
                            )}
                            {props.liveUrl && (
                                <a
                                    href={props.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${props.title} Live site`}
                                    className="inline-flex p-1 rounded-md text-sky-300 hover:scale-120 transition-all duration-100 ease-out"
                                >
                                    <ExternalLink />
                                </a>
                            )}
                        </span>
                        <span className="h-12 flex flex-wrap gap-1 md:gap-2 items-center">
                        {props.tech?.map((item, index) => {
                            return (
                                <Badge key={index} className="px-1 md:py-1 text-foreground bg-transparent border-[1px] md:border-sm border-white/60 rounded-sm">{item}</Badge>
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
