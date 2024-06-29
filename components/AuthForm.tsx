"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';
import { useRouter } from "next/navigation";
import PlaidLink from './PlaidLink';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/user.actions";

const SignInFormSchema = z.object({    
    email: z.string().email({ message: "Insert a valid e-mail." }),
    password: z.string().min(8),
});

const SignUpFormSchema = z.object({    
    email: z.string().email({ message: "Insert a valid e-mail." }),
    password: z.string().min(8),    
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    address1: z.string().max(50),
    state: z.string().min(2).max(2),
    postalCode: z.string().min(3).max(6),
    dateOfBirth: z.string(),
    ssn: z.string().min(3),
    city: z.string().min(3)
});

 
const AuthForm = ({ type }: { type: 'sign-in' | 'sign-up' }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSingIn = useForm<z.infer<typeof SignInFormSchema>>({
        resolver: zodResolver(SignInFormSchema)
    });

    const formSingUp = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema)
    });

    // 1. Define your form.
    
    
    // 2. Define a submit handler.
    const onSubmitSignIn = async (values: z.infer<typeof SignInFormSchema>) => {
        setIsLoading(true);
        // console.log(values)
        try {
            const response = await signIn(values);
            if(response) router.push('/')
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const onSubmitSignUp = async (values: z.infer<typeof SignUpFormSchema>) => {
        setIsLoading(true);
        // console.log(values)
        try {
            const newUser = await signUp(values);
            setUser(newUser);           
            // if(response) router.push('/')
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link 
                    href="/" 
                    className="flex cursor-pointer items-center gap-1"
                >
                    <Image 
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='Horizon Logo'
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                </Link>

                <div className='flex flex-col gap-1 md:gap-3'>
                    <h2 className='text-24 lg:text-36 font-semibold text-gray-900'>
                        { user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up' }
                        <p className='text-base font-normal text-gray-600'>
                            { user ? 'Link your account to get started' : 'Please enter your details' }
                        </p>
                    </h2>
                </div>
            </header>

            { !!user ? (
                <div className='flex flex-col gap-4'>
                    <PlaidLink user={ user } variant="primary" />
                </div>
            ) : (
                <div className=''>

                    { type === 'sign-in' ? (
                        <Form {...formSingIn}>
                            <form onSubmit={formSingIn.handleSubmit(onSubmitSignIn)} className="space-y-4"> 
                                <CustomInput form={ formSingIn } name='email' label='Email' placeholder='Enter your email' />
                                <CustomInput form={ formSingIn } name='password' label='Password' placeholder='Enter your password' type='password' />                            
                                
                                <div className='flex flex-col gap-4'>
                                    <Button type="submit" className='form-btn'>
                                        { isLoading ? (
                                            <>
                                                <Loader2 size={20} className='animate-spin mr-2' /> Loading...
                                            </>
                                        ) : 'Sign In' }
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    ) : (
                        <Form {...formSingUp}>
                            <form onSubmit={formSingUp.handleSubmit(onSubmitSignUp)} className="space-y-4">
                                
                                <div className='grid grid-cols-2 gap-x-4 gap-y-4'>                                       
                                    <CustomInput form={ formSingUp } name='firstName' label='First Name' placeholder='ex: Jonh' />
                                    <CustomInput form={ formSingUp } name='lastName' label='Last Name' placeholder='ex: Doe' />
                                    <div className='col-span-2'>
                                        <CustomInput form={ formSingUp } name='address1' label='Address' placeholder='Enter your especific address' />
                                    </div>
                                    <div className='col-span-2'>
                                        <CustomInput form={ formSingUp } name='city' label='City' placeholder='Enter your city' />
                                    </div>
                                    <CustomInput form={ formSingUp } name='state' label='State' placeholder='ex: NY' />
                                    <CustomInput form={ formSingUp } name='postalCode' label='Postal Code' placeholder='ex: 11101' />
                                    <CustomInput form={ formSingUp } name='dateOfBirth' label='Date Of Birth' placeholder='ex: yyyy-mm-dd' type='date' />
                                    <CustomInput form={ formSingUp } name='ssn' label='SSN' placeholder='ex: 1234' />
                                </div>                               

                                <CustomInput form={ formSingUp } name='email' label='Email' placeholder='Enter your email' />
                                <CustomInput form={ formSingUp } name='password' label='Password' placeholder='Enter your password' type='password' />                            
                                
                                <div className='flex flex-col gap-4'>
                                    <Button type="submit" className='form-btn'>
                                        { isLoading ? (
                                            <>
                                                <Loader2 size={20} className='animate-spin mr-2' /> Loading...
                                            </>
                                        ) : 'Sign Up' }
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    ) }


                    <footer className='flex justify-center gap-1 pt-5'>
                        <p className='text-14 font-normal text-gray-600'>
                            { type === 'sign-in' ? "Don't have an account?" : "Alrady have an account?" }
                        </p>
                        <Link href={ type === 'sign-in' ? '/sign-up' : '/sign-in' } className='form-link'>
                            { type === 'sign-in' ? 'Sign Up' : 'Sign In' }
                        </Link>
                    </footer>
                </div>
            ) }
        </section>
    )
}

export default AuthForm;
