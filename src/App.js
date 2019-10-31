import React from "react";
import "./App.scss";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectsProvider } from "./context";

function App() {
  return (
    <SelectedProjectsProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Sidebar />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectsProvider>
  );
}

export default App;
