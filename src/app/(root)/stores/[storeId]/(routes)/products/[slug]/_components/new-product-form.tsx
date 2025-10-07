"use client";

import UploadImage from "@/components/shared/upload-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";

function NewProductForm() {
  return (
    <div className="md:max-w-3xl sm:w-full">
      <div className="mb-6">
        <UploadImage title="Upload Feature Image" />
      </div>
      <div className="w-full grid grid-cols-[1fr_245px] gap-x-3">
        <div className="w-full mb-4">
          <Input placeholder="Product Name" />
        </div>
        <div className="w-full mb-4">
          <Input placeholder="Tags" />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-x-3">
        <div className="w-full mb-4">
          <Input placeholder="Category" />
        </div>
        <div className="w-full mb-4">
          <Input placeholder="Brand" />
        </div>
        <div className="w-full mb-4 right">
          <Button className="w-full" type="button">
            <Plus className="h-4 w-4" />
            Add new Brand
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 my-4">
        <div className="bg-gray-50 border border-gray-400 w-full h-[300px] rounded-md">
          <p>Description of the product</p>
        </div>
      </div>
      <div className="w-full">
        <Button type="submit">Save Product</Button>
      </div>
    </div>
  );
}

export default NewProductForm;
