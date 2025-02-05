import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

 export default async function Dashboard () {
      const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }
    return (
        <div className="w-full h-full flex">
            wellcome here 
        </div>
     );
}
 
