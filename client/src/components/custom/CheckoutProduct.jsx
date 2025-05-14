import { Colors } from '@/constants/colors'
import React from 'react'

const CheckoutProduct = (
    name="Custom Designed Keyboard",
    price =299,
    quantity=2,
    image={url:"https://images.pexels.com/photos/1293260/pexels-photo-1293260.jpeg?auto=compress&cs=tinysrgb&w=600",},
    color= Colors.customYellow,
    stock=5) => {
  return (
    <div className='flex justify-between items-start p-3 rounded-lg bg-gray-100 dark:bg-zinc-900'>
      <div className='flex flex-row items-center gap-2'>
        <img src={image.url} alt={name} className='w-40 sm:w-24 rounded-lg' />
        <div className='grid sm:gap-1'>
            <h1 className='font-semibold text-sm sm:text-base'>
                "Custom Designed Keyboard"
            </h1>
            <p className='flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-gray-400
             text-xs sm:text-sm my-0'></p>
             <span className='font-semibold text-sm sm:text-base'> 
              Color : <span style={{backgroundColor : color}}>{color}</span>
             </span>
             <span className='font-semibold text-sm sm:text-base'>|</span>
             <span className='font-semibold text-sm sm:text-base '>Qty: {" "} <span className="font-medium text-yellow-200 ">{quantity}</span>{" "}</span>
             <span className='hidden sm:block text:sm sm:text-base '>|</span>
             <span className='font-semibold text-sm sm:text-base'> Price: {" "} <span className="font-medium text-yellow-200 ">₹{price}</span></span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
