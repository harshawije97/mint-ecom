"use client";

import UploadImage from "@/components/shared/upload-image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";
import ProjectComboBox from "./project-combobox";
import dynamic from "next/dynamic";

interface NewProductFormProps {
  store: string;
}

function NewProductForm({ store }: NewProductFormProps) {
  const onNavigateNewProject = () => {
    window.location.href = `/stores/${store}/projects/new`;
  };

  const Editor = React.useMemo(
    () =>
      dynamic(() => import("@/components/shared/text-editor"), { ssr: false }),
    []
  );
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
          <ProjectComboBox />
        </div>
        <div className="w-full mb-4 right">
          <Button
            className="w-full"
            type="button"
            onClick={() => onNavigateNewProject()}
          >
            <Plus className="h-4 w-4" />
            Add new Project
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 mt-4 mb-8">
        <Editor
          onChange={() => {
            console.log("change");
          }}
          content={""}
          editable
        />
      </div>
      <div className="w-full">
        <Button type="submit">Save Product</Button>
      </div>
    </div>
  );
}

export default NewProductForm;
