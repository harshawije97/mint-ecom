import React from "react";
import ProjectClient from "./_components/project-client";

function ProjectsPage() {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ProjectClient />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
