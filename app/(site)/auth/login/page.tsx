"use client";
import { useState, useEffect } from "react";
import useUserInfoStore from "@/zustand/userStore";
import useApi, { api } from "@/hooks/useApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import Link from "next/link";
import { FormButton } from "@/components/ui/CustomForm";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Cookies from "js-cookie";

export default function Dashboard() {
  const router = useRouter();

  // const { updateUserInfo } = useUserInfoStore();

  const [postApiLoading, setPostApiLoading] = useState(false);

  const FormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setPostApiLoading(true);
      const response = await api("POST", "auth/login", values);
      const {
        token: { accessToken },
        userEntity: {
          _id,
          email,
          role,
          fullName,
          isAdminVerified,
          isOnline,
          isPasswordChanged,
          isTwoStepVerification,
          isUserVerified,
          companyName,
          fcmToken,
        },
      } = response;
      // updateUserInfo({
      //   id: _id,
      //   email,
      //   accessToken,
      //   fullName,
      //   role,
      //   isAdminVerified,
      //   isOnline,
      //   isPasswordChanged,
      //   isTwoStepVerification,
      //   isUserVerified,
      //   companyName,
      //   fcmToken,
      // });
      setPostApiLoading(false);
      toast.success("Logged In Successfully", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
      console.log(response.userEntity);
      Cookies.set("accessToken", accessToken);
      Cookies.set("user", JSON.stringify(response.userEntity));

      router.push("/dashboard");
    } catch (error: any) {
      setPostApiLoading(false);
      toast.error("Event has been created", {
        description: "Sunday, December 03, 2023 at 9:00 AM",
      });
    }
  };

  return (
    <div>
      <div className="w-full lg:grid flex items-center justify-center h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <Card className="mx-auto max-w-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...form.register("email")}
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
                      href="/auth/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    {...form.register("password")}
                    id="password"
                    type="password"
                    required
                  />
                </div>
                {/* <Button
                type="submit"
                className="w-full"
                onClick={form.handleSubmit(onSubmit)}
              >
                Login
              </Button> */}
                <FormButton
                  loading={postApiLoading}
                  label="Sign In"
                  className="w-full"
                  onClick={form.handleSubmit(onSubmit)}
                />
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
            </CardContent>
          </Card>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="/login.jpg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}
