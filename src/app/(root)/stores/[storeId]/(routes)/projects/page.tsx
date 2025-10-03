import React from "react";
import ProjectClient from "./_components/project-client";
import ProjectWrapper from "./_components/project-wrapper";

function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-y-auto flex flex-col">
      <ProjectWrapper title="Projects (0)" description="Manage your projects">
        <ProjectClient />
      </ProjectWrapper>
    </div>
  );
}

export default ProjectsPage;
