"use client"
import React, { useState, useEffect } from 'react'
import Breadcrumb from '@/components/layout/Breadcrumb';
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from '@/components/layout/table';
import Pagination from '@/components/layout/pagenation';
import { Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { Form, FormInput, FormSelect, FormDatePicker, } from '@/components/forms';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Link from 'next/link';

function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(2);
    const [count, setCount] = useState(0);
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
    ];



    useEffect(() => {
        setCount(body.length);
    }, [body]);

    const form = useForm({
        defaultValues: {
            jobNumber: '',
            nslNumber: '',
            transformerSN: '',
            date: '',
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <Breadcrumb
                pageTitle="Reports"
                breadcrumbItems={[
                    { label: 'Home', href: '/dashboard' },
                    { label: 'Reports', active: true },
                ]}
            />
            <div className='filter-container'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                        <Row className='g-3 w-100 justify-content-center align-items-center'>
                            <Col md={3} xs={12}>
                                <FormInput
                                    control={form.control}
                                    name='jobNumber'
                                    // label='Job Number'
                                    placeholder='Enter Job Number'
                                    type='text'
                                />
                            </Col>
                            <Col md={3} xs={12}>
                                <FormInput
                                    control={form.control}
                                    name='nslNumber'
                                    // label='NSL Number'
                                    placeholder='Enter NSL Number'
                                    type='text'
                                />
                            </Col>
                            <Col md={3} xs={12}>
                                <FormInput
                                    control={form.control}
                                    name='transformerSN'
                                    // label='NSL Number'
                                    placeholder='Enter Transformer SN'
                                    type='text'
                                />
                            </Col>
                            <Col md={3} xs={12} lg={2}>
                                <FormDatePicker
                                    control={form.control}
                                    name='date'
                                    // label='Date'
                                    placeholder='Enter Date'
                                    type='date'
                                />
                            </Col>
                            <Col md={12} xs={12} lg={1} className='d-flex justify-content-end align-items-end  justify-content-md-center  pb-3'>
                                <button type='submit' className='search-btn '>
                                    <SearchOutlinedIcon />

                                </button>
                            </Col>
                        </Row>
                    </form>
                </Form>
            </div>
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
                <Pagination
                    currentPage={currentPage}
                    count={count}
                    limit={limit}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    )
}

export default Page