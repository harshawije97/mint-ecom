"use client";

import Header from "@/components/shared/header";
import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import React from "react";

interface ProductWrapperProps {
  title: string;
  description: string;
  productID: string;
  children: React.ReactNode;
}

function ProductPricingWrapper({
  title,
  description,
  children,
  productID,
}: ProductWrapperProps) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-16">
      <div className="w-full flex items-end justify-start gap-8 pb-8">
        <Header title={title} description={description} />
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
          <span>{productID}</span>
        </Badge>
      </div>
      {children}
    </div>
  );
}

export default ProductPricingWrapper;
