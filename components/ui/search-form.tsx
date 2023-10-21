"use client";

import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
    searchParam: z.string().min(1)
});

type SearchFormValues = z.infer<typeof formSchema>;

const SearchForm = () => {

    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<SearchFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchParam: ''
        }
    });

    const onSubmit = (data: SearchFormValues) => {
        router.push(`/search/?searchParam=${data.searchParam}`)
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='grid sm:flex gap-x-4 gap-y-2 items-end flex-wrap' 
            >
                <FormField
                    control={form.control}
                    name='searchParam'
                    render={({ field }) => (
                        <FormItem className='bg-neutral-700 sm:w-2/5'>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder='Search Project By Title'
                                    className="bg-neutral-200 focus:bg-neutral-50 text-neutral-800 border-none shadow-md focus:outline-none w-full"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button
                    className=""
                    type='submit'
                    disabled={loading}
                >
                    {loading && <Loader className='mr-2 h-4 w-4 animate-spin' />}
                    Search
                </Button>
            </form>
        </Form>
    );
};

export default SearchForm;