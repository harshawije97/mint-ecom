"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

function StorePreview() {
  const onNavigate = () => {
    alert("Navigate to this store");
  };
  return (
    <div>
      <Card className="min-w-[260px] hover:cursor-pointer" onClick={onNavigate}>
        <CardHeader>
          <CardTitle>Store Name</CardTitle>
          <CardDescription>Store Category</CardDescription>
        </CardHeader>
        <CardFooter>
          <p className="text-sm font-normal text-slate-500">Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default StorePreview;
