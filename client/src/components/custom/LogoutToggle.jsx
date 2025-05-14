import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Link } from 'react-router-dom'
  

const LogoutToggle = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <Avatar className="cursor-pointer">
  
  <AvatarFallback className="text-xl">CN</AvatarFallback>
</Avatar>

  </DropdownMenuTrigger>
  <DropdownMenuContent align="center">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
    <Link to="/orders"></Link>
    <DropdownMenuItem>My Orders</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default LogoutToggle
