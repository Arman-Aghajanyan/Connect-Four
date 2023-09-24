import { useEffect, useState } from "react";

function UseBoardProvider() {
  const [board, setBoard] = useState([]);

  const [firstPlayer, setFirstPlayer] = useState(1);
  const [secondPlayer, setSecondPlayer] = useState(2);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const [gameOver, setGameOver] = useState(false);
  const [massage, setMassage] = useState("");

  const play = (c) => {
    if (!gameOver) {
      let _board = board;
      for (let r = 5; r >= 0; r--) {
        if (!_board[r][c]) {
          _board[r][c] = currentPlayer;
          break;
        }
      }

      let result = checkAll(_board);
      if (result === firstPlayer) {
        setGameOver(true);
        setMassage("Player 1 (Red) wins");
      } else if (result === secondPlayer) {
        setGameOver(true);
        setMassage("Player 2 (Yellow) wins");
      } else if (result === "draw") {
        setGameOver(true);
        setMassage("Draw game");
      } else {
        setCurrentPlayer(switchPlayer());
      }
    } else {
      setMassage("Game over. Please start new game");
    }
  };

  const initBoard = () => {
    let _board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) {
        row.push(null);
      }
      _board.push(row);
    }
    setBoard(_board);
    setCurrentPlayer(firstPlayer);
    setGameOver(false);
    setMassage("");
  };

  useEffect(() => {
    initBoard();
  }, []);

  const switchPlayer = () => {
    return currentPlayer === firstPlayer ? secondPlayer : firstPlayer;
  };

  const checkVertical = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkHorizontal = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r][c + 1] &&
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalRight = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDiagonalLeft = (board) => {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (
            board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]
          ) {
            return board[r][c];
          }
        }
      }
    }
  };

  const checkDraw = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return "draw";
  };

  const checkAll = (board) => {
    return (
      checkVertical(board) ||
      checkDiagonalRight(board) ||
      checkDiagonalLeft(board) ||
      checkHorizontal(board) ||
      checkDraw(board)
    );
  };

  return {
    initBoard,
    play,
    massage,
    board,
  };
}

export default UseBoardProvider;
