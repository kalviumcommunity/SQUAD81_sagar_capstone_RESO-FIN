import { Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import LinkButton from './LinkButton'
import { starGeerator } from '@/constants/helper'

const ProductCard = ({name ="Product title",
    price="2000",
    rating="4",
    image={url :"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
        id: "2342xcdfgercr",
     },
}) => {
  return (
    <div className='relative border w-fit overflow-clip grid z-1 hover:shadow-md rounded-2xl' >
      <img src={image.url} alt={name} className="object-cover w-[30rem] h-[20rem]"/>
      <div className='px-3 grid gap-1 py-2 absolute bg-white dark:bg-zinc-900 w-full bottom-0 translate-y-[3rem] hover:translate-y-0 transform transition-all ease-in-out rounded-xl duration-300'>
      
        <h2>{name}</h2>
        <div className="flex justify-between">
        <div className='flex'>
            {starGeerator (rating)}
            
                <span>{price}</span>
            </div>

        </div>
        <LinkButton to={'/product'} text="view product"/>
        
        
        
      </div>
      </div>
    
  )
}

export default ProductCard
