import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency,delivery_free,getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CART"} text2={'TOTAL'}/>

      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
  <div className='flex justify-between'>
  <p>Subtotal</p>
  <p>{currency}{getCartAmount()}</p>
  </div>
  <hr />
  <div className='flex justify-between'>
 <p>Shipping Fee</p>
 <p>{currency}{delivery_free}</p>
  </div>
  <hr />
  <div className='flex justify-between'>
    <p>Total</p>
    <p>{currency}{getCartAmount() + delivery_free}</p>
  </div>
      </div>
    </div>
  )
}

export default CartTotal
