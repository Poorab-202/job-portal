
import React from 'react'
import { Badge } from './ui/badge'

export default function LatestJobsCards() {
  return (
    <div className='p-5 rounded-lg shadow-xl bg-white border border-gray-100 cursor-pointer'>
      <div>
        <h1 className='font-md text-lg'>company name</h1>
        <p className='text-sm text-gray-500'>india</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>job title</h1>
        <p className='text-xs text-gray-600'>Minim tempor sunt exercitation dolor excepteur et nulla aliquip.</p>
      </div>
      <div className='flex items-center gap-4 mt-4'>
      <Badge variant="ghost" className="text-blue-700 font-bold">12 positions</Badge>
      <Badge variant="ghost" className="text-[#F83002] font-bold">Part time</Badge>
      <Badge variant="ghost" className="text-[#7209b7] font-bold">24 LPA</Badge>
      </div>
    </div>
  )
}
