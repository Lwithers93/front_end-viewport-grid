import "../App.scss";
import GridPage from "./GridPage";

type MainProps = {
  rows: number;
  cols: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  setCols: React.Dispatch<React.SetStateAction<number>>;
};

export default function Main({ rows, cols, setRows, setCols }: MainProps) {
  return (
    <div className="Main">
      <div className="MainHeader">
        <h1 className="textGradient">Dynamic Viewport Grid</h1>
        <p>Update Number of Rows &amp; Columns in Sidebar</p>
        {rows < 7 && (
          <p id="gridDescription">
            Each grid cell contains a viewport with a unique identifier and the
            viewport dimensions (WxH)
          </p>
        )}
      </div>
      <GridPage rows={rows} setRows={setRows} cols={cols} setCols={setCols} />
    </div>
  );
}
