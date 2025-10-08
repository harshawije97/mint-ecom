/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  category: z.string(),
  description: z.string(),
});

type SettingsFormValues = z.infer<typeof formSchema>;

function SettingsForm() {
  const [loading, setLoading] = React.useState<boolean>(false);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });

  const onSubmit = async (values: SettingsFormValues) => {
    console.log({
      name: values.name,
      description: values.description,
      category: values.category,
    });
  };
  return (
    <div className="md:max-w-2xl sm:w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-rows-3"
        >
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name" className="text-sm text-gray-700">
                  Name
                </FormLabel>
                <FormControl>
                  <Input {...field} id="name" disabled={loading} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="description"
                  className="text-sm text-gray-700"
                >
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    id="description"
                    disabled={loading}
                    rows={8}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="category" className="text-sm text-gray-700">
                  Category
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[360px]">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="electronics">
                      Mobile & Electronics
                    </SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium mt-4 w-fit self-end"
          >
            Update Store
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SettingsForm;
