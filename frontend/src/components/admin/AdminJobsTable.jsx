import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminJobsTable() {
    const navigate = useNavigate();
    const {allAdminJobs, searchJobByText} = useSelector(store=>store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    useEffect(() => {
        const filteredjobs = allAdminJobs?.length >= 0 && allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true;
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || 
            job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

        });
        setFilterJobs(filteredjobs)
    }, [allAdminJobs, searchJobByText])

    return (
        <div>
            <Table>
                <TableCaption>
                    A list of your recent posted jobs
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterJobs?.map((job) => (
                            <tr>
                                
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal className="cursor-pointer"></MoreHorizontal> </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={()=> navigate(`${job._id}`)} className="flex items-center gap-2 w-fit cursor-pointer"><Edit2 className='w-4'></Edit2><span>Edit</span></div>
                                            <div onClick={()=> navigate(`/admin/jobs/${job._id}/applicants`)} className="flex items-center gap-2 w-fit cursor-pointer"><Eye className='w-4'></Eye><span>Applicant</span></div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>
                        ))

                    }

                </TableBody>
            </Table>
        </div>
    )
}
