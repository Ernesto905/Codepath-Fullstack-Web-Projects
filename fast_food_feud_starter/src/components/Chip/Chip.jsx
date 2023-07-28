import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = true, onClick = () => {}, onClose = () => {} }) {
<<<<<<< HEAD
  
  let buttonClassName = (!isActive) ? 'chip' : 'chip active'

=======
  let buttonClassName = (!isActive) ? "chip" : "chip active";
>>>>>>> 93259fc54cb371db1204910a1f4ec9d2f9a15c2e

  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span onClick={onClose} className="close" role="button">{`X`}</span>
<<<<<<< HEAD
=======
      
>>>>>>> 93259fc54cb371db1204910a1f4ec9d2f9a15c2e
    </button>
  )
}

export default Chip
