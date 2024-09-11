"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import CustomFromField from "@/components/CustomFormField"

export enum FromFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  RADIO = "radio",
  CHECKBOX = "checkbox",
  SWITCH = "switch",
  DATE = "date",
  TIME = "time",
  DATETIME = "datetime",
  FILE = "file",
  IMAGE = "image",
  RATING = "rating",
  SLIDER = "slider",
  RANGE = "range",
  CURRENCY = "currency",
  PHONE = "phone",
  EMAIL = "email",
  URL = "url",
  PASSWORD = "password",
  SEARCH = "search",
  COLOR = "color",
  HIDDEN = "hidden",
}
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})


function PatientForm() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
    }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋 </h1>
          <p className="text-dark-700">Schedule your first appoinment</p>
        </section>
        
        <CustomFromField 
          formType = {FromFieldType.INPUT}
          control={form.control} 
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="User Icon"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PatientForm