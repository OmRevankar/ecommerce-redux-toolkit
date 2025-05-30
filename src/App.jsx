import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from './Pages/Cart'

const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/cart',
      element : <Cart/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
