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
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Form, FormInput, FormMultiInput, FormMultiSelect, FormDatePicker, } from '@/components/forms';
import Drawer from '@/components/layout/Drawer';
import AddNewUser from '@/components/Drawer/addNewUser';
function Page() {

    const [open, setOpen] = useState(false);
    const form = useForm({
        defaultValues: {
            userName: '',
            userEmail: '',
        }
    });
    const onSubmit = (data) => {
        console.log(data);
    }
    const header = [
        "User Name",
        "User Email",
        "User Phone",
        "User Address",
        "Action"

    ]
    const body = [{
        "UserName": "Hassan",
        "UserEmail": "hassan@gmail.com",
        "UserPhone": "0799999999",
        "UserAddress": "Amman",

    },
    {
        "UserName": "Hassan",
        "UserEmail": "hassan@gmail.com",
        "UserPhone": "0799999999",
        "UserAddress": "Amman",
    },
    {
        "UserName": "Hassan",
        "UserEmail": "hassan@gmail.com",
        "UserPhone": "0799999999",
        "UserAddress": "Amman",
    },

    ]
    return (
        <>
            <Breadcrumb
                pageTitle="Users"
                breadcrumbItems={[
                    { label: 'Home', href: '/dashboard' },
                    { label: 'Users', active: true },
                ]}
            />
            <div className='filter-container'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                        <Row className='g-3 w-100 justify-content-start align-items-center'>
                            <Col col={3}>
                                <FormInput
                                    control={form.control}
                                    name='userName'
                                    placeholder='Enter User Name'
                                    type='text'
                                />
                            </Col>
                            <Col col={3}>
                                <FormInput
                                    control={form.control}
                                    name='userEmail'
                                    placeholder='Enter User Email'
                                    type='email'
                                />
                            </Col>


                            <Col col={3} className='d-flex justify-content-end align-items-end gap-2  pb-2'>
                                <button type='submit' className='search-btn '>
                                    <SearchOutlinedIcon />

                                </button>
                                <button type='button' onClick={() => setOpen(true)} className='add-btn'>
                                    Add New User
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
                                <TableCell>{item["UserName"]}</TableCell>
                                <TableCell>{item["UserEmail"]}</TableCell>
                                <TableCell>{item["UserPhone"]}</TableCell>
                                <TableCell>{item["UserAddress"]}</TableCell>
                                <TableCell className="text-end" >
                                    <CreateOutlinedIcon onClick={() => setOpen(true)} style={{ cursor: 'pointer', fontSize: '20px', color: 'var(--primary)' }} />

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                title='Add New User'
            >
                <AddNewUser onClose={() => setOpen(false)} />
            </Drawer>
        </>
    )
}

export default Page