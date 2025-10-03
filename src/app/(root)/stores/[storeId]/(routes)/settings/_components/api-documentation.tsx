"use client";

import Header, { SubHeader } from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import React from "react";

function ApiDocumentation() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between pb-8">
        <SubHeader title="API Documentation" description="Browse store API" />
        <Button
          variant={"secondary"}
          type="button"
          size={"sm"}
          onClick={() => {}}
          disabled={false}
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default ApiDocumentation;
