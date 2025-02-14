import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { DockIcon, Mail, Pen, Phone } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import ApplicationsTable from './ApplicationsTable'

const skills = ["c++", "GitHub", "web development", "docker"];

export default function Profile() {
    return (
        <div>

            <Navbar></Navbar>
            <div className='max-w-6xl bg-white border border-gray-300 shadow rounded-lg mx-auto p-10 mt-10'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4 my-2'>
                        <Avatar className="h-20 w-20">
                            <AvatarImage src='https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg' alt='profile'>

                            </AvatarImage>
                        </Avatar>
                        <div>
                            <h1 className='text-lg'>Full Name</h1>
                            <p className='text-sm text-gray-600'>Fugiat velit adipisicing anim culpa cillum laboris sit culpa. Mollit reprehenderit consectetur et duis ullamco nulla sit aliqua voluptate.</p>
                        </div>
                    </div>
                    <Button variant="outline" className="text-right hover:bg-gray-100 cursor-pointer"><Pen></Pen></Button>
                </div>
                <div className='flex gap-4 items-center mt-2'><Mail></Mail> <p>poorabpatel@gmail.com</p></div>
                <div className='flex gap-4 items-center mt-2'> <Phone></Phone> <p>9278383254</p></div>
                <div className='mt-2'>
                    <h1>Skills</h1>

                    {
                        skills.length !== 0 ?
                            skills.map((element, index) => (
                                <Badge variant={'ghost'} className="bg-black text-white mr-2">{element}</Badge>
                            )) : <span>NA</span>
                    }
                </div>
                <div className='flex gap-4 items-center mt-3'><DockIcon></DockIcon><a className="hover:cursor-pointer underline">Resume</a></div>
            </div>

            <div className='max-w-4xl mx-auto bg-white rounded-2xl mt-10'>
                <h1 className='text-xl font-medium mb-4 mx-auto text-center'>Applied Jobs</h1>
                <ApplicationsTable></ApplicationsTable>
            </div>
        </div>
    )
}
