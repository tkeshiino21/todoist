import React from "react";
import "./App.scss";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Content } from "./components/layout/Content";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello there!</p>
      </header>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
