import Image from "next/image";
import Auth from "./page";

export default function Login() {
  return (
    <div className=" w-full h-full flex items-center justify-center px- ">
      <Image src="/ai.avif" alt="ai image " fill className=" object-fill opacity-25"/>
      <Auth/>
    </div>
  );
}
