import * as React from "react"
import "./App.css"
import { useState } from "react"

//import components
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../ProductDetail/ProductDetail"
import Filter from "../Filter/Filter"

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
  const [checkoutForm, setCheckoutForm] = useState({email: '', name: ''})
  const [reciept, setReciept] = useState('')

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
    const exist = shoppingCart.find(x => x.id === productId);
    
    if(exist) {
      setShoppingCart(shoppingCart.map((x) => x.id === productId ? {...exist, quantity: exist.quantity + 1} : x)
      );
      
    } else {
      setShoppingCart([...shoppingCart, { id: productId, quantity: 1 }])
    }
  }

  function handleRemoveItemToCart(productId) {
    const exist = shoppingCart.find((x) => x.id == productId);
    if(exist.quantity === 1) {
      setShoppingCart(shoppingCart.filter((x) => x.id !== productId))
    } else {
      setShoppingCart(shoppingCart.map((x) => x.id === productId ? {...exist, quantity: exist.quantity - 1} : x));
    }
  }

  function handleOnToggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
    if (isOpen == false) {
      setReciept('')
    }
  }

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm({...checkoutForm, [name] : value})
  }

  async function handleOnSubmitCheckoutForm(value) {
    console.log('testing')
    setReciept(shoppingCart, checkoutForm)
   
    //we want to send the checkoutForm and the shopping cart 
    try{
      await axios.post('http://localhost:3002/store', {user : checkoutForm, shoppingCart : shoppingCart}).then(
        //reset state variables
        setShoppingCart([]),
        setCheckoutForm({email: '', name: ''})
      )
      
    } catch (error) {
      console.log(error)
    }


    
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
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} 
            reciept={reciept}
            setReciept={setReciept}
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
            <Route path="Filter" element={<Filter/>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          


        </main>
      </BrowserRouter>
    </div>
  )
}
