import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from './components/Chip/Chip'
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
import { useState } from "react"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {

  let closedCat=false;
  let closedRest=false;
  let closedItem=false;
  //states

  const [cat, setCat] = useState(null)
  const [rest, setRest] = useState(null)
  const [ourItem, setItem] = useState(null)

  //event handlers
  function closeCat() {
    closedCat=true;
    setCat(null)
  }
  function closeRest() {
    closedRest=true;
    setRest(null)
  }
  function closeItem() {
    closedItem=true;
    setItem(null)
  }
  function handleCatChange(category) {
    if(!closedCat)
      setCat(category)
  }
  function handleRestChange(restaurant) {
    if(!closedRest)
      setRest(restaurant)
  }
  function handleItemChange(item) {
    if(!closedItem)
      setItem(item)
  }

  function decideInstructions() {
    
    if(cat==null && rest==null && ourItem==null){
      
      return (appInfo.instructions.start)
    }
    else if(cat!=null && rest == null){
      
      return(appInfo.instructions.onlyCategory)
    }
    else if (cat==null && rest!= null) {
      return (appInfo.instructions.onlyRestaurant)
      
    }
    else if (cat!=null && rest!= null && ourItem==null) {
      
      return(appInfo.instructions.noSelectedItem)
    }
    else {
      return(appInfo.allSelected)
    }
    
  }

  const currentMenuItems = data.filter((item) => 
    {return item.food_category === cat && item.restaurant === rest}
    )


  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map((category, index) => 
          <Chip label={category} 
            key={category + '-' + index} 
            onClick={() => handleCatChange(category)} 
            onClose={closeCat}
            isActive={cat === category}
          />)
          } 
          
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant, index) => 
            <Chip 
            label={restaurant} 
            key={restaurant + '-' + index}
            onClick={() => handleRestChange(restaurant)}
            onClose={closeRest}
            isActive={restaurant === rest}
            />
            )}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={decideInstructions()}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {currentMenuItems.map((item, index) => 
              <Chip 
              label={item.item_name}
              key={item.item_name + '-' + index}
              onClick={() => handleItemChange(item)}
              onClose={closeItem}
              isActive={item===ourItem}
              />
            )}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">

              {ourItem ? <NutritionalLabel item={ourItem}/> : null}
              

          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
