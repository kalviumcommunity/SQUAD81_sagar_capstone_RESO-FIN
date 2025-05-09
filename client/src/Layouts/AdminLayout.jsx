import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from '@/components/custom/AppSidebar'


const AdminLayout = ({children}) => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <div className='sm:my-10 sm:mx-10'>{children}</div>
    </main>
  </SidebarProvider>
  )
}

export default AdminLayout
