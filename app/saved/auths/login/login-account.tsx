"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { loginAc } from "../action/actions"


export const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "details must be entered correctly"
  })
})

export function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
       setLoading (true)
    try{
 const {success, error} = await loginAc(values)
       if(!success){
        toast.error(String(error))
       }else{
        toast.success("Login successfully")
        router.push("/root")

       }
    }catch(error){
      console.log(error)

    }finally{
      setLoading(false)
    }
      
   
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[300px]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input required type="email" disabled={loading} placeholder="enter email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input required type="password" disabled={loading} placeholder="enter email" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading} className="bg-orange-600 w-full font-bold text-pretty">Login {loading && <Loader2 className="animate-spin"/>} </Button>
      </form>
    </Form>
  )
}
