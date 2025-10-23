import { GlareCard } from "./ui/glare-card"
import { Tabs } from "./ui/tabs"
import Image from "next/image"

export default function TechStack() {
    const tabs = [
        { 
            label: "Frontend", 
            content: (
                <div className="flex flex-wrap justify-center gap-5">
                    <TechStackCard imgName="react.svg" name="React.Js" />
                    <TechStackCard imgName="next.svg" name="Next.Js" />
                    <TechStackCard imgName="threejs.png" name="Three.Js" />
                    <TechStackCard imgName="tailwind.svg" name="Tailwind Css" />
                    <TechStackCard imgName="shadcn.png" name="Shadcn" />
                    <TechStackCard imgName="radix.png" name="Radix UI" />
                    <TechStackCard imgName="motion.png" name="Motion" />
                    <TechStackCard imgName="zustand.svg" name="Zustand" />
                </div>
            )
        },
        { 
            label: "Backend", 
            content: (
                <div className="flex flex-wrap justify-center gap-5">
                    <TechStackCard imgName="node.svg" name="Node.Js" />
                    <TechStackCard imgName="express.webp" name="Express.Js" />
                    <TechStackCard imgName="hono.png" name="Hono" />
                    
                </div>
            )
        },
        { 
            label: "Database", 
            content: (
                <div className="flex flex-wrap justify-center gap-5">
                    <TechStackCard imgName="postgres.svg" name="Postgre SQL" />
                    <TechStackCard imgName="mongodb.webp" name="Mongo DB" />
                    <TechStackCard imgName="prisma.jpeg" name="Prisma ORM" />
                    <TechStackCard imgName="mongoose.png" name="Mongoose ODM" />
                </div>
            )
        },
        { 
            label: "Languages", 
            content: (
                <div className="flex flex-wrap justify-center gap-5">
                    <TechStackCard imgName="ts.svg" name="Typescript" />
                    <TechStackCard imgName="js.svg" name="Javascript" />
                    <TechStackCard imgName="c++.svg" name="C++" />
                </div> 
            )
        },
        { 
            label: "Tools", 
            content: (
                <div className="flex flex-wrap justify-center gap-5">
                    <TechStackCard imgName="git.svg" name="Git" />
                    <TechStackCard imgName="github.svg" name="GitHub" />
                    <TechStackCard imgName="turbo.png" name="TurboRepo" />
                    <TechStackCard imgName="eslint.png" name="ESLint" />
                    <TechStackCard imgName="vite.png" name="Vite" />    
                </div>
            )
        },
        { 
            label: "Cloud", 
            content: (
                <div className="flex flex-wrap justify-center gap-5">
                    <TechStackCard imgName="aws.png" name="AWS" />
                    <TechStackCard imgName="vercel.png" name="Vercel" />
                    <TechStackCard imgName="docker.webp" name="Docker" />
                    <TechStackCard imgName="cloudflare.png" name="Cloudflare" />  
                </div>
            )
        }
    ]

    return (
        <div className="max-w-[80vw] lg:max-w-[70vw]">
            <Tabs tabs={tabs} />
        </div>
    )
}

type PropsType = {
    imgName: string,
    name: string
}

const TechStackCard = ({imgName, name}: PropsType ) => {
    return (
        <GlareCard className="flex flex-col gap-3 items-center justify-center">
            <Image
                className="w-20 relative inset-0 object-cover"
                src={`/${imgName}`}
                alt={name}
                width={80}
                height={80}
            />
            <div className="text-lg">
                {name}
            </div>
        </GlareCard>
    )
}