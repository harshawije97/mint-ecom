"use client";

import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import React from "react";

interface SettingsWrapperProps {
  children: React.ReactNode;
}

function SettingsWrapper({ children }: SettingsWrapperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between pb-8">
        <Header title="Settings" description="Manage store preferences" />
        <Button
          variant={"destructive"}
          type="button"
          size={"sm"}
          onClick={() => {}}
          disabled={false}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      {/* <Separator /> */}
      {children}
    </div>
  );
}

export default SettingsWrapper;
