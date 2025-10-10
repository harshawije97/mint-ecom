"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Percent } from "lucide-react";
import React from "react";

function AdvancedOptionsForm() {
  return (
    <>
      <section className="flex flex-col gap-y-4 w-full pt-8">
        <h2 className="mb-2">Advanced Pricing</h2>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <label>Pre Ordering</label>
          <Switch />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select discount type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fixed">Fixed</SelectItem>
              <SelectItem value="dynamic">Dynamic</SelectItem>
              {/* <SelectItem value="system">System</SelectItem> */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <InputGroup>
            <InputGroupInput type="number" placeholder="Discount amount" />
            <InputGroupAddon align="inline-end">
              <Percent />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>
    </>
  );
}

export default AdvancedOptionsForm;
