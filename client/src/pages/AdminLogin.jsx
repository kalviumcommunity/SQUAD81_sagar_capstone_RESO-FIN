import { Button } from '@/components/ui/button'
import React from 'react'

const AdminLogin = () => {
  return (
    <div className="w-[60wh] lg:w-[25vw] mx-auto my-10 grid gap-6">
      <h1 className="text-2xl font-bold text-center">Login into your account</h1>
      <form className="flex flex-col gap-4">
        <input 
          placeholder="Username Here..."  
          type="text" 
          name="username" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <input 
          placeholder="Password here...." 
          type="password" 
          name="password" 
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
       
        <Button type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >Log In </Button>
            
        
      </form>
    </div>
  )
}

export default AdminLogin
