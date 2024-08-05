import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedState(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player2" });
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  let activePlayer = derivedState(gameTurns);

  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let gameWinner;
  // console.log(gameWinner);

  for (const combination of WINNING_COMBINATIONS) {
    let firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    let secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    let thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // console.log(firstSquareSymbol, secondSquareSymbol, thirdSquareSymbol);
    // console.log("--------------");

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      gameWinner = players[firstSquareSymbol];
    }
  }

  const isDraw = gameTurns.length === 9 && !gameWinner;

  function handleSquareSelect(rowIndex, colIndex) {
    // setActivePlayer((currActivePlayer) =>
    //   currActivePlayer === "X" ? "O" : "X"
    // );
    //gameTurns
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedState(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRematch() {
    setGameTurns((prevTurn) => []);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(gameWinner || isDraw) && (
          <GameOver winner={gameWinner} reMatch={handleRematch} />
        )}
        <GameBoard
          onSelectSquare={handleSquareSelect}
          //
          gameBoard={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
