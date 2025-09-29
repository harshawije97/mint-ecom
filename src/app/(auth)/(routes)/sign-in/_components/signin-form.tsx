/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// define the form schema
const signInFormSchema = z.object({
  email: z.email(),
  password: z.string().min(1, { error: "Password is required" }),
});

function SignInForm() {
  const [acceptTerms, setAcceptTerms] = React.useState<boolean>(false);
  // define the form
  const signInForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof signInFormSchema>) => {
    console.log(value.email, value.password);
  };

  return (
    <>
      <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
        <CardHeader className="text-center pb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Sign in</h1>
          <p className="text-sm text-gray-600 mt-2">
            Don&apos;t have an account yet?{" "}
            <a
              href="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign up here
            </a>
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <Form {...signInForm}>
            <form
              onSubmit={signInForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={signInForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="text-sm font-medium text-gray-900"
                      htmlFor="email"
                    >
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={signInForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="text-sm font-medium text-gray-900"
                      htmlFor="password"
                    >
                      Password
                    </FormLabel>
                    <FormControl>
                      <>
                        <Input type="password" {...field} />
                        <FormMessage />
                      </>
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2 mt-3">
                <Checkbox
                  id="remember"
                  checked={acceptTerms}
                  onCheckedChange={(checked) =>
                    setAcceptTerms(checked as boolean)
                  }
                />
                <Label htmlFor="remember" className="text-sm text-gray-700">
                  Remember me
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium mt-6"
              >
                Sign up
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}

export default SignInForm;
