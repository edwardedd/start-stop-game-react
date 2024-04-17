import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}){
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  
  
  
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  
  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }
  function handleStart(){
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRem => prevTimeRem -10)
    }, 10);
    
  }
  
  function handleStop(){
    clearInterval(timer.current);
    dialog.current.open();
  }
  
  return <>
    <ResultModal
      ref={dialog}
      targetTime={targetTime}
      result="lost"
      remainingTime={timeRemaining}
      onReset={handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerActive ? handleStop : handleStart}>
          {timerActive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerActive ? 'active' : undefined}>
        {timerActive ? 'Time is runnig...' : 'Timer inactive'}
      </p>
    </section>
  </>
  
}