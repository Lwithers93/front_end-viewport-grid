import { useEffect, useRef, useState } from "react";

type GridCellProps = {
  uuId: number;
  cols: number;
};

export default function GridCell({ uuId, cols }: GridCellProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (!elRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      setDimensions({
        w: entry.contentRect.width,
        h: entry.contentRect.height,
      });
    });
    observer.observe(elRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="GridCell" ref={elRef}>
      <div className="GridViewPort">
        <span className="GridId">{uuId}</span>
        <div className="GridDimensions">
          <span>{Number(dimensions.w).toFixed(0)}</span>
          <span>x</span>
          <span>{Number(dimensions.h).toFixed(0)}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
