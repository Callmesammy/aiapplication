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
        icons: <IoMdHome />,
        link: "/dashboard"
    },
    {
        label: "Discover", 
        icons: <IoNavigateCircle />,
        link: "/discover"
    }, {
        label: "Create Podcast", 
        icons: <MdPodcasts />,
        link: "/podcast"
    }, {
        label: "My Profile", 
        icons: <FaUser />,
        link: "/profile"
    },
]

const Sidebar = () => {
    const pathname = usePathname()
    const handleclick=(url: string)=>{
        window.location.href =url;       
    }
    return ( 
        <div className="bg-gray-900/45 w-full h-full justify-center  pt-5 px-5 space-y-6">
         <Link href="/dashboard" onClick={()=>handleclick("/dashboard")} className="w-full flex" >
            <CiCloudRainbow className="size-8 space-x-3  text-orange-600"/>
            <h1 className="text-2xl font-bold"> Cloud 16</h1>
            hu</Link>
            <div className="flex flex-col space-y-3 ">
                {sideItems.map((input, keys)=>{
              const isActive= pathname ===input.link || pathname.startsWith(`${input.link}/`)
                    return(
                        <div key={keys} className="w-full h-full ">
                            <Link href={input.link} className={cn("flex w-full h-full space-x-3 ", isActive && "bg-red-300 text-muted-foreground rounded-md")}>
                               {input.icons}   <h1 className="text-secondary text-md ">{input.label}</h1>
                            </Link>

                        </div>
                    )
                })}

            </div>
        </div>
     );
}
 
export default Sidebar;