import React from "react";
import ProjectWrapper from "../_components/project-wrapper";
import ProjectsForm from "../_components/projects-form";
import UploadImage from "@/components/shared/upload-image";

async function NewProjectPage({ params }: { params: { projectId: string } }) {
  const { projectId } = await params;
  console.log(projectId);

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <ProjectWrapper title="New Project" description="">
        <ProjectsForm />
      </ProjectWrapper>
    </div>
  );
}

export default NewProjectPage;
