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
      <ul>
        <li data-testid="inbox" dclassName="inbox">
          <span>
            <FaInbox />
            Inbox
          </span>
        </li>
        <li data-testid="Today" className="today">
          <span>
            <FaRegCalendarAlt />
            Today
          </span>
        </li>
        <li data-testid="7days" className="7days">
          <span>
            <FaCalendar />
            Next 7 days
          </span>
        </li>
        <li>
          <span>
            <FaChevronDown />
          </span>
        </li>
      </ul>

      <div className="sidebar__middle">
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">
        <li>project will be here</li>
      </ul>
      <p>Add your project!</p>
    </div>
  );
};
