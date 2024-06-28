import React from 'react';
import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface CustomInputProps {
    form: any, 
    name: string, 
    label: string, 
    placeholder?: string, 
    type?: string
}
;
const CustomInput = ({ form, label, name, placeholder, type = 'text' }: CustomInputProps) => {
    return (
        <FormField
            control={ form.control }
            name={ name }
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>{ label }</FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input 
                                type={ type }
                                placeholder={ placeholder }
                                {...field} 
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-1' />
                    </div>                                        
                </div>
            )}
        />
    )
}

export default CustomInput
