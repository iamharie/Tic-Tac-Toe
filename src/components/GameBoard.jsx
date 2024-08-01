import { useState } from "react";

const initialGameBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(initialGameBoard, "OG Array");
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  function handelSelectedButton(rowI, colI) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowI][colI] = "X";
      return updatedBoard;
    });
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handelSelectedButton(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
