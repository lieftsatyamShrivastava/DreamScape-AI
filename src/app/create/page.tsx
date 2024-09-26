"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useSession } from 'next-auth/react'


const formSchema = z.object({
    prompt: z.string().min(7, { message: "Prompt must be at least 7 characters long!" }),
})

export default function Page() {
    const {data: session} = useSession();
    const [outputImg, setOutputImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {},
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true); // Start loading

        try {
            const response = await fetch("/api/image", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...values, email: session?.user.email}),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.url) {
                setOutputImage(data.url);
            } else {
                throw new Error("No image URL found in the response");
            }

        } catch (error) {
            console.error("Error generating image:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    return (
        <div className='w-full h-dvh flex justify-center items-center pt-[64px] flex-col'>
            <div className='w-full border border-blue-400 p-3'>
                <h1 className='text-center font-bold text-white text-4xl'>bena</h1>
                <p className='text-white/60 text-center'>
                    Turn Imagination into Art with Just a Few Words For Free
                </p>
            </div>

            <div className='flex border border-green-500 w-full gap-3 h-full'>
                <div className='__form flex-[2] border border-yellow-400 flex justify-start items-center flex-col'>
                    <p>Type here</p>
                    <div className="flex gap-2 w-full">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="w-full flex gap-2"
                            >
                                <FormField
                                    control={form.control}
                                    name="prompt"
                                    render={({ field }) => (
                                        <FormItem className="w-full max-w-full lg:max-w-[70%]">
                                            <FormControl>
                                                <Input
                                                    placeholder="A car in space"
                                                    className="w-full transition-all border-white"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Generating..." : "Generate"}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>

                <div className='__output flex-[1] border bg-white/5 border-yellow-400'>
                {outputImg ? (
            <Image
              alt="output"
              className="w-full h-full object-contain"
              src={outputImg}
              width={300}
              height={300}
            />
          ) : (
            <>
              <div className="w-full h-full flex justify-center items-center text-white/70 text-center p-3">
                Enter your prompt and hit generate!
              </div>
            </>
          )}
                </div>
            </div>
        </div>
    )
}
