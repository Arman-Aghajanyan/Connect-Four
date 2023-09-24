import React from "react";
import Ceil from "./Ceil";

function Row({ row, play }) {
  return (
    <div className="flex">
      {row.map((ceil, i) => (
        <Ceil key={i} play={play} columnIndex={i} value={ceil} />
      ))}
    </div>
  );
}

export default Row;
