import GridCell from "./GridCell";

type GridPageProps = {
  rows: number;
  cols: number;
  setRows: React.Dispatch<React.SetStateAction<number>>;
  setCols: React.Dispatch<React.SetStateAction<number>>;
};

export default function GridPage({
  rows,
  cols,
  setRows,
  setCols,
}: GridPageProps) {
  return (
    <div
      className="Grid"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {rows &&
        cols &&
        [...Array(rows * cols)].map((c, i) => {
          return <GridCell key={i} uuId={i + 1} cols={cols} />;
        })}
    </div>
  );
}
