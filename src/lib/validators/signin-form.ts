import * as z from "zod";

export const signInFormValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignInFormValidation = z.infer<typeof signInFormValidation>;
