export default function GameOver({ winner, reMatch }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>Its a draw</p>}
      <p>
        <button onClick={reMatch}>Rematch</button>
      </p>
    </div>
  );
}
