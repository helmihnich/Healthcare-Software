import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from 'react-hook-form'
import { FromFieldType } from './patientForm'
import Image from 'next/image'

interface CustomProps {
    formType: FromFieldType 
    control: Control<any>
    name: string
    label?: string
    placeholder?: string
    description?: string
    iconSrc?: string
    iconAlt?: string
    disabled?: boolean
    dateFormat?: string
    showTimeSelect?: boolean
    children?: React.ReactNode
    renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = ( {field, props}: {field:any; props: CustomProps} ) => {
    const { formType, iconSrc, iconAlt, placeholder } = props
    switch (formType) {
        case FromFieldType.INPUT:
            return (
                <div className='flex rounded-md border border-dark-500 bg-dark-400'>
                    {
                        iconSrc && (
                            <Image
                                src={iconSrc}
                                height={24}
                                width={24}
                                alt={iconAlt || 'icon'}
                                className='ml-2'
                            />
                        )
                    }
                    <Input
                        {...field}
                        placeholder={placeholder}
                        className='shad-input border-0'
                    />
                </div>
            )
        default:
            break;
    
    }
}

const CustomFormField = ( props: CustomProps) => {
    const { formType, control, name, label } = props

  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className='flex-1'>
              
             {formType !== FromFieldType.CHECKBOX && label &&(
                <FormLabel>{label}</FormLabel>
             )} 

             <RenderField field={field} props={props} />

             <FormMessage className='shad-error' />

            </FormItem>
            
          )}
        />
  )
}

export default CustomFormField