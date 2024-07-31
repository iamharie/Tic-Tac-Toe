import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  //manage buttonClick
  function handelEditClick() {
    setIsEditing((edit) => !edit);
    console.log("Working");
  }
  //manage inputField
  function handleInputValue(e) {
    console.log(e);
    console.log(e.target);

    setPlayerName(e.target.value);
  }

  let EditablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    EditablePlayerName = (
      <input type="text" value={playerName} onChange={handleInputValue} />
    );
  }

  return (
    <li>
      <span className="player">
        {EditablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? "SAVE" : "EDIT"} </button>
    </li>
  );
}
