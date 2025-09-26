import { GlareCard } from "./ui/glare-card"
import { Tabs } from "./ui/tabs"

export default function TechStack() {
    const tabs = [
        { 
            label: "Languages", 
            content: (
                <div className="flex flex-wrap gap-5">
                    <GlareCard className="flex flex-col gap-3 items-center justify-center">
                        <img
                        className="w-20 relative inset-0 object-cover"
                        src="/ts.svg"
                        />
                        <div className="text-lg">
                            Typescript
                        </div>
                    </GlareCard>
                    <GlareCard className="flex flex-col gap-3 items-center justify-center">
                        <img
                        className="w-20 relative inset-0 object-cover"
                        src="/js.svg"
                        />
                        <div className="text-lg">
                            Javascript
                        </div>
                    </GlareCard>
                    <GlareCard className="flex flex-col gap-3 items-center justify-center">
                        <img
                        className="w-20 relative inset-0 object-cover"
                        src="/c++.svg"
                        />
                        <div className="text-lg">
                            C++
                        </div>
                    </GlareCard>
                </div> 
            )
        },
        { 
            label: "Frontend", 
            content: (
                <div className="flex flex-wrap gap-5">
                    <GlareCard className="flex flex-col gap-3 items-center justify-center">
                        <img
                        className="w-20 relative inset-0 object-cover"
                        src="/react.svg"
                        />
                        <div className="text-lg">
                            React.Js
                        </div>
                    </GlareCard>
                    <GlareCard className="flex flex-col gap-3 items-center justify-center">
                        <img
                        className="w-20 relative inset-0 object-cover"
                        src="/next.svg"
                        />
                        <div className="text-lg">
                            Next.Js
                        </div>
                    </GlareCard>
                    <GlareCard className="flex flex-col gap-3 items-center justify-center">
                        <img
                        className="w-20 relative inset-0 object-cover"
                        src="/tailwind.svg"
                        />
                        <div className="text-lg">
                            Tailwind Css
                        </div>
                    </GlareCard>
                    <GlareCard className="flex flex-col gap-3 items-center justify-center">
                        <img
                        className="w-20 relative inset-0 object-cover bg-white"
                        src="/shadcn.svg"
                        />
                        <div className="text-lg">
                            Shadcn
                        </div>
                    </GlareCard>
                </div>
            )
        },
        { 
            label: "Backend", 
            content: (
                <div className="text-sm">
                    Node.js • Express • FastAPI
                </div> 
            )
        },
        { 
            label: "Database", 
            content: (
                <div className="text-sm">
                    PostgreSQL • MongoDB • Redis
                </div> 
            )
        },
        { 
            label: "Tools", 
            content: (
                <div className="text-sm">
                    Git • Docker • Turbo • ESLint
                </div> 
            )
        },
        { 
            label: "Cloud", 
            content: (
                <div className="text-sm">
                    AWS • Vercel • Cloudflare
                </div> 
            )
        }
    ]

    return (
        <div className="flex justify-center">
            <Tabs tabs={tabs} />
        </div>
    )
}