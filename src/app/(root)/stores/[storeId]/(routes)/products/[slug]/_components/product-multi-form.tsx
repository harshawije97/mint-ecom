"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import AdvancedOptionsForm from "./advanced-options-form";

function PricingMultiForm() {
  return (
    <div className="max-w-3xl flex flex-col">
      <Tabs defaultValue="general" className="min-w-3xl">
        <TabsList>
          <TabsTrigger value="general" className="capitalize">
            general
          </TabsTrigger>
          <TabsTrigger value="inventory" className="capitalize">
            inventory
          </TabsTrigger>
          <TabsTrigger value="shipping" className="capitalize">
            shipping
          </TabsTrigger>
          <TabsTrigger value="variables" className="capitalize">
            variables
          </TabsTrigger>
          <TabsTrigger value="advanced" className="capitalize">
            Advanced
          </TabsTrigger>
          <TabsTrigger value="summery" className="capitalize">
            summery
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="inventory">Change your password here.</TabsContent>
        <TabsContent value="shipping">Change your password here.</TabsContent>
        <TabsContent value="variables">Change your password here.</TabsContent>
        <TabsContent value="advanced">
          <AdvancedOptionsForm />
        </TabsContent>
        <TabsContent value="summery">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default PricingMultiForm;
