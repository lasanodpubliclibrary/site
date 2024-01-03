import * as z from "zod";

export const signUpFormValidation = z
  .object({
    name: z
      .string()
      .min(1, {
        message: "Your first name must be at least three characters long.",
      })
      .max(17, {
        message: "Your first name must NOT exceed 17 characters long.",
      }),

    email: z.string().email(),

    password: z
      .string()
      .min(7, { message: "Password must be at least 7 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });

export type SignUpFormValidation = z.infer<typeof signUpFormValidation>;
