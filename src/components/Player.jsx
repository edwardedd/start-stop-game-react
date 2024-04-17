import {useRef, useState} from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState(null);
  const playerName = useRef();
  
  function handleClick(){
    setEnteredName(playerName.current.value);
    playerName.current.value = '';
  }
  
  
  
  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'nobody'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
