import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'



export default function Job() {
  return (
    <div className='p-5 border border-gray-200 rounded-2xl shadow-xl bg-white '>
      <div className='flex items-center justify-between'>
        <p className='text-xs'>2 days ago</p>
        <Button variant='outline' className='rounded-full cursor-pointer hover:bg-gray-100' size='icon'><Bookmark></Bookmark></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <Button>
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/ZyNDsok-KqN5jBJ5XqiFz-Ja9ltWWIzEKh_m1aWyc-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw">
            </AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium'>Company Name</h1>
          <p className='text-sm'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Mollit ipsum exercitation nulla culpa. Consequat commodo ullamco aliquip voluptate. Consequat commodo ullamco aliquip voluptate.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
      <Badge variant="ghost" className="text-blue-700 font-bold text-xs">12 positions</Badge>
      <Badge variant="ghost" className="text-[#F83002] font-bold">Part time</Badge>
      <Badge variant="ghost" className="text-[#7209b7] font-bold">24 LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
     <Button variant="outline" className="rounded-xl cursor-pointer">Save For Later</Button>
     <Button className="bg-black text-white px-4 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-lg cursor-pointer">Details</Button>
      </div>
    </div>
  )
}
