import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { CarouselItemn } from "./_components/crousel-item"

 export default async function Dashboard () {
      const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }
    return (
        <div className="w-full h-full flex pt-4 flex-col px-3 ">
          <p className="font-bold px-3">Trending Podcasts</p>
           <div className="flex px-3 w-full h-full flex-col">
            <CarouselItemn/>
            <div className="pt-4 px-3">Recent Podcast</div>
           </div>
        </div>
     );
}
 
