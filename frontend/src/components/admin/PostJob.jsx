import { Label } from '../../components/ui/label'
import Navbar from '../../components/shared/Navbar'
import React, { useState } from 'react'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '../../utils/constant'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';


const companyArray = [];

function PostJob() {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        numberOfPositions: 0,
        companyId: "",
        position:"Developer"
    })
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const { companies } = useSelector(store => store.company);

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany._id });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: { 'Content-Type': 'application/json' }, withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobsPage");
            }
        } catch (error) {
            console.log(error);
             toast.error(error?.response?.data?.message || "Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Navbar></Navbar>

            <h1 className='font-bold text-2xl text-center my-5'>Job Details</h1>

            <div className='flex items-center justify-center w-screen my-5'>
                <form onSubmit={submitHandler} className="p-8 max-w-4xl border border-gray-200 shadow-lg">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                name="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type="text"
                                name="requirements"
                                value={input.requirements}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input
                                type="number"
                                name="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        <div>
                            <Label>Experience</Label>
                            <Input
                                type="number"
                                name="experience"
                                value={input.experience}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        <div>
                            <Label>No. of Positions</Label>
                            <Input
                                type="number"
                                name="numberOfPositions"
                                value={input.numberOfPositions}
                                onChange={changeEventHandler}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            ></Input>
                        </div>
                        {
                            companies.length > 0 && (
                                <div>
                                    <Label>Company</Label>
                                    <Select
                                        onValueChange={selectChangeHandler}
                                    >
                                        <SelectTrigger className="w-full focus-visible:ring-offset-0 focus-visible:ring-0 my-1">
                                            <SelectValue placeholder="Select a company" />
                                        </SelectTrigger>
                                        <SelectContent className="z-[50]">
                                            <SelectGroup>
                                                {companies.map((company) => (
                                                    <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
                                                        {company.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )
                        }

                    </div>
                    {
                        loading ? <Button className="w-full my-3 bg-black text-white"><Loader2 className='mr-2 h-4 w-4 animate-spin'>  </Loader2> Please wait</Button> : <Button variant="outline" type="submit" className="w-full my-3 bg-black text-white hover:bg-gray-800 cursor-pointer">Post New Job</Button>
                    }
                    {
                        companies.length === 0 && <p className="text-xs text-red-600 font-bold text-center my-3">*Please register a company before posting a job!</p>
                    }
                </form>
            </div>
        </div>
    )
}

export default PostJob