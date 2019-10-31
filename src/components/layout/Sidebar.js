import React, { useState } from "react";
import {
  FaCalendar,
  FaInbox,
  FaChevronDown,
  FaRegCalendarAlt
} from "react-icons/fa";
import { Projects } from "../Projects";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue;
  const [active, setActive] = useState("inbox");
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="siedebar__generic">
        <li
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
        >
          <div
            ddata-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
            onKeyDown={() => {
              setActive("inbox");
              setSelectedProject("INBOX");
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li data-testid="Today" className="today">
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Today</span>
        </li>
        <li data-testid="7days" className="7days">
          <span>
            <FaCalendar />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={() => setShowProjects(!showProjects)}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown />
        </span>
        <span>Projects</span>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};
