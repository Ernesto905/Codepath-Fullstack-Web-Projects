import * as React from "react"
import "./App.css"
import { useState } from "react"

//import components
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../ProductDetail/ProductDetail"

//Import Routes and API 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react"



export default function App() {
  const [products, setProducts] = useState('')
  const [isFetching, setIsFetching] = useState(false) //currently fetching a product from API
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(false) //for sidebar
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState(null)

  //Connect to API  
  try{
    const getData = async () => {
      const response  = await axios.get('http://localhost:3002/store');
      console.log(response)
      setProducts(response.data);
    };
    useEffect(() => {
      getData();
    }, []);
  } catch (error) {
    setError(error)
  }
  
  

  //handler functions
  function handleAddItemToCart(productId) {
    
    if(shoppingCart.some(product => product.id === productId)) {

      const index = shoppingCart.findIndex(object => object.id === productId);
      let item = shoppingCart[index];

      item.quantity++;
      
      setShoppingCart([...shoppingCart.slice(0, index), item, ...shoppingCart.slice(index+1, shoppingCart.length)]);
      
    } else {
      setShoppingCart(shoppingCart => [...shoppingCart, {id: productId, quantity: 1}]);
    }
    // console.log('shopping cart', shoppingCart)
    
  }

  function handleRemoveItemToCart(productId) {
    
    if(shoppingCart.some(product => product.id === productId)) {

      const index = shoppingCart.findIndex(object => object.id === productId);

      let item = shoppingCart[index];

      item.quantity--;

      item.quantity = item.quantity <= 0 ? 0 : item.quantity
      
      setShoppingCart([...shoppingCart.slice(0, index), item, ...shoppingCart.slice(index+1, shoppingCart.length)]);
      if (item.quantity === 0) {
        setShoppingCart([...shoppingCart.slice(0, index), ...shoppingCart.slice(index+1, shoppingCart.length)]);
        console.log("shoppingCart", shoppingCart);
      }
    } else {
      setShoppingCart(shoppingCart => [...shoppingCart, {id: productId, quantity: 1}]);
    }
    
    
    

  }

  function handleOnToggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  function handleOnCheckoutFormChange() {
    console.log('i do nothing')
  }
  function handleOnSubmitCheckoutForm() {
    console.log('i do nothing!')
  }



  return (
    <div className="app">

      <BrowserRouter>
        <main>

            <Navbar isOpen={isOpen}/>

            <Sidebar 
            handleOnToggle={handleOnToggle} 
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange} //new
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} //new
            />
       
          <Routes>
            <Route path="/" element={


              <Home 
                products={products} 
                handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart ={handleRemoveItemToCart}
                isOpen={isOpen}
                shoppingCart={shoppingCart}
              />

            }/>
            <Route path="/products/:productId" 
              element={
                <ProductDetail 
                  products={products} 
                  handleAddItemToCart={handleAddItemToCart} 
                  handleRemoveItemToCart ={handleRemoveItemToCart}
                  shoppingCart={shoppingCart}
                />
              } 
            />
            <Route path="*" element={<NotFound />}/>
          </Routes>


        </main>
      </BrowserRouter>
    </div>
  )
}
