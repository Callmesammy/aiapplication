import { redirect } from "next/navigation";
import Sidebar from "./_components/Sidebar";
import { createClient } from "@/utils/supabase/server";

interface DashLayout{
    children: React.ReactNode;
}


export default async function DashLayout ({
    children
}: DashLayout) {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      redirect('/auth')
    }
   
    return ( 
        <div className="">
            <section className="w-[18rem] h-full fixed">

                     <Sidebar/>

            </section>
        <main className="flex w-full h-full pt-10 pl-[19rem]">{children}</main>
        </div>
     );
}
 
