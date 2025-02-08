import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const user = false;
    return (
        <div div className='bg-white' >
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-12'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>portal</span></h1>
                </div>

                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
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
                                        <AvatarImage src="https://github.com/shadcn.png" />

                                    </Avatar>

                                </PopoverTrigger>
                                <PopoverContent className='w-80 border border-gray-200 rounded-l shadow-lg p-2 bg-white'>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex gap-4 space-y-2 items-center'>
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />

                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>Poorab patel</h4>
                                                <p className='text-xs text-muted-foreground'>Enim dolor qui exercitation ut aliquip aliquip amet cupidatat do.</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-1 text-gray-600 items-start'>

                                            <div className='flex items-center gap-1'>  <User2></User2> <Button variant='link'>view profile</Button></div>
                                            <div className='flex items-center gap-1'>   <LogOut></LogOut> <Button variant='link'>logout</Button> </div>
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
