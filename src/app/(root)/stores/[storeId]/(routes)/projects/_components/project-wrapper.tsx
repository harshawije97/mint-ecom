"use client";

import Header from "@/components/shared/header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

interface ProjectWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  isAction?: boolean;
}

function ProjectWrapper({ title, description, children, isAction }: ProjectWrapperProps) {
  const params = useParams();

  const onNavigate = () => {
    return window.location.assign(`/stores/${params.storeId}/projects/new`);
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-16">
      <div className="w-full flex items-center justify-between pb-8">
        <Header title={title} description={description} />
        {isAction && (
          <Button
            type="button"
            className="hover:cursor-pointer"
            onClick={onNavigate}
          >
            <Plus className="h-4 w-4" />
            Add Project
          </Button>
        )}
      </div>

      {children}
    </div>
  );
}

export default ProjectWrapper;
