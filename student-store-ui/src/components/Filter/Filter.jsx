import React from 'react'
import "./Filter.css"
import axios from 'axios';
import { useEffect } from 'react';

function Filter() {

    //Connect to API  
  try{
    const getData = async () => {
      const response  = await axios.get('http://localhost:3002/Filter');
      console.log(response)
      setProducts(response.data);
    };
    useEffect(() => {
      getData();
    }, []);
  } catch (error) {
    console.log(error)
  }


  return (
    <div>
        <h1 className='filterHead'>I am currently useless!</h1>

        
    </div>
  )
}

export default Filter