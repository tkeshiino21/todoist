import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useProjects } from "../hooks";

export const SelectedProjectsContext = createContext();
export const SelectedProjectsProvider = ({ children }) => {
  const { selectedProjects, setSelectedProjects } = useProjects("INBOX");

  return (
    <SelectedProjectsContext.Provider
      value={{ selectedProjects, setSelectedProjects }}
    >
      {children}
    </SelectedProjectsContext.Provider>
  );
};

export const useSelectedProjectValue = () =>
  useContext(SelectedProjectsContext);

SelectedProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired
};
