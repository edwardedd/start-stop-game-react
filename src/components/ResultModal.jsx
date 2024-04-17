import {forwardRef, useImperativeHandle, useRef} from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, remainingTime, onReset},
  ref
){
  const dialog = useRef();
  
  const userLost = remainingTime <= 0;
  
  const formattedTime = (remainingTime / 1000).toFixed(2);
  
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  
  useImperativeHandle(ref, () => {
    return {
      open(){
        dialog.current.showModal();
      }
    }
  })
  
  return (
    <dialog ref={dialog} className='result-modal'>
      {userLost && <h2>You {result}</h2>}
      {!userLost && <h2>You Score: {score}</h2>}
      <p>The target time was <strong>{targetTime} </strong> seconds</p>
      <p>Yuo stopped the timer <strong> {formattedTime} seconds left</strong></p>
      <form>
        <button method="dialog" onSubmit={onReset}>
          close
        </button>
      </form>
    </dialog>
  )
})

export default ResultModal;