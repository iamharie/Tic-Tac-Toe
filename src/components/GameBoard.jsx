import { useState } from "react";

const initialGameBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(initialGameBoard, "OG Array");
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handelSelectedButton(rowI, colI) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowI][colI] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
