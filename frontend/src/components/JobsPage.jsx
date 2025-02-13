import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Jobs() {
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto mt-5'>

                <div className='flex gap-5'>
                    <div className='w-1/5'>
                        <FilterCard />
                    </div>
                    <div className='flex-1 h-[84vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                            {
                                jobArray.map((element, index) => (
                                    <Job key={index} />  // Added a key for optimization
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

