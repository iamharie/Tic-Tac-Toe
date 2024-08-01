import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="O" />
          <Player initialName="Player 2" symbol="X" />
        </ol>
        <GameBoard />
      </div>
      LOG RESULTS
    </main>
  );
}

export default App;
