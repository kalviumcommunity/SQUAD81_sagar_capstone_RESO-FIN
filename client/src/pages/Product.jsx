import ReviewComponent from '@/components/custom/ReviewComponent'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Colors } from '@/constants/colors'
import { starGeerator } from '@/constants/helper'
import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
import { Circle } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

const imagesArray= [
    {
        url:"https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
        id:1,
    },
    {
        url:"https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
        id:2,
    },
    {
        url:"https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
        id:3,
    },
    {
        url:"https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
        id:4,
    }
]

const productStock = 10;

const Product = () => {
    const [productQuantity,setProductQuantity] =useState(5);
    const [productStock,setProductStock] =useState(5);
    const [AvailabilityMessage,setAvailityMessage] =useState("");
    const[purchaseProduct,setPurchaseProduct] =useState(true);
    const[address,setAddress] =useState("");   
  return (
    <>
    <div>
        <main className='w-[93vw] lg:w-[70vw] flex flex-col sm:flex-row justify-start items-start
        gap-10 mx-auto my-10'>
            {/* left side */}
            <div className='grid sm:w-[50%] gap-3'>
                <img src={imagesArray[0].url} className='w-full lg:h-[30rem] rounded-xl object-center object-cover border dark:border-none'>  
                </img>
                <div className='grid grid-cols-4 gap-3'>
                   { imagesArray.map(({url,id}) => (
                    <img src={url} key={id} className= "rounded-xl filter hover:brightness-50 cursor-pointer transition-all ease-in-out duration-300 border dark:border-none"  />))
                }
                </div>
            </div>
            {/* right side */}
            <div className='sm:w-[50%] lg:w-[30%]'>
                <div className='pb-5'>
                    <h2 className="font-extrabold text-2xl">My first keyboard</h2>
                    <p className=" text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates, sunt ad non sapiente sit?</p>
                    <div className='flex'>
                        {starGeerator(4.5,"0",15)}
                        <span className="text-md ml-1">(2)</span>
                        </div>
                </div>
                <div className="py-5 border-t border-b">
                    <h3 className="font-bold text-xl">₹560 or ₹ 34/month</h3>
                    <p className="text-sm">Suggested payments with 6 month special financing </p>

                </div>
                <div className='py-5 border-b'>
                    <h3 className="font-bold text-lg">Choose colors</h3>
                    <div className="flex items-center my-2">
                        <Circle 
                        fill={Colors.customIsabelline}
                         strokeOpacity={0}
                          strokeWidth={0.2} 
                           size={40} />

                           <Circle 
                        fill={Colors.customYellow}
                         strokeOpacity={0}
                          strokeWidth={0.2} 
                           size={40} />

                           <Circle 
                        fill={Colors.customGray}
                         strokeOpacity={0}
                          strokeWidth={0.2} 
                           size={40} />
                    </div>


                </div>

                <div className="py-5">
                    <div className='flex gap-3 items-center'>
                    <div className='flex items-center gap-5 bg-gray-100 rounded-full px-3 py-2 w-fit'>
                        <Minus  stroke={Colors.customGray}
                        cursor={"pointer"}
                        onClick={()=> setProductQuantity((qty)=> (qty > 1 ? qty -1 : 1))}
                        />
                        <span className='text-slate-950'>{productQuantity}</span>
                        <Plus stroke={Colors.customGray}  cursor= {"pointer"} onClick={()=> setProductQuantity((qty) => qty < productStock ? qty + 1 :qty)}/>
                    </div>
                    {
                        productStock - productQuantity > 0 && 
                        <div className='grid text-sm font-semibold to-gray-600'>
                            <span>Only <span className="text-customYellow">{productStock-productQuantity} items</span> left!</span>
                            <span>Dont miss it </span>
                            <div/>
                        </div>
                    }
                    

                </div>
                <div className='grid gap-3 my-5'>
                    <div className='flex gap-3'>
                        <Input placeholder="Enter your Pincode Here " onChange ={(e) =>setPincode(e.target.value)} />
                        <Button > Check Availability </Button>
                    </div>
                    <p className='text-sm px-2'>
                        {  AvailabilityMessage}
                    </p>
                    <div className='flex gap-3'>
                        <Button>Buy Now</Button>
                        <Button>Add to Cart</Button>
                    </div>
                    {
                        purchaseProduct && (<div className="my-2 space-y-2"> {/* Fixed className for spacing */}
                            <Input placeholder="Enter your address Here... " onChange={(e) => setAddress(e.target.value)} />
                            <Button>Confirm Order</Button>
                        </div>
                    )}
                </div>
                </div>

            </div>
        </main>
        {/* review section  */}

        <ReviewComponent />
    </div>
    </>
  ) 
}

export default Product

