import Image from "next/image"
import Link from "next/link"
import { BiChevronDown } from "react-icons/bi"






export default function UserNav() {






    return (
        <nav className="w-full flex items-center justify-between gap-10 px-[2%] md:px-[4%] py-6 bg-background border-b border-border">
            <Image src={"/logo.svg"} alt="logo" width={100} height={100} className="w-[50px] h-[50px] md:w-[73px] md:h-[73px]" />
            <div className="border-l border-border px-2 md:px-6 flex items-center gap-2 md:gap-4">
                <button className="flex items-center gap-2 md:gap-4">
                    <div className="flex flex-col gap-1 md:gap-2 items-start">
                        <p className="font-medium text-sm md:text-xl text-foreground flex items-center gap-2">Coiton <Image src={"/blue-tick.svg"} alt="icon" height={100} width={100} className="w-[22px] h-[21px]" /></p>
                        <p className="text-xs md:text-lg font-normal text-gray-500 dark:text-gray-300">0x742d...f44e</p>
                    </div>
                    <BiChevronDown className="text-[20px] md:text-[25px] text-foreground" />
                </button>
                <Link href={"/"}><button><Image src={"/user-icon.svg"} alt="button" height={100} width={100} className="w-[42px] h-[42px]" /></button></Link>
            </div>
        </nav>
    )
}