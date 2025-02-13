import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/JobsPage'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs></Jobs>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <RouterProvider router ={appRouter}></RouterProvider>
    </>
  )
}

export default App
