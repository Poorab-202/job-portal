import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

export default function Navbar() {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            const res = await axios.post(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.res.data.message);

        }
    }
    return (
        <div div className='bg-white' >
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-12'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>portal</span></h1>
                </div>

                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                    </ul>

                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline" className="rounded cursor-pointer">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#522a99] text-white rounded cursor-pointer">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger>

                                    <Avatar>
                                        <AvatarImage src={user?.profile?.profilePhoto} />

                                    </Avatar>

                                </PopoverTrigger>
                                <PopoverContent className='w-80 border border-gray-200 rounded-l shadow-lg p-2 bg-white'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-4 space-y-2 items-center'>
                                            <Avatar>
                                                <AvatarImage src={user?.profile?.profilePhoto} />

                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullName}</h4>
                                                <p className='text-xs text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-1 text-gray-600 items-start'>

                                            <div className='flex items-center gap-1'>  <User2></User2> <Button variant='link'><Link to="/profile">view profile</Link></Button></div>
                                            <div className='flex items-center gap-1'>   <LogOut></LogOut> <Button onClick={logoutHandler} variant='link'>logout</Button> </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
