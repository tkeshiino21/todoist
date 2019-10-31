import React from "react";
import {
  FaCalendar,
  FaInbox,
  FaChevronDown,
  FaRegCalendarAlt
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="siedebar__generic">
        <li data-testid="inbox" dclassName="inbox">
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
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
      <ul className="sidebar__middle">
        <li data-testid="projects" className="projects">
          <span>
            <FaChevronDown />
          </span>
          <span>Projects</span>
        </li>
      </ul>
      <ul className="sidebar__projects">
        <li>project will be here</li>
        <li>Add your project!</li>
      </ul>
    </div>
  );
};
