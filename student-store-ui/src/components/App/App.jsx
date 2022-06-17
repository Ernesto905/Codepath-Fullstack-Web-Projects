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
  const [shoppingCart, setShoppingCart] = useState([null])
  const [checkoutForm, setCheckoutForm] = useState(null)

  //Connect to API  
  try{
    const getData = async () => {
      const response  = await axios.get('https://codepath-store-api.herokuapp.com/store');
      setProducts(response.data.products);
    };
    useEffect(() => {
      getData();
    }, []);
  } catch (error) {
    setError(error)
  }
  
  

  //handler functions
  function handleAddItemToCart() {
    let iDoNothing=null
  }

  function handleRemoveItemToCart() {
    let iDoNothing=null
  }


  return (
    <div className="app">

      <BrowserRouter>
        <main>

            <Navbar />
            <Sidebar />
       
          <Routes>
            <Route path="/" element={


              <Home 
                products={products} 
                handleAddItemToCart={handleAddItemToCart} 
                handleRemoveItemToCart ={handleRemoveItemToCart}
              />

            }/>
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>


        </main>
      </BrowserRouter>
    </div>
  )
}
