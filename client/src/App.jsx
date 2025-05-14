import { useState } from 'react'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom'


import Home from './pages/Home'
import Navbar from './components/custom/Navbar'
import { ThemeProvider } from './components/provider/theme-provider'
import Footer from './components/custom/Footer'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import AdminLogin from './pages/AdminLogin'
import Error from './pages/Error'
import Success from './pages/Success'
import RootLayout from './Layouts/RootLayout'
import CheckoutProduct from './components/custom/CheckoutProduct'
import AdminLayout from './Layouts/AdminLayout'
import Analytics from './components/custom/Analytics'
import Settings from './components/custom/Settings'
import CreateProducts from './components/custom/CreateProducts'
import AllProducts from './components/custom/AllProducts'
import Orders from './components/custom/Orders'
import { Provider } from 'react-redux'
import { store } from './redux/store'



function App() {
  const [count, setCount] = useState(0)
  const router =createBrowserRouter([
     {
      path :"/product",
      element :(<>
      <Navbar/>
      <Product/>
      <Footer/>
      </>),
    },
     {
      path :"/",
      element :(
        <RootLayout  children={<Home />} /> 

      ),
    }
    ,{
      path : "/admin/dashboard",
      element : <AdminLayout children={<AllProducts />}/>
    }
    ,{
      path : "/admin/dashboard/all-products",
      element : <AdminLayout children={<CreateProducts />}/>
    }
    ,{
      path : "/admin/dashboard/analytics",
      element : <AdminLayout children={<Analytics />}/>
    }
    ,{
      path : "/admin/dashboard/settings",
      element : <AdminLayout children={<Settings />}/>
    }
    ,{
      path : "/admin/dashboard/Orders",
      element : <AdminLayout children={<Orders />}/>
    }
    ,
    { 
      path :"/signup",
      element :(
        <RootLayout  children={<Signup />}/> 
      ),
    },
      {path :"/checkout",
      element :(
      <RootLayout  children ={<Checkout />}/>),
    }, {
      path :"/admin/login",
      element :( <RootLayout  children={<AdminLogin />}/> ),
    },
    {
      path :"/*",
      element :(<>
      
      <Error />
    
      </>),
    },
    , {
      path :"/login",
      element :(
        <RootLayout  children={<Login />}/> 
      ),
    },
    , {
      path :"/success",
      element :(<>
      
      <Success />
    
      </>),
    },
  ])

  return (
    <>
    <ThemeProvider>
      <Provider store={store}> 
        <RouterProvider router={router}/>
    </Provider>
    </ThemeProvider>
     
    </>
  )
}

export default App
