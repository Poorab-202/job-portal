import { Label } from '../ui/label'
import Navbar from '../shared/Navbar'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {COMPANY_API_END_POINT} from '../../utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../../redux/companySlice'



export default function CreateCompany() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [companyName, setCompanyName] = useState();
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company))
                toast.success(res.data.message);
                const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
            }

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto">
                <div className='my-10'>
                    <h1 className="font-bold text-2xl">Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your company name? you can change it later</p>
                </div>
                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeHolder="JobHunt, Microsoft, etc.."
                    onChange={(e) => setCompanyName(e.target.value)}
                ></Input>
                <div className='flex items-center gap-2 my-10'>
                    <Button onClick={() => navigate("/admin/companies")} variant="outline" className="rounded-lg transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">Cancel</Button>
                    <Button onClick={registerNewCompany} className="bg-black text-white px-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-lg cursor-pointer">Continue</Button>
                </div>
            </div>
        </div>
    )
}

