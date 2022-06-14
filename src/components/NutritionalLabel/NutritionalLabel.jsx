import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const {item} = props
  
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item?.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((fact) => 
          
          {return <NutritionalLabelFact
          key={fact.id}
          label={fact.label}
          attribute={fact.attribute} /* we want to pass in the props.item.(fact.label as a string) */
          item={item}
    
          />}

        )}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
