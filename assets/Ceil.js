import React from "react";

function Ceil({ value, columnIndex, play }) {
  let color = "white";
  if (value === 1) {
    color = "red";
  } else if (value === 2) {
    color = "yellow";
  }

  return (
    <div className="cell" onClick={() => play(columnIndex)}>
      <div className={color}></div>
    </div>
  );
}

export default Ceil;
