import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = true, onClick = () => {}, onClose = () => {} }) {
  let buttonClassName = (!isActive) ? "chip" : "chip active";

  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span onClick={onClose} className="close" role="button">{`X`}</span>
      
    </button>
  )
}

export default Chip
