import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

/**
 * App Component
 */
export function App() {
  const [rows, setRows] = useState<number>(1);
  const [cols, setCols] = useState<number>(1);

  return (
    <div className="App">
      <Sidebar rows={rows} setRows={setRows} cols={cols} setCols={setCols} />
      <Main rows={rows} setRows={setRows} cols={cols} setCols={setCols} />
    </div>
  );
}
