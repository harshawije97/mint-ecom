"use client";

import React from "react";
import { Button } from "../ui/button";
import Dropzone from "react-dropzone";
import { ImageIcon, Images, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useCoverImageUploadStore } from "@/hooks/use-image-store";
import { cn } from "@/lib/utils";

interface UploadImageProps {
  title: string;
  maxSize?: number;
}

function UploadImage({ title, maxSize = 2 }: UploadImageProps) {
  const [message, setMessage] = React.useState<string | null>(null);
  const { setUrl, url, removeUrl } = useCoverImageUploadStore();

  const onPreUpload = (file: Array<File>) => {
    const reader = new FileReader();
    const [meta] = file;

    // Check if the meta.size is less than maxSize
    if (meta.size / 1024 / 1024 <= maxSize) {
      reader.readAsDataURL(meta);
      reader.onload = () => {
        console.log(reader.result);
      };
    } else {
      setMessage("Error: Image size must be less than 2MB");
    }
    return;
  };

  return (
    <div className="flex w-max">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="text-xs capitalize text-muted-foreground cursor-pointer"
            variant={"outline"}
            size={"sm"}
          >
            <ImageIcon className="mr-0.5 h-4 w-4" />
            {title}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="sr-only">Upload image</DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only"></DialogDescription>

          <Dropzone
            onDrop={(acceptedFiles) => {
              setMessage(null);
              onPreUpload(acceptedFiles);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div className="flex flex-col w-full gap-y-2 bg-white">
                <div
                  {...getRootProps()}
                  className={cn(
                    message ? "border-red-500" : "border-gray-300",
                    "flex flex-col items-center justify-center rounded-lg border-[1.75px] border-dashed px-4 py-6 mx-1"
                  )}
                >
                  <input {...getInputProps()} />
                  <div className="mb-6">
                    <Images
                      className="h-12 w-12 text-blue-500"
                      strokeWidth={0.75}
                    />
                  </div>
                  <p className="text-center text-gray-800">
                    Drop your file here or{" "}
                    <button
                      onClick={() => {}}
                      className="text-blue-600 hover:underline hover:cursor-pointer font-normal"
                    >
                      browse
                    </button>
                  </p>
                  <p
                    className={cn(
                      message ? "text-red-500" : "text-gray-500",
                      "mt-2 text-sm "
                    )}
                  >
                    {message ? message : `Pick a file up to ${maxSize}MB.`}
                  </p>
                </div>
              </div>
            )}
          </Dropzone>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UploadImage;
