import React from "react";
import ProjectWrapper from "../_components/project-wrapper";
import ProjectsForm from "../_components/projects-form";

async function NewProjectPage({ params }: { params: { projectId: string } }) {
  const { projectId } = await params;
  console.log(projectId);

  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      {projectId === "new" ? (
        <ProjectWrapper title="New Project" description="">
          <ProjectsForm />
        </ProjectWrapper>
      ) : (
        <ProjectWrapper
          title="Edit Project"
          description={`Edit ${projectId} details here`}
        >
          <ProjectsForm />
        </ProjectWrapper>
      )}
    </div>
  );
}

export default NewProjectPage;
