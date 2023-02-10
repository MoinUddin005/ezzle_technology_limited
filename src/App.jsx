import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './component/Layout/Layout';
import Home from '../src/component/Home/Home'

function App() {
 
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout></Layout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App
