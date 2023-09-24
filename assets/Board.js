import Row from "./Row";
import { useContext } from "react";
import { BoardContext } from "./context/BoardContext";

function Board() {
  const { board, massage, initBoard, play } = useContext(BoardContext);

  return (
    <div>
      <div className="text-center text-5xl mt-9">Connect Four Game</div>

      <div onClick={initBoard} className="button">
        New Game
      </div>
      <div className="board">
        {board.map((row, index) => (
          <Row key={index} row={row} play={play} />
        ))}
      </div>

      <div className="mt-9">
        <p className="message">{massage}</p>
      </div>
    </div>
  );
}

export default Board;
