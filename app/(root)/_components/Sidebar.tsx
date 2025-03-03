"use client"

import Link from "next/link";
import { CiCloudRainbow } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { IoNavigateCircle } from "react-icons/io5";
import { MdPodcasts } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";






const sideItems=[
    {
        label: "Home", 
        icons: <IoMdHome className="size-6 text-secondary group-hover:rotate-45 duration-500 ease-in-out"/>,
        link: "/"
    },
    {
        label: "Discover", 
        icons: <IoNavigateCircle className="size-6 text-secondary group-hover:-rotate-45 duration-500 ease-in-out"/>,
        link: "/discovery"
    }, {
        label: "Create Podcast", 
        icons: <MdPodcasts className="size-6 text-secondary group-hover:rotate-45 duration-500 ease-in-out"/>,
        link: "/podcast"
    }, {
        label: "My Profile", 
        icons: <FaUser className="size-6 text-secondary group-hover:scale-125 duration-500 ease-in-out"/>,
        link: "/profile"
    },
]

const Sidebar = () => {



    const pathname = usePathname()
    const handleclick=(url: string)=>{
        window.location.href =url;       
    }
    return ( 
        <div className="sticky w-[18rem] bg-gray-900/45 min-h-screen justify-center  pt-5 px-5 space-y-6">
         <Link href="/dashboard" onClick={()=>handleclick("/dashboard")} className="w-full flex " >
            <CiCloudRainbow className="size-8 space-x-3  text-orange-600"/>
            <h1 className="text-2xl font-bold"> Cloud 16</h1>
            hu</Link>
            <div className="flex flex-col space-y-7 pt-6 ">
                {sideItems.map((input, keys)=>{
              const isActive= pathname ===input.link || pathname.startsWith(`${input.link}/`)
                    return(
                        <div key={keys} className="w-full h-full group">
                            <Link href={input.link} className={cn("flex w-full h-full space-x-3 hover:bg-muted-foreground/10 p-2 rounded ", isActive && "bg-muted-foreground/15 text-muted-foreground rounded-md p-2 font-bold")}>
                               {input.icons}   <h1 className="text-secondary text-md group-hover:scale-105 duration-500 ease-in-out flex">{input.label}</h1>
                            </Link>

                        </div>
                    )
                })}

            </div>
        </div>
     );
}
 
export default Sidebar;