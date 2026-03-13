import React from 'react'
import Breadcrumb from '@/components/layout/Breadcrumb';
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from '@/components/layout/table';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Link from 'next/link';

function Page() {
    const header = [
        "JOB #",
        "Date",
        "Action"

    ]
    const body = [{
        "JOB": "1234567890",
        "Date": "2025-03-11",
        "Action": "Completed"
    },
    {
        "JOB": "1234567890",
        "Date": "2025-03-11",
        "Action": "Completed"
    },
    {
        "JOB": "1234567890",
        "Date": "2025-03-11",
        "Action": "Completed"
    },
    {
        "JOB": "1234567890",
        "Date": "2025-03-11",
        "Action": "Completed"
    },
    {
        "JOB": "1234567890",
        "Date": "2025-03-11",
        "Action": "Completed"
    },
    {
        "JOB": "1234567890",
        "Date": "2025-03-11",
        "Action": "Completed"
    },
    ]
    return (
        <>
            <Breadcrumb
                pageTitle="Reports"
                breadcrumbItems={[
                    { label: 'Home', href: '/dashboard' },
                    { label: 'Reports', active: true },
                ]}
            />
            <div className='overflow-x-auto'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {header.map((item, index) => (
                                <TableHead key={index} className={`${(header.length - 1) == index ? 'text-end' : 'text-start'}`}>{item}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {body.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item["JOB"]}</TableCell>
                                <TableCell>{item["Date"]}</TableCell>
                                <TableCell className="text-end" >
                                    <Link
                                        variant="icon"
                                        size="icon"
                                        href={`/dashboard/reports/samples?id=${item["JOB"]}`}

                                    >
                                        <EastOutlinedIcon style={{ fontSize: '20px', color: 'var(--primary)' }} />
                                    </Link>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Page