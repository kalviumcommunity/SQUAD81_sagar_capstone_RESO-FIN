import React from 'react'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { starGeerator } from '@/constants/helper'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from '../ui/avatar'

const ReviewComponent = () => {
  return (
    <div className='my-10 w-[93vw] lg:w-[70vw] mx-auto '>
        <h3 className='font-extrabold text-2xl text-gray-800 dark:text-white mb-8 text-center'> Reviews </h3>

        {/* review card */}

        <div className='rounded-lg'>
            <h4 className='font-semibold text-lg text-gray-700 dark:text-customIsabelline mb-4'> write a review </h4>
            <Textarea placeholder="Your Review "  className="mb-4"/>
            <div className='flex gap-5'>
                <Input type="number" max="5" min="1" className="mb-4 w-[10rem]" placeholder="Rating (1-5"  />
                <Button>Submit Review</Button>


            </div>

        </div>


        {/* review list */}
        <div className='space-y-6 my-10 '>
 


            <div className='bg-white border border-gray-200 p-6 rounded-2xl shadow-lg dark:bg-zinc-900 dark:border-none'>
                { /* reviewer info */}
                <div className='flex items-center mb-4'>
                <Avatar className="w-10 h-10 rounded-full overflow-hidden">
  <AvatarImage src="https://github.com/shadcn.png" className="object-cover w-full h-full" />
  <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-white">
    CN
  </AvatarFallback>
</Avatar>

                    <div>
                        <h4>virat kohli</h4>
                        <div className='flex items-center mt-1'>
                            { starGeerator(5,"0",15)}
                        </div>
                    </div>
                </div>

                {/* review content */}

                <p className='text-gray-100 text-sm dark:text-customGray'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quo rem atque voluptate, perferendis veniam accusamus!

                </p>

                {/* reply section */}
                <div className=' mt-5 bg-gray-50 p-4 rounded-lg border dark:bg-zinc-800'> 
                    <h5 className='font-bold text-sm text-gray-700 mb-3 dark:text-customYellow'>Replies (2)</h5>
                    <div className='space-y-4'>
                        <div className='flex items-start space-x-4 pb-3 last:border-none'>
                        <img src="https://via.placeholder.com/32"  
                        alt="" 
                        className='w-8 h-8 rounded-full mr-4 border border-gray-300' />

                        <div>
                            <h6 className='font-medium text-gray-800 text-sm dark:text-Colors.customIsabelline capitalize'> tim berg</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        </div>

                    </div>
                
             <div className='mt-4'>
                {/* reply form */}

                <Textarea placeholder="write your reply..."/>
                <Button size="sm" className="mt-4">Reply</Button>


                </div>   
                




                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewComponent
