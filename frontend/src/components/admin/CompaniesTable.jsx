import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

import { Edit2, MoreHorizontal } from 'lucide-react'

export default function CompaniesTable() {
    return (
        <div>
            <Table>
                <TableCaption>
                    A list of your recent registered companies
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="https://imgs.search.brave.com/ZyNDsok-KqN5jBJ5XqiFz-Ja9ltWWIzEKh_m1aWyc-M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEx/L05ldy1Hb29nbGUt/TG9nby00OTd4NTAw/LmpwZw">
                            </AvatarImage>
                        </Avatar>
                    </TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>20-5-25</TableCell>
                    <TableCell className="text-right">
                        <Popover>
                            <PopoverTrigger><MoreHorizontal className="cursor-pointer"></MoreHorizontal> </PopoverTrigger>
                            <PopoverContent className="w-32">
                                <div className="flex items-center gap-2 w-fit cursor-pointer"><Edit2 className='w-4'></Edit2><span>Edit</span></div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}
