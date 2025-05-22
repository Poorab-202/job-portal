import { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'


export default function Jobs() {

    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filerJobs, setFilterJobs] = useState(allJobs);
    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) || job.description.toLowerCase().includes(searchedQuery.toLowerCase()) || job.location.toLowerCase().includes(searchedQuery.toLowerCase());
            })
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery])

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
                                filerJobs.length <= 0 ? <span>No jobs available.</span> : filerJobs.map((job) => (
                                    <Job key={job._id} job={job} />  // Added a key for optimization
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

