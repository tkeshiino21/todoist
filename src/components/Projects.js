import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  useSelectedProjectValue,
  useProjectsValue,
  ProjectsContext
} from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  console.log(projects);
  console.log("here");
  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
      >
        <div
          role="button"
          data-test-id="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};

ProjectsContext.propTypes = {
  activeValue: PropTypes.bool
};
