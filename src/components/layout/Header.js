import React from "react";
import logo from "../images/logo.png";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  //const x = 1;
  return (
    <header className="logo" data-testid="header">
      <nav>
        <p>Header</p>
        <img src={logo} alt="logo" />
        <div className="settings">
          <ul>
            <li>
              <FaPizzaSlice />
            </li>
            <li>
              <FaPizzaSlice />
            </li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
