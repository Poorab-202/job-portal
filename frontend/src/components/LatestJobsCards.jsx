import { Badge } from './ui/badge'

export default function LatestJobsCards({job}) {
  return (
    <div className='p-5 rounded-lg shadow-xl bg-white border border-gray-100 cursor-pointer'>
      <div>
        <h1 className='font-md text-lg'>{job?.company?.name}</h1>
        <p className='text-sm text-gray-500'>{job?.location}</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-xs text-gray-600'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-4 mt-4'>
      <Badge variant="ghost" className="text-blue-700 font-bold">{job?.numberOfPositions} Positions</Badge>
      <Badge variant="ghost" className="text-[#F83002] font-bold">{job?.jobType}</Badge>
      <Badge variant="ghost" className="text-[#7209b7] font-bold">{job?.salary} LPA</Badge>
      </div>
    </div>
  )
}
