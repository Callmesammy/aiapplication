import Image from "next/image";
import Auth from "./auth/page";

export default function Home() {
  return (
    <div className=" w-full h-full flex items-center justify-center px-3 ">
      <Image src="/ai.avif" alt="ai image " fill className=" object-fill opacity-25"/>
      <Auth/>
    </div>
  );
}
