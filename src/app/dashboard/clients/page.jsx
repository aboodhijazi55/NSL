"use client"
import React, { useState } from 'react'
import Breadcrumb from '@/components/layout/Breadcrumb';
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from '@/components/layout/table';
import { Row, Col } from 'reactstrap';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Form, FormInput, FormMultiInput, FormMultiSelect, FormDatePicker, } from '@/components/forms';
import Drawer from '@/components/layout/Drawer';
import AddNewClient from '@/components/Drawer/addNewClient';
function Page() {

    const [open, setOpen] = useState(false);
    const form = useForm({
        defaultValues: {
            clinetName: '',
            clinetEmail: '',
            clinetPhone: '',
        }
    });
    const onSubmit = (data) => {
        console.log(data);
    }
    const header = [
        "Clinet Name",
        "Clinet Email",
        "Clinet Phone",
        "Clinet Address",
        "Action"

    ]
    const body = [{
        "Clinet Name": "Hassan",
        "Clinet Email": ["hassan@gmail.com"],
        "Clinet Phone": ["0799999999", "0788888888"],
        "Clinet Address": "Amman",

    },
    {
        "Clinet Name": "Hassan",
        "Clinet Email": ["hassan@gmail.com", "ahmed@gmail.com"],
        "Clinet Phone": ["0799999999", "0788888888"],
        "Clinet Address": "Amman",
    },
    {
        "Clinet Name": "Hassan",
        "Clinet Email": ["hassan@gmail.com", "ahmed@gmail.com"],
        "Clinet Phone": ["0799999999", "0788888888"],
        "Clinet Address": "Amman",
    },

    ]
    return (
        <>
            <Breadcrumb
                pageTitle="Clients"
                breadcrumbItems={[
                    { label: 'Home', href: '/dashboard' },
                    { label: 'Clients', active: true },
                ]}
            />
            <div className='filter-container'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                        <Row className='g-3 w-100 justify-content-start align-items-center'>
                            <Col col={3}>
                                <FormInput
                                    control={form.control}
                                    name='clinetName'
                                    placeholder='Enter Clinet Name'
                                    type='text'
                                />
                            </Col>
                            <Col col={3}>
                                <FormInput
                                    control={form.control}
                                    name='clinetEmail'
                                    placeholder='Enter Clinet Email'
                                    type='email'
                                />
                            </Col>
                            <Col col={3}>
                                <FormInput
                                    control={form.control}
                                    name='clinetPhone'
                                    placeholder='Enter Clinet Phone'
                                    className='w-100'
                                    type='text'
                                />
                            </Col>

                            <Col col={3} className='d-flex justify-content-end align-items-end gap-2  pb-2'>
                                <button type='submit' className='search-btn '>
                                    <SearchOutlinedIcon />

                                </button>
                                <button type='button' onClick={() => setOpen(true)} className='add-btn'>
                                    Add New Client
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
                                <TableCell>{item["Clinet Name"]}</TableCell>
                                <TableCell>{item["Clinet Email"].map((email, index) => (
                                    <span key={index}>{email} <br /></span>
                                ))}</TableCell>
                                <TableCell>{item["Clinet Phone"].map((phone, index) => (
                                    <span key={index}>{phone} <br /></span>
                                ))}</TableCell>
                                <TableCell>{item["Clinet Address"]}</TableCell>
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
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                title='Add New Client'
            >
                <AddNewClient onClose={() => setOpen(false)} />
            </Drawer>
        </>
    )
}

export default Page