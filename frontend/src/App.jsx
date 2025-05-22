import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/JobsPage'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CreateCompany from './components/admin/CreateCompany'
import CompanySetup from './components/admin/CompanySetup'
import JobsPage from "./components/admin/JobsPage"
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs></Jobs>
  },
  {
    path: "/description/:id",
    element: <JobDescription></JobDescription>
  },
  {
    path: "/browse",
    element: <Browse></Browse>
  }
  ,
  {
    path: "/profile",
    element: <Profile></Profile>
  },
  // now pages of admin will follow
  {
    path: "/admin/companies",
    element: <ProtectedRoute> <Companies></Companies></ProtectedRoute>
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute><CreateCompany></CreateCompany></ProtectedRoute>
  },
  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup></CompanySetup></ProtectedRoute>
  },
  {
    path: "/admin/jobsPage",
    element: <ProtectedRoute><JobsPage></JobsPage></ProtectedRoute>
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute><PostJob></PostJob></ProtectedRoute>
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <ProtectedRoute><Applicants></Applicants></ProtectedRoute>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  )
}

export default App
