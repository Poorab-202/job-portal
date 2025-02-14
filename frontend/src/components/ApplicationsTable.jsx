import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

export default function ApplicationsTable() {
    return (
        <div>

            <Table>
                <TableCaption>Jobs you applied</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2, 3, 4].map((Element, index) => (
                            <TableRow key={index}>
                                <TableCell>14/02/2025</TableCell>
                                <TableCell>Software developer</TableCell>
                                <TableCell>Google</TableCell>
                                <TableCell className="text-right"><Badge variant="ghost" className={'bg-black text-white'}>Accepted</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </div>
    )
}
