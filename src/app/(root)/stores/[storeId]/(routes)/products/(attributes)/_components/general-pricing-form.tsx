"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function GeneralPricingForm() {
  const [selected, setSelected] = React.useState<string>("showcase");
  return (
    <section className="flex flex-col gap-y-4 w-full pt-8">
      <h2 className="mb-2">Main Pricing Details</h2>
      <div className="flex flex-row items-center justify-between rounded-lg">
        {/* sku, product type - (showcase product, seller product), seller product selected - 1. regular price, 2. sale price  */}
        <form className="flex flex-col space-y-4">
          <div className="mb-3">
            <Label>SKU</Label>
            <Input type="text" />
          </div>
          <div className="mb-3">
            <Label>Product Type</Label>
            <Select onValueChange={setSelected}>
              <SelectTrigger className="w-[260px]">
                <SelectValue placeholder="Select product type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="showcase" className="capitalize">
                  Showcase Product
                </SelectItem>
                <SelectItem value="seller" className="capitalize">
                  Seller Product
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {selected === "seller" && (
            <>
              <div className="mb-3">
                <Label>Regular Price</Label>
                <Input type="number" />
              </div>
              <div className="mb-3">
                <Label>Sale Price</Label>
                <Input type="number" />
              </div>
            </>
          )}
          <div className="mt-3">
            <Button type="submit">Update Pricing Details</Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default GeneralPricingForm;
