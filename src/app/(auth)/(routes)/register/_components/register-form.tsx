/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React from "react";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Zod schema
const registerFormSchema = z
  .object({
    fullName: z.string().min(3, {
      error: "Full name must be at least 3 characters",
    }),
    email: z.email(),
    password: z.string().min(6, {
      error: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
      error: "Passwords does not match",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export function RegisterForm() {
  const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);

  // Define form
  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // on submit the form
  const handleSubmit = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader className="text-center pb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Register</h1>
        <p className="text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Sign in here
          </a>
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        <Form {...registerForm}>
          <form
            onSubmit={registerForm.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={registerForm.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-900"
                  >
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900"
                  >
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="password"
                    className="text-sm font-medium text-gray-900"
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={registerForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div>
                      <Input type="password" {...field} />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) =>
                  setAcceptTerms(checked as boolean)
                }
              />
              <Label htmlFor="terms" className="text-sm text-gray-700">
                I accept the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Terms and Conditions
                </a>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium mt-6"
              disabled={!acceptTerms}
            >
              Sign up
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
