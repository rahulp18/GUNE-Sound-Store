import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'

const Navbar = () => {
  return (
   <div className="navbar-container">
     <p className="logo">
       <Link href='/'>GUNE Headphones</Link>
     </p>
     <button className="cart-icon" type='button' onClick={()=>console.log("Hii Guni")} >

   <AiOutlineShopping />
   <span className='cart-item-qty'>12</span>
     </button>
   </div>
  )
}

export default Navbar