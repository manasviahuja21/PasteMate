import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Navbar from './Components/Navbar';
import Pastes from './Components/Pastes';
import ViewPaste from './Components/ViewPaste';
import Home from './Components/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router=createBrowserRouter([
  {
    path:'/',
    element:(
      <div>
        <Navbar />
        <Home />
      </div>
    )
  },
  {
    path:'/pastes',
    element:(
      <div>
        <Navbar/>
        <Pastes/>
      </div>
    )
  },
  {
    path:'/pastes/:id',
    element:(
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    )
  },
  {
    path:'*',
    element:(
      <div>
        PAGE NOT FOUND
      </div>
    )

  }
]);

function App() {
  
//router provider will always be innermost
  return (
    <>
    <ToastContainer theme='dark'/>
    <RouterProvider router={router}>
      <div>
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6 mt-10 text-center">
  <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
  <p className="text-gray-600">This is a sample card styled with Tailwind CSS.</p>
</div>
      </div>
      
      </RouterProvider>
    </>
  )
}

export default App
