"use client";

import * as z from 'zod';

import { LegacyRef, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader } from "lucide-react";

import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    text: z.string().min(1),
});

type EmailFormValues = z.infer<typeof formSchema>;

const EmailForm = () => {

    const formRef: LegacyRef<HTMLFormElement> = useRef(null);
    const [loading, setLoading] = useState<boolean>(false);

    const toastDescriptionMessage = 'Thank you for contacting me. i will get back to you as soon as possible.';

    const form = useForm<EmailFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            text: ''
        }
    });

    const onSubmit = async (data: EmailFormValues) => {
        setLoading(true);

        emailjs.sendForm('service_fawlreg', 'template_rdpimta', formRef.current as HTMLFormElement, 'j-670SRgWuLFy9LyZ')
            .then((response) => {

                toast({
                    variant: 'default',
                    description: toastDescriptionMessage,
                    className: 'bg-green-700 text-white'
                });

                form.reset();
            })
            .catch(() => {
                toast({
                    variant: 'destructive',
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with the process."
                });
            }).finally(() => {
                setLoading(false);
            })
    };

    return (
        <Form {...form}>
            <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-5 flex flex-col gap-8 sm:w-full w-full"
            >
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>

                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder='Enter Your Name'
                                    className="bg-neutral-200 focus:bg-neutral-50 text-neutral-800 border-none shadow-md focus:outline-none"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>

                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder='Enter Your Email Address'
                                    className="bg-neutral-200 focus:bg-neutral-50 text-neutral-800 border-none shadow-md focus:outline-none"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='text'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Message</FormLabel>

                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder='Type Your Message.'
                                    className='bg-neutral-200 focus:bg-neutral-50 text-neutral-800 border-none shadow-md focus:outline-none'
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    disabled={loading}
                    className="ml-auto"
                    type='submit'
                >
                    {loading && <Loader className='mr-2 h-4 w-4 animate-spin' />}
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default EmailForm;