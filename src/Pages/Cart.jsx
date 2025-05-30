import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, clearCart, decreaseQuantity, removeFromCart} from '../features/cart/cartSlice.jsx'
import toast,{Toaster} from 'react-hot-toast'

const Cart = () => {

    const cartHolderVar = useSelector((state)=>state.cart.cartHolder);
    const dispatch = useDispatch();

    const [totalQuantity , setTotalQuantity] = useState(0);
    const [totalPrice , setTotalPrice] = useState(0);
 
    const decrementItem = (item) => {
      dispatch(decreaseQuantity(item))
    }

    const IncrementItem = (item) => {
      dispatch(addToCart(item))

    }

    const deleteFromCart = (item) => {
      dispatch(removeFromCart(item));
    }

    const clearFromCart = () => {
      dispatch(clearCart())
    }

    const totalPriceFunction = () => {

      let pr = 0;

      cartHolderVar.forEach((item,index) => {
        pr += item.qnty*item.price;
      })

      setTotalPrice(pr);
    }

    const totalQuantityFunction = () => {
      let qn = 0;

      cartHolderVar.forEach((item,index) => {
        qn += item.qnty;
      })
      
      setTotalQuantity(qn);
    }

    useEffect(() => {
      totalPriceFunction();
      totalQuantityFunction();
      
    }, [cartHolderVar])
    

  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div className='flex flex-col items-center mt-10'>
        <div className='bg-cyan-300 font-bold text-2xl w-2/3 flex flex-row justify-around items-center h-10 '>
          <div className='self-center'>Cart Calculation</div>
          {cartHolderVar.length > 0 ? <div className='bg-red-400 flex flex-row gap-x-1 px-2 items-center' onClick={()=>clearFromCart()}>
            <i class="material-icons">delete</i>
            <p>Empty Cart</p>
          </div> : "" }
        </div>

        <div>
            {cartHolderVar.length === 0 ? 
                <table>
                    <tbody>
                        <tr>
                            <td>Your Cart is Empty</td>
                        </tr>
                    </tbody>
                </table> 
            : 
                <table>
                    <thead>
                        <tr>
                            {/* action , picture , name , price , quantity , total amount */}
                            <th>Action</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          cartHolderVar.map( (item,index) => {

                            return(
                              <>
                                <tr>
                                  <td>
                                    <i class="material-icons" onClick={()=> deleteFromCart(item)}>delete</i>
                                  </td>
                                  <td>
                                    <img src={item.imgdata} className='h-15'  alt="" />
                                  </td>
                                  <td>
                                    {item.dish}
                                  </td>
                                  <td>
                                    {item.price}
                                  </td>
                                  <td>
                                    <div>
                                      <button onClick={() => decrementItem(item)}>-</button>
                                      <span>{item.qnty}</span>
                                      <button onClick={() => IncrementItem(item)}>+</button>
                                    </div>
                                  </td>
                                  <td>
                                    {item.qnty*item.price}
                                  </td>
                                </tr>
                              </>
                            )

                          } )
                        }
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colSpan={4}>&nbsp;</th>
                        <th>Total Quantity : {totalQuantity}</th>
                        <th>Total Price : {totalPrice}</th>
                      </tr>
                    </tfoot>
                </table>
            }
        </div>

      </div>
    </div>
  )
}

export default Cart
