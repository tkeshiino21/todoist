import React from 'react'
import { FaCalendar, FaInbox, FaChevronDown, FaRegCalendarAlt } from 'react-icons/fa';

export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul>
        <li data-testid="inbox" dclassName="inbox"><span>
          <FaInbox />Inbox
        </span></li>
        <li data-testid="Today" className="today"><span>
          <FaRegCalendarAlt />Calender
        </span></li>
        <li><span>
          <FaChevronDown />Down
        </span></li>
        <li><span>
          <FaChevronDown />Next 7 days
        </span></li>
      </ul>

      <div className="sidebar__middle">
        <span><FaChevronDown /></span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">
        <p>Add your project!</p>
      </ul>
    </div>
  )
}
