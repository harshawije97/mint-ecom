"use client";

import React from "react";
import { Button } from "../ui/button";
import { ImageIcon } from "lucide-react";

interface UploadImageProps {
  title: string;
}

function UploadImage({ title }: UploadImageProps) {
  return (
    <div className="flex w-max">
      <Button
        onClick={() => console.log("clicked")}
        className="text-xs capitalize text-muted-foreground cursor-pointer"
        variant={"outline"}
        size={"sm"}
      >
        <ImageIcon className="mr-0.5 h-4 w-4" />
        {title}
      </Button>
    </div>
  );
}

export default UploadImage;
