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
import { toast } from "sonner"
import {  redirect } from "next/navigation"
import { Loader2 } from "lucide-react"
import { signUp } from "./action/actions"

export const formSchemes = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "password must be 6 characters long"
  }).regex( /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,{
    message: "password must contain special characters"
  })
})

export function Signup() {
    const [loading, setLoading] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchemes>>({
    resolver: zodResolver(formSchemes),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchemes>) {
    setLoading (true)
  const {error,success} = await signUp(values)
  if(!success){
    toast.error(String(error))
  } else{
    toast.success("Signup Successfully")
    redirect("/")
  }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-[300px]">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" disabled={loading} required placeholder="enter email" {...field} />
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
              <FormLabel>Enter Password</FormLabel>
              <FormControl>
                <Input disabled={loading} type="password" required placeholder="enter password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={loading} className="bg-orange-600 w-full font-bold text-pretty">Signup {loading && <Loader2 className="animate-spin"/>} </Button>
      </form>
    </Form>
  )
}
