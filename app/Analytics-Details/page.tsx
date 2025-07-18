import AnalyticsChart from "@/components/analytics/AnalyticsChart";
import UserNav from "@/components/analytics/UserNav";
import UserStats from "@/components/analytics/UserStats";
import { SocialLinks } from "@/utils/interface";
import { BsDiscord, BsGlobe, BsTelegram, BsTwitterX } from "react-icons/bs";





export default function Page() {


    const projectTags: string[] = ["DAO", "NFT", "NFT marketplace"]

    const projectDescription: string = "Need a marketplace for your infrastructure? This is the perfect..."

    const socialLinks: SocialLinks[] = [
        {
            link: "",
            icon: <BsGlobe size={20} />,
        },
        {
            link: "",
            icon: <BsDiscord size={20} />,
        },
        {
            link: "",
            icon: <BsTelegram size={20} />,
        },
        {
            link: "",
            icon: <BsTwitterX size={20} />
        }
    ]



    return (
        <div className="min-h-screen bg-background text-foreground pb-10 font-satoshi">
            <UserNav />
            <UserStats
                projectTags={projectTags}
                projectDescription={projectDescription}
                socialLinks={socialLinks}
            />
            <section className="w-full max-w-[1400px] mx-auto mt-[50px] px-4 md:px-0 ">
                {/* Nav buttons */}
                <div className="w-full flex items-center gap-10 border-b-2 border-border pb-2">
                    <button
                        className={`text-xl font-normal relative text-[#988C8C] before:content-[''] before:absolute before:bottom-[-8px] before:bg-[#E0FFB0] before:h-[3px] hover:before:w-full before:transition-all before:duration-200 before:ease-in-out before:w-0`}
                    >
                        Home
                    </button>
                    <button
                        className={`text-xl font-normal relative text-[#988C8C] before:content-[''] before:absolute before:bottom-[-8px] before:bg-[#E0FFB0] before:h-[3px] hover:before:w-full before:transition-all before:duration-200 before:ease-in-out before:w-0`}
                    >
                        Analytics
                    </button>
                </div>
                {/* Section content */}
                <div className="w-full rounded-lg border-border border mx-auto mt-[30px] h-[179px] bg-[url('/item-image.svg')] bg-no-repeat bg-center bg-cover flex items-center px-[3%]">
                    <h1 className="font-bold text-2xl md:text-[32px] text-foreground">DAO Voter</h1>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-10 justify-between items-start mt-[70px]">
                    <div className="w-full md:max-w-[190px] flex-col items-center md:items-start gap-5">
                        <div className="flex flex-col items-center md:items-start gap-8">
                            <h2 className="text-foreground text-2xl md:text-[32px] font-medium">Participants</h2>
                            <div className="flex items-center gap-4">
                                <div className="w-[85px] h-[85px] flex flex-col items-start justify-center gap-2">
                                    <p className="font-normal text-lg text-[#EBFFCB]">Active</p>
                                    <span className="border border-border rounded-[10px] w-[55px] h-[55px] md:w-[85px] md:h-[50px] text-base md:text-[28px] font-medium text-[#EBFFCB] flex items-center justify-center">543</span>
                                </div>
                                <div className="w-[85px] h-[85px] flex flex-col items-center justify-center gap-2">
                                    <p className="font-normal text-lg text-[#988C8C]">Inactive</p>
                                    <span className="rounded-[10px] w-[55px] h-[55px] md:w-[85px] md:h-[50px] text-base md:text-[28px] font-medium text-[#988C8C] flex items-center justify-center">543</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[#E0FFB0] font-normal text-2xl mt-[14px] text-center md:text-left">May 20 - May 31</p>
                    </div>
                    <div className="w-full max-w-[868px]">
                        <AnalyticsChart/>
                    </div>
                </div>
            </section>
        </div>
    )
}