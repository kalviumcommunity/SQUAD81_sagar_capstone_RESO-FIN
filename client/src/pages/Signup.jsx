import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [enabled,setEnabled] =useState(false);



  return (
    <>
    <div className="w-[60wh] lg:w-[25vw] mx-auto my-10 grid gap-6">
      <h1 className="text-2xl font-bold text-center">Register your account</h1>
      <form className="flex flex-col gap-4">
        <input 
          placeholder="Enter your name" 
          type="text" 
          name="name" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          placeholder="Enter your email" 
          type="email" 
          name="email" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          placeholder="Enter your password" 
          type="password" 
          name="password" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          placeholder="Enter the phone" 
          type="tel" 
          name="phone" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center space-x-2">
          <Checkbox id="terms"  onCheckedChange={(e)=> setEnabled(e)} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <Button type="submit"  disabled={!enabled}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >Sign Up</Button>
            <div className='flex gap-2 items-center'>
            <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Already have an account ? 
          </label>
          <Link to={"/login"}>
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            Login
          </label>
          </Link>

            </div>
      </form>
    </div>
    </>
  )
}

export default Signup
