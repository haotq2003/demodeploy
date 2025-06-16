import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useState } from 'react';
import ProductItem from './ProductItem';

const LastestCollection = () => {


    const {products} = useContext(ShopContext);
   const [lastsProducts,setLastsProducts] = useState([]);
   useEffect(()=>{
setLastsProducts(products.slice(0,10));
   },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Diện đẹp mỗi ngày – chọn ngay outfit chất, giá siêu yêu!</p>
      </div>
      {/* display product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6  gap-4 '>
              {lastsProducts.map((item,index) =>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))} 
      </div>
    </div>
  )
}

export default LastestCollection
