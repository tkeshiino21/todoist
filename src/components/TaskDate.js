import React from "react";
import { moment } from "moment";
//import { setTaskDate } from './AddTask'
import { FaSpaceShuttle, FaRegPaperPlane } from "react-icons/fa";

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) =>
  showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul colassnName="task-date__list">
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(moment().format("DD/MM/YYYY"));
          }}
          data-testid="data-test-id"
        >
          <span>
            <FaSpaceShuttle />
          </span>
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            setShowTaskDate(false);
            setTaskDate(
              moment()
                .add(7, "days")
                .format("DD/MM/YYYY")
            );
          }}
          data-testid="task-date-overlay"
        >
          <span>
            <FaRegPaperPlane />
          </span>
          <span>next 7 days</span>
        </li>
      </ul>
    </div>
  );
