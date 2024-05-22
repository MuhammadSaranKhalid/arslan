// 'use client'
// import React, { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { useForm } from 'react-hook-form'
// import Head from 'next/head'
// import useUserInfoStore from '@/zustand/userStore'
// import useApi from '@/hooks/useApi'
// import FormContainer from '@/components/FormContainer'
// import Message from '@/components/Message'
// import * as z from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { Form } from '@/components/ui/form'
// import CustomFormField, { FormButton } from '@/components/ui/CustomForm'

// const Page = () => {
//   const router = useRouter()
//   const { userInfo } = useUserInfoStore((state) => state)

//   const FormSchema = z.object({
//     email: z.string().email(),
//   })

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       email: '',
//     },
//   })

//   function onSubmit(values: z.infer<typeof FormSchema>) {
//     postApi?.mutateAsync(values)
//   }
//   const postApi = useApi({
//     key: ['forgot-password'],
//     method: 'POST',
//     url: `auth/forgot-password`,
//   })?.post

//   useEffect(() => {
//     postApi?.isSuccess && form.reset()
//     // eslint-disable-next-line
//   }, [postApi?.isSuccess, form.reset])

//   useEffect(() => {
//     userInfo.id && router.push('/')
//   }, [router, userInfo.id])

//   return (
//     <FormContainer title='Forgot Password'>
//       <Head>
//         <title>Forgot</title>
//         <meta property='og:title' content='Forgot' key='title' />
//       </Head>
//       {postApi?.isSuccess && <Message value={postApi?.data?.message} />}
//       {postApi?.isError && <Message value={postApi?.error} />}

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
//           <CustomFormField
//             form={form}
//             name='email'
//             label='Email'
//             placeholder='Enter email'
//           />

//           <FormButton
//             loading={postApi?.isPending}
//             label='Send'
//             className='w-full'
//           />
//         </form>
//       </Form>

//       {postApi?.isSuccess && (
//         <div className='text-green-500 text-center mt-5'>
//           Please check your email to reset your password
//         </div>
//       )}
//     </FormContainer>
//   )
// }

// export default Page

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="w-full lg:grid flex items-center justify-center h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        {/* <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" variant="default" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div> */}

        <Card className="mx-auto min-w-lg">
          <CardHeader className="text-center min-w-md px-10">
            <CardTitle className="text-2xl">Forgot Password</CardTitle>
            <CardDescription>
              Enter your email below to change your change
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              {/* <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div> */}
              <Button type="submit" className="w-full">
                Send Email
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="#" className="underline">
                Sign up
              </Link>
            </div> */}
          </CardContent>
        </Card>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/Forgot-Password.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover bg-white"
        />
      </div>
    </div>
  );
}
