import { GlareCard } from "./ui/glare-card"
import { Tabs } from "./ui/tabs"
import Image from "next/image"

export default function TechStack() {
    const tabs = [
        { 
            label: "Frontend", 
            content: (
                <>
                    <TechStackCard imgName="react.svg" name="React.Js" />
                    <TechStackCard imgName="next.svg" name="Next.Js" />
                    <TechStackCard imgName="threejs.png" name="Three.Js" />
                    <TechStackCard imgName="tailwind.svg" name="Tailwind Css" />
                    <TechStackCard imgName="shadcn.png" name="Shadcn" />
                    <TechStackCard imgName="radix.png" name="Radix UI" />
                    <TechStackCard imgName="motion.png" name="Motion" />
                    <TechStackCard imgName="zustand.svg" name="Zustand" />
                </>
            )
        },
        { 
            label: "Backend", 
            content: (
                <>
                    <TechStackCard imgName="node.svg" name="Node.Js" />
                    <TechStackCard imgName="express.webp" name="Express.Js" />
                    <TechStackCard imgName="hono.png" name="Hono" />
                </> 
            )
        },
        { 
            label: "Database", 
            content: (
                <>
                    <TechStackCard imgName="postgres.svg" name="Postgre SQL" />
                    <TechStackCard imgName="mongodb.webp" name="Mongo DB" />
                    <TechStackCard imgName="prisma.jpeg" name="Prisma" />
                    <TechStackCard imgName="mongoose.png" name="Mongoose" />
                </>
            )
        },
        { 
            label: "Languages", 
            content: (
                <>
                    <TechStackCard imgName="ts.svg" name="Typescript" />
                    <TechStackCard imgName="js.svg" name="Javascript" />
                    <TechStackCard imgName="c++.svg" name="C++" />
                </>
            )
        },
        { 
            label: "Tools", 
            content: (
                <>
                    <TechStackCard imgName="git.svg" name="Git" />
                    <TechStackCard imgName="github.svg" name="GitHub" />
                    <TechStackCard imgName="turbo.png" name="TurboRepo" />
                    <TechStackCard imgName="eslint.png" name="ESLint" />
                    <TechStackCard imgName="vite.png" name="Vite" />    
                </>
            )
        },
        { 
            label: "Cloud", 
            content: (
                <>
                    <TechStackCard imgName="aws.png" name="AWS" />
                    <TechStackCard imgName="vercel.png" name="Vercel" />
                    <TechStackCard imgName="docker.webp" name="Docker" />
                    <TechStackCard imgName="cloudflare.png" name="Cloudflare" />  
                </>
            )
        }
    ]

    return (
        <div className="max-w-[90vw] lg:max-w-[70vw]">
            <Tabs tabs={tabs}/>
        </div>
    )
}

type PropsType = {
    imgName: string,
    name: string
}

const TechStackCard = ({imgName, name}: PropsType ) => {
    return (
        <GlareCard className="flex flex-col gap-2 lg:gap-3 items-center justify-center">
            <Image
                className=" w-8 sm:w-16 md:w-18 lg:w-20 relative inset-0 object-cover"
                src={`/${imgName}`}
                alt={name}
                width={80}
                height={80}
            />
            <div className="text-xs sm:text-lg md:text-xl">
                {name}
            </div>
        </GlareCard>
    )
}