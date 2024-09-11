"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import CustomFromField from "@/components/CustomFormField"
import SubmitButton from "./submitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/userFormValidation"

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
  PHONE_INPUT = "phone",
  EMAIL = "email",
  URL = "url",
  PASSWORD = "password",
  SEARCH = "search",
  COLOR = "color",
  HIDDEN = "hidden",
}
 



function PatientForm() {
  const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof UserFormValidation>>({
      resolver: zodResolver(UserFormValidation),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof UserFormValidation>) {
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
        <CustomFromField 
          formType = {FromFieldType.INPUT}
          control={form.control} 
          name="email"
          label="Email"
          placeholder="john.doe@email.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email Icon"
        />
        <CustomFromField 
          formType = {FromFieldType.PHONE_INPUT}
          control={form.control} 
          name="phone"
          label="Phone number"
          placeholder="(555) 555-5555"
        />

        <SubmitButton isLoading={isLoading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm