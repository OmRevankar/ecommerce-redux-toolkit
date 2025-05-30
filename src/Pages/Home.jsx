import React from 'react'
import itemData from '../Components/ItemDetails.jsx'
import Navbar from '../Components/Navbar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice.jsx'
import toast , {Toaster} from 'react-hot-toast'

const Home = () => {

    const cartHolderVar = useSelector((state) => state.cart.cartHolder);
    const dispatch = useDispatch();

    const handleClick = (item)=>{
        dispatch(addToCart(item));
        toast.success("Item added to Cart !")
    }

  return (
    <div className=''>
      <div>
        <Navbar/>
      </div>

      {/* All the item cards */}

      <h1 className='font-bold text-5xl mx-24 my-4'>Restro Jingala </h1>
      <div className='grid grid-cols-3 gap-5 mx-24'>
        {
            itemData.map( (item,index) => {
                return(
                    <>
                    
                        <div className='flex border-2 shadow-2xl rounded-l h-auto w-auto flex-col gap-y-2 p-2'>
                            <div className='flex flex-row justify-center'>
                                <img src={item.imgdata} className='h-78 w-78 overflow-hidden rounded-l' alt=""/>
                            </div>
                            <div className='flex flex-row justify-around'>
                                <h2 className='font-bold text-xl'>{item.dish}</h2>
                                <p className='font-bold italic text-xl'>₹ {item.price}</p>
                            </div>
                            <div className='border-2 bg-pink-400 rounded-l mx-auto w-36 flex flex-row justify-center mb-2'>
                                <button className='flex flex-row justify-center font-semibold' onClick={() => handleClick(item)} >Add to Cart</button>
                            </div>
                        </div>

                    </>
                )
            })
        }
      </div>
      <Toaster/>
    </div>
  )
}

export default Home
