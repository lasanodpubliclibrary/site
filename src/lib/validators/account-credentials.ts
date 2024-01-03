import { z } from "zod";

export const SignUpAuthCredentialsValidator = z.object({
  name: z
    .string()
    .min(1, {
      message: "Your first name must be at least three characters long.",
    })
    .max(17, {
      message: "Your first name must NOT exceed 17 characters long.",
    }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TSignUpAuthCredentialsValidator = z.infer<
  typeof SignUpAuthCredentialsValidator
>;
export const SignInAuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export type TSignInAuthCredentialsValidator = z.infer<
  typeof SignInAuthCredentialsValidator
>;
