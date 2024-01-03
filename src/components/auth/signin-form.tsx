"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import {
  signInFormValidation,
  type SignInFormValidation,
} from "@/lib/validators/signin-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { trpc } from "@/trpc/client";

export default function SignInForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const origin = searchParams.get("origin");

  // 1. Define your form.
  const form = useForm<SignInFormValidation>({
    resolver: zodResolver(signInFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: signIn, isLoading: isSigningin } =
    trpc.auth.signIn.useMutation({
      onSuccess: async () => {
        toast.success("Signed in successfully");

        router.refresh();

        if (origin) {
          router.push(`/${origin}`);
          return;
        }

        router.push("/");
      },
      onError: (err: any) => {
        if (err.data?.code === "UNAUTHORIZED") {
          toast.error("Invalid email or password.");
        }
      },
    });

  // 2. Define a submit handler.
  function onSubmit(values: SignInFormValidation) {
    signIn({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label flex ">Email</FormLabel>
              <FormControl>
                <Input placeholder="Eg: myemail@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-between">
                Password
                <Link href="/forgot-password" className="text-blue-500">
                  Forgot password?
                </Link>
              </FormLabel>

              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSigningin}>
          {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  );
}
