import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
<<<<<<< HEAD
  const {item} = props
=======
>>>>>>> 93259fc54cb371db1204910a1f4ec9d2f9a15c2e
  
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

<<<<<<< HEAD
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
=======
      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map((nutritionFact, index) => {
          console.log(nutritionFact)
        })}
>>>>>>> 93259fc54cb371db1204910a1f4ec9d2f9a15c2e
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
<<<<<<< HEAD
      
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.attribute]}</span>
=======
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item?.[props.attribute]}</span>
>>>>>>> 93259fc54cb371db1204910a1f4ec9d2f9a15c2e
    </li>
  )
}

export default NutritionalLabel
