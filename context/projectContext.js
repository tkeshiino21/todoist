import React, {
  createContext,
  useContext
} from 'react'
import {
  useProjects
} from './hooks'

export const ProjectContext = createContext()
export const ProjectProvider = (children) => {
  const {
    projects,
    setProjects
  } = useProjects() {

    setuse( <
      ProjectsContext.Provider value = {
        {
          projects,
          setProjects
        }
      } > {
        childeren
      } <
      /ProjectsContext.Provider>
    )
  };
}