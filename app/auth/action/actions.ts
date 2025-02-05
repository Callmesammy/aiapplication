"use server"

import { createClient } from "@/utils/supabase/server";
import { formSchemes } from "../singup-account";
import { z } from "zod";
import { formSchema } from "../../login/login-account";

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

export async function loginAc (formData: z.infer<typeof formSchema>): Promise<formItems>{
    const supabase = await createClient()
    
    const data = {
        email: formData.email as string,
        password: formData.password as string,
    }

    const {data: loginData, error} = await supabase.auth.signInWithPassword(data); 

    return {
        data: loginData || error,
        success: !error,
        error: error?.message || "Login successfull"
    }

}

export async function signOut (){
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()
    if(error){
    
    }


}