import { z } from "zod";

const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid Email" }),
    phone: z.string().refine((value) => {
      const phoneRegex = /^\+\d{9,15}$/;
      return phoneRegex.test(value);
    }, "Invalid phone number format"),
    username: z
      .string()
      .min(3, { message: "Username must contain at least 3 character(s)" }),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 character(s)" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default SignUpSchema;
