import { redirect } from "next/navigation";
import Sidebar from "./_components/Sidebar";
import { createClient } from "@/utils/supabase/server";
import RightBar from "./_components/right-side";

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
        <div className="w-full h-full flex">   
            <section className="w-[18rem] h-full fixed">

                     <Sidebar/>

            </section>
         <div className="w-full h-full flex">  
        <main className="flex w-[77rem] h-full  pl-[18rem]">{children} </main>
        <section className="w-[15rem] h-full  bg-red-400 ">

<RightBar/>

</section>
        </div>
        </div>
     );
}
 
