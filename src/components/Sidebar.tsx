import { useState } from "react";
import "../App.scss";
import { Burger } from "../icons";

type SidebarProps = {
  rows: number;
  cols: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  setCols: React.Dispatch<React.SetStateAction<number>>;
};

export default function Sidebar({
  rows,
  cols,
  setRows,
  setCols,
}: SidebarProps) {
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <div
      className={`Sidebar ${collapse ? "BurgerCollapsed" : "BurgerExpanded"}`}
    >
      <button onClick={() => setCollapse((collapse) => !collapse)}>
        <Burger />
      </button>
      <div className={`${collapse ? "Collapsed" : "GridInput"}`}>
        <h3>Update Grid</h3>
        <label htmlFor="rows">Rows: {rows}</label>
        <input
          type="range"
          id="rows"
          name="rows"
          min="1"
          max="10"
          value={rows}
          onChange={(e) => setRows(e.target.valueAsNumber)}
        />
        <label htmlFor="columns">Columns: {cols}</label>
        <input
          type="range"
          id="columns"
          name="columns"
          min="1"
          max="10"
          value={cols}
          onChange={(e) => setCols(e.target.valueAsNumber)}
        />
      </div>
    </div>
  );
}
