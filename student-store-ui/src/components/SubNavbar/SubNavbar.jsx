import React from 'react'
import "./SubNavbar.css"

function SubNavbar() {
  return (
    <div className="sub-navbar"> 
        <div className="content">
            <input type="text" name="search" placeholder="Search"></input>  
            <div className='row'>I am a row</div>
            <div className='category-menu open'>
                <li>
                    All categories
                </li>
                <li>
                    <button>Clothing</button>
                </li>
                <li>
                <button>Food</button>
                </li>
                <li>
                <button>Accessories</button>
                </li>
                <li>
                <button>Tech</button>
                </li>
            </div>
        </div>
    </div>
  )
}

export default SubNavbar