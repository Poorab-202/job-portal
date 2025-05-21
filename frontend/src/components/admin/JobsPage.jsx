import { useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '../../hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '../../redux/jobSlice'

export default function JobsPage() {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchJobByText(input));
  },[input])

  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
          <Input onChange={(e) => setInput(e.target.value)} className='w-fit' placeHolder='Filter By Name'></Input>
          <Button onClick={() => navigate("/admin/jobs/create")} className='bg-black text-white px-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-lg cursor-pointer'>New Job</Button>
        </div>
        <AdminJobsTable></AdminJobsTable>
      </div>
    </div>
  )
}
