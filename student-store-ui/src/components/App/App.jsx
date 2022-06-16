import * as React from "react"
import "./App.css"
import { useState } from "react"

//import components
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import NotFound from "../NotFound/NotFound"
import ProductDetail from "../ProductDetail/ProductDetail"

//Import Routes
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [products, setProducts] = useState('')
  const [isFetching, setIsFetching] = useState(false) //currently fetching a product from API
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(false) //for sidebar
  const [shoppingCart, setShoppingCart] = useState([null])
  const [checkoutForm, setCheckoutForm] = useState(null)


  return (
    <div className="app">

      <BrowserRouter>
        <main>

            <Navbar />
            <Sidebar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>


        </main>
      </BrowserRouter>
    </div>
  )
}
