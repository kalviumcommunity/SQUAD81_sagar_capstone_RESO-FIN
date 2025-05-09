import { Button } from '@/components/ui/button'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  



  return (
    <div className="w-[60wh] lg:w-[25vw] mx-auto my-10 grid gap-6">
      <h1 className="text-2xl font-bold text-center">Login into your account</h1>
      <form className="flex flex-col gap-4">
        <input 
          placeholder="Enter your name" 
          type="text" 
          name="name" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input 
          placeholder="Enter your password" 
          type="password" 
          name="password" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
       
        <Button type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >Sign Up</Button>
            <div className='flex gap-2 items-center'>
            <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Don't have an account ? 
          </label>
          <Link to={"/signup"}>
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            SignUp
          </label>
          </Link>

            </div>
      </form>
    </div>
  )
}

export default Login
