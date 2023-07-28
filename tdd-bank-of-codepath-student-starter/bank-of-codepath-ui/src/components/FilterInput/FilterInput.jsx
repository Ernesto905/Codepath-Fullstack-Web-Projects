import * as React from "react"
import "./FilterInput.css"

export default function FilterInput(props) {
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input value={props.inputValue} onChange={props.handleOnChange} type="text" placeholder="Search transactions" />
    </div>
  )
}
