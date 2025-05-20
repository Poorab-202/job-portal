import { useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CompaniesTable from './CompaniesTable'

export default function Companies() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-6xl mx-auto my-10'>
      <div className='flex items-center justify-between my-5'>
        <Input className='w-fit' placeHolder='Filter By Name'></Input>
        <Button onClick={()=> navigate("/admin/companies/create")} className='bg-black text-white px-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-lg cursor-pointer'>New Company</Button>
        </div>
        <CompaniesTable></CompaniesTable>
      </div>
    </div>
  )
}
