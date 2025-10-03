"use client";

import UploadImage from "@/components/shared/upload-image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, { error: "Name is required" }),
  slug: z.string().min(1, { error: "Slug is required" }),
});

type ProjectFormValues = z.infer<typeof formSchema>;

function ProjectsForm() {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  const onSubmit = async (values: ProjectFormValues) => {
    console.log({
      name: values.name,
      slug: values.slug,
    });
  };
  return (
    <div className="md:max-w-2xl sm:w-full">
      <div className="mb-6">
        <UploadImage title="Upload Cover Image" />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-rows-3 gap-y-4"
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
                  <Input {...field} id="name" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="slug"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="slug" className="text-sm text-gray-700">
                  Slug
                </FormLabel>
                <FormControl>
                  <Input {...field} id="slug" placeholder="slug-name" />
                </FormControl>
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

export default ProjectsForm;
