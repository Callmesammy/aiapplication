"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
 


const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  category: z.string().min(6, {
    message: "You must select your category here!"
  }),
  description: z.string().min(10, {
    message: "Describe what you are intending to vlog"
  }), 
  ai: z.string().min(6,{
    message: "enter the text to be genrated by ai here"
  })
})

const Discover = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      ai: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full h-full  px-4 overflow-hidden">
        <h1 className=" font-bold text-lg text-pretty">Create a Podcast</h1>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Podcast Title</FormLabel>
              <FormControl>
                <Input placeholder="Title of your podcast" {...field} className="focus-visible:border-orange-500 " />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
 <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Podcast Title</FormLabel>
              <FormControl>
                <Textarea rows={5}  {...field} placeholder="Enter the descrption of your podcast here "/> 
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-4"/> 
        <p>Ai prompt to generate podcast</p>

        <FormField
          control={form.control}
          name="ai"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea rows={3}  {...field} placeholder="enter ai auto sugestion text here "/> 
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
 <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select imag</FormLabel>
              <FormControl>
                <Input   type="file" id="piture"  {...field} className="focus-visible:border-orange-500 h-[60px] items-center flex" />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )

}

export default Discover;