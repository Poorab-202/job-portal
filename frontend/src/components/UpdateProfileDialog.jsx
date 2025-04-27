import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from '../utils/constant.js'
import { toast } from 'sonner';
import axios from 'axios';
import { setUser } from '@/redux/authSlice';

export default function UpdateProfileDialog({ open, setOpen }) {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullName: user?.fullName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.skills?.map(skill => skill),
        file: user?.profile?.resume
    });

    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullName", input.fullName)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("bio", input.bio)
        formData.append("skills", input.skills)
        if (input.file) {
            formData.append("file", input.file);

        }
        console.log(USER_API_END_POINT);
        console.log(user);

        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: {
                    'content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                console.log(res);
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong!");
            }
        }
        setOpen(false);

    }

    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="bg-white sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className="grid gap-4 py-4">
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="fullName" className="text-right">Name</Label>
                                <Input id="fullName" name="fullName" type="text" value={input.fullName} onChange={changeEventHandler} className="col-span-3"></Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right">E-mail</Label>
                                <Input id="email" name="email" type="email" value={input.email} onChange={changeEventHandler} className="col-span-3"></Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="number" className="text-right">Phone Number</Label>
                                <Input id="number" name="number" value={input.phoneNumber} onChange={changeEventHandler} className="col-span-3"></Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className="text-right">Bio</Label>
                                <Input id="bio" name="bio" value={input.bio} onChange={changeEventHandler} className="col-span-3"></Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className="text-right">Skills</Label>
                                <Input id="skills" name="skills" value={input.skill} onChange={changeEventHandler} className="col-span-3"></Input>
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className="text-right">Resume</Label>
                                <Input id="file" name="file" type="file" value={input.resume} onChange={fileChangeHandler} accept="application/pdf" className="col-span-3"></Input>
                            </div>
                        </div>
                        <DialogFooter>
                            {
                                loading ? <Button className="w-full my-3 bg-black text-white"><Loader2 className='mr-2 h-4 w-4 animate-spin'>  </Loader2> Please wait</Button> : <Button variant="outline" type="submit" className="w-full my-3 bg-black text-white hover:bg-gray-800 cursor-pointer">Update</Button>
                            }
                        </DialogFooter>
                    </form>

                </DialogContent>
            </Dialog>

        </div>
    )
}
