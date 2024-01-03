"use client";

import {
  SignUpFormValidation,
  signUpFormValidation,
} from "@/lib/validators/signup-form";
import { toast } from "sonner";
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
import { ZodError } from "zod";
import { useRouter } from "next/navigation";

/*import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";*/

export default function SignUpForm() {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<SignUpFormValidation>({
    resolver: zodResolver(signUpFormValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isLoading: isSigningUp } =
    trpc.auth.createPayloadUser.useMutation({
      onError: (err) => {
        if (err.data?.code === "CONFLICT") {
          toast.error("This email is already in use. Sign in instead?");

          return;
        }

        if (err instanceof ZodError) {
          toast.error(err.issues[0].message);

          return;
        }

        toast.error("Something went wrong. Please try again.");
      },
      onSuccess: ({ email }) => {
        toast.success(`Verification email sent to ${email}.`);
        router.push(`/verify-email?to=${email}`);
      },
    });

  // 2. Define a submit handler.
  async function onSubmit(values: SignUpFormValidation) {
    mutate({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        autoComplete="off"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex">
                Name <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Eg: Cabdirisaaq" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex">
                Email <span className="text-red-600">*</span>
              </FormLabel>
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
              <FormLabel className="flex ">
                Password <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label flex ">
                Confirm password
              </FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={isSigningUp}>
          {form?.formState?.isSubmitting ? "Registering..." : "Sign up"}
        </Button>
      </form>
    </Form>
  );
}
