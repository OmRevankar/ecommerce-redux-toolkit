import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const cartHolderVar = useSelector((state)=>state.cart.cartHolder);

  return (
    <div className='bg-amber-300 h-16 flex flex-col justify-center'>
      <ul className='flex flex-row justify-between text-2xl items-center font-medium'>
        <NavLink to='/' className='mx-6'>Menu</NavLink>
        <NavLink to='/cart' className='mx-6'>Cart {cartHolderVar.length}</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
