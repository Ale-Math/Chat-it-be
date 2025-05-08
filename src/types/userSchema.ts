import { z } from "zod";

export const userSignupSchema = z.object({
    name:     z.string()
                .max(32, {message: "Name must not be more than 32 characters."})
                .min(3, {message: "Name must be 3 or more characters long."}),
    email:    z.string()
                .email({message: "Invalid email address."}),
    country: z.string()
              .max(60, {message: "Country must not be more than 60 characters."})
              .min(2, {message: "Country must be 2 or more characters long."}),
    password: z.string()
                .max(32, {message: "Password must not be more than 32 characters."})
                .min(3, {message: "Password must be 3 or more characters long."})
})

export const userSigninSchema = z.object({
    email:    z.string()
                .email({message: "Invalid email address."}),
    password: z.string()
                .max(32, {message: "Password must not be more than 32 characters."})
                .min(3, {message: "Password must be 3 or more characters long."})
})