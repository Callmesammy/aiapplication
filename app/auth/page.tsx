"use client"

import Link from "next/link";
import { useState } from "react";
import { CiCloudRainbow } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Login } from "./login-account";

const Auth = () => {
    const [formhere, setFormher] = useState("login")
    return (
        <div className="flex w-full   items-center justify-center pt-8 bg-white/10  h-full">
            <div className="w-[350px]  h-[25rem] shadow-lg flex px-7 justify-center bg-black z-20 rounded-lg flex-col space-y-3 ">
            <span className="flex">  
            <CiCloudRainbow className="size-8 space-x-3  text-orange-600"/>
            <h1 className="text-2xl font-bold"> Cloud 16</h1>
            hu
            </span>
            <p className="text-muted-foreground text-sm">to continue with this podcast </p>
            <div className="flex space-x-4 "> 
            <Link href="" className="p-2 border rounded border-muted-foreground hover:bg-gray-800 cursor-pointer"><FcGoogle className="size-7 "/>
            </Link>
            <Link href="" className="p-2 border rounded border-muted-foreground hover:bg-gray-800 cursor-pointer"><FaGithubAlt className="size-7"/>

            </Link>
            </div>
            <div className="pt-3 flex  ">
                <h1 className="flex font-bold text-pretty text-lg">
            {formhere === "login" ? " ": "signup"} </h1>
                {formhere === "login" && <><Login/></>}
                {formhere === "signup" && <>Signup</>}

            </div>
            </div>
        </div>
      );
}
 
export default Auth;