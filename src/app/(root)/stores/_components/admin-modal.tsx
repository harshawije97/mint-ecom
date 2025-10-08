"use client";

import Modal from "@/components/shared/modal";
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
import { useStoreModal } from "@/hooks/use-store-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";

interface AdminModalInterface {
  title: string;
  description: string;
}

const formSchema = z.object({
  name: z.string().min(3, { error: "Name is required" }),
  category: z.string().min(1, { error: "Category is required" }),
  description: z.string(),
});

function AdminModal({ title, description }: AdminModalInterface) {
  const { isOpen, onClose } = useStoreModal();
  const [saving, setSaving] = React.useState<boolean>(false);

  const storeForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
    },
  });

  const formOnSubmit = async (values: z.infer<typeof formSchema>) => {
    setSaving(true);
    const response = await axios.post("/api/stores", values);

    if (response.status === 200) {
      setSaving(false);
      onClose();

      const data = response.data;
      window.location.assign(`/stores/${data}/dashboard`);
    }

    // create a toast as well --> then navigate to the store page
  };

  return (
    <>
      <Modal
        title={title}
        description={description}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...storeForm}>
              <form
                onSubmit={storeForm.handleSubmit(formOnSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={storeForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="text-sm font-medium text-gray-900"
                        htmlFor="name"
                      >
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Store name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="text-sm font-medium text-gray-900"
                        htmlFor="category"
                      >
                        Category
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="electronics">
                            Mobile & Electronics
                          </SelectItem>
                          <SelectItem value="clothing">Clothing</SelectItem>
                          {/* <SelectItem value="">System</SelectItem> */}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                  control={storeForm.control}
                />

                <FormField
                  control={storeForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className="text-sm font-medium text-gray-900"
                        htmlFor="description"
                      >
                        Description
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="Store description" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium mt-4"
                >
                  {saving ? <Spinner /> : null}
                  Create Store
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AdminModal;
