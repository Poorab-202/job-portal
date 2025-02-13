import React from 'react'
import Navbar from './shared/Navbar';
import Job from './Job';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
export default function Browse() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-6xl mx-auto my-10'>
        <h1 className='font-medium text-lg my-6'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>

          {
            randomJobs.map((element, index) => { 
              return (
                <Job></Job>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}
