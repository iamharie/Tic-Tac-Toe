import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSquareSelect() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      updatedTurns = [...prevTurns];
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
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSquareSelect}
          activePlayerSymbol={activePlayer}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
