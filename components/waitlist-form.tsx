"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
})

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
   
    const userData = values ;
    // Simulate API call
    const response = await fetch("/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // We are sending JSON data
      },
      body: JSON.stringify(userData), // Convert data to JSON format



    })

    
    

    setIsSubmitting(false)
    form.reset()

    toast({
      title: "You've joined the waitlist!",
      description: "We'll notify you when we launch.",
    })
  }

  return (
    <section id="waitlist" className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join our waitlist</h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know when we launch. No spam, just important updates.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} className="h-12 bg-background border-border" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="h-12 px-8" disabled={isSubmitting}>
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </Button>
            </form>
          </Form>

          <p className="text-sm text-muted-foreground mt-4">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      <Toaster />
    </section>
  )
}

