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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useForm } from 'react-hook-form';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Form, FormInput, FormMultiInput, FormMultiSelect, FormDatePicker, } from '@/components/forms';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Drawer from '@/components/layout/Drawer';
import AddOrEditJOB from '@/components/Drawer/addOrEditJOB';
import Modal from '@/components/layout/modal';
import { useSearchParams } from 'next/navigation';
function Page() {
    const searchParams = useSearchParams();
    const cid = searchParams.get('cid') ?? '';
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const form = useForm({
        defaultValues: {
            jobNumber: '',
            date: '',
        }
    });
    const [openModal, setOpenModal] = useState(false);
    const handleDelete = (id) => {
        setOpenModal(true);
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    const header = [
        "JOB #",
        "Date",
        "Status",
        "Action"

    ]
    const body = [{
        id: 1,
        jobNumber: "1234567890",
        status: 1,
        date: "2025-03-11",

    },
    {
        id: 2,
        jobNumber: "1234567890",
        status: 0,
        date: "2025-03-11",
    },
    {
        id: 3,
        jobNumber: "1234567890",
        status: 1,
        date: "2025-03-11",
    },

    ]
    return (
        <>
            <Breadcrumb
                pageTitle="JOBs"
                breadcrumbItems={[
                    { label: 'Home', href: '/dashboard' },
                    { label: 'Clients', href: '/dashboard/clients' },
                    { label: 'Jobs', active: true },
                ]}
            />
            <div className='filter-container'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                        <Row className='g-3 w-100 justify-content-start align-items-center'>
                            <Col col={3}>
                                <FormInput
                                    control={form.control}
                                    name='jobNumber'
                                    placeholder='Enter Job Number'
                                    type='text'
                                />
                            </Col>
                            <Col col={3}>
                                <FormDatePicker
                                    control={form.control}
                                    name='date'
                                    placeholder='Select Date'
                                />
                            </Col>


                            <Col col={3} className='d-flex justify-content-end align-items-end gap-2  pb-2'>
                                <button type='submit' className='search-btn '>
                                    <SearchOutlinedIcon />

                                </button>
                                <button type='button' onClick={() => setOpenAdd(true)} className='add-btn'>
                                    Add New JOB
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
                                <TableCell>{item.jobNumber}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell style={{ color: item.status == 1 ? 'green' : item.status == 0 ? 'orange' : 'red' }}>{item.status == 1 ? 'Completed' : item.status == 0 ? 'Pending' : 'Unknown'}</TableCell>
                                <TableCell className="text-end" >

                                    <EditOutlinedIcon onClick={() => setOpenEdit(true)} style={{ cursor: 'pointer', fontSize: '20px', color: 'var(--primary)' }} />
                                    <DeleteOutlinedIcon onClick={() => setOpenModal(true)} style={{ cursor: 'pointer', fontSize: '20px', color: 'var(--primary)' }} />
                                    <Link
                                        variant="icon"
                                        size="icon"
                                        href={`/dashboard/clients/jobs/nsl?cid=${cid ?? ''}&jid=${item.id}`}
                                        title='Add New NSL#'
                                    >
                                        <AddOutlinedIcon style={{ fontSize: '20px', color: 'var(--primary)' }} />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Drawer
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                title='Add New JOB'
            >
                <AddOrEditJOB onClose={() => setOpenAdd(false)} from="add" />
            </Drawer>
            <Drawer
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                title='Edit JOB'
            >
                <AddOrEditJOB onClose={() => setOpenEdit(false)} from="edit" />
            </Drawer>
            <Modal open={openModal} onClose={() => setOpenModal(false)} title='Delete JOB' subtitle='Are you sure you want to delete this JOB?' onConfirm={() => handleDelete(id)} />


        </>

    )
}

export default Page