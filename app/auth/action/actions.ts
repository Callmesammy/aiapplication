"use server"

import { createClient } from "@/utils/supabase/server";
import { formSchemes } from "../singup-account";
import { z } from "zod";

interface formItems {
    success: boolean | null, 
    error: null | string,
    data: unknown | null, 
}

export  async function  signUp (formdata: z.infer<typeof formSchemes>): Promise<formItems>{

    const supabase = await createClient(); 

    const data ={
         email: formdata.email as string,
        password: formdata.password as string, 
    }
    


    const {data: signupData, error } = await supabase.auth.signUp(data);

    return {
        success: !error,
        error: error?.message || "something went wrong", 
        data: signupData || error,
    }
}