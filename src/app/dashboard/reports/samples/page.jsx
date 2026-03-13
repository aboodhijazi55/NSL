'use client'
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
import { Row, Col, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { Form, FormInput, FormSelect, FormDatePicker, } from '@/components/forms';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Link from 'next/link';
function Page() {
    const header = [
        "NSL #",
        "Transformer SN",
        "Transformer Name",
        "Sample type",
        "Date",
        "Action"

    ]

    const handleView = (sample) => {
        // e.g. navigate to sample detail: router.push(`/dashboard/reports/samples/${sample.NSL}`)
        console.log('View sample:', sample)
    }

    const handleDownload = (sample) => {
        // e.g. trigger file download or call API
        console.log('Download sample:', sample)
    }
    const form = useForm({
        defaultValues: {
            trSN: '',
            trName: '',
            sampleType: '',
            date: '',
        }
    });


    const onSubmit = (data) => {
        console.log('Search data:', data)
    }

    const body = [{
        "NSL": "1234567890",
        "trSN": "1234567890",
        "trName": "Transformer 1",

        "Sample type": "Fuel",
        "Date": "2025-03-11",

    },
    {
        "NSL": "1234567890",
        "trSN": "1234567890",
        "trName": "Transformer 1",
        "Sample type": "Transformer Oil",
        "Date": "2025-03-11",
    },
    {
        "NSL": "1234567890",
        "trSN": "1234567890",
        "trName": "Transformer 1",
        "Sample type": "Lube Oil",
        "Date": "2025-03-11",
    },
    ]
    return (
        <>
            <>
                <Breadcrumb
                    pageTitle="Samples"
                    breadcrumbItems={[
                        { label: 'Home', href: '/dashboard' },
                        { label: 'Reports', href: '/dashboard/reports' },
                        { label: 'Samples', active: true },
                    ]}
                />
                <div className='filter-container'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                            <Row className='g-3 w-100 justify-content-center align-items-center'>
                                <Col md={3} xs={12}>
                                    <FormInput
                                        control={form.control}
                                        name='trSN'
                                        // label='Transformer SN'
                                        placeholder='Enter Transformer SN'
                                        type='text'
                                    />
                                </Col>
                                <Col md={3} xs={12}>
                                    <FormInput
                                        control={form.control}
                                        name='trName'
                                        // label='Transformer Name'
                                        placeholder='Enter Transformer Name'
                                        type='text'
                                    />
                                </Col>
                                <Col md={3} xs={12}>
                                    <FormSelect
                                        control={form.control}
                                        name='sampleType'
                                        // label='Sample Type'
                                        placeholder='Enter Sample Type'
                                        className='w-100'
                                        type='text'
                                        options={[
                                            { label: 'Transformer Oil', value: '1' },
                                            { label: 'Fuel (LFO /HFO)', value: '2' },
                                            { label: 'Gear oil', value: '3' },
                                            { label: 'Engine oil', value: '4' },
                                            { label: 'Hydraulic oil', value: '5' },
                                            { label: 'Other', value: '6' },
                                        ]}
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
                    <Table >

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
                                    <TableCell>{item["NSL"]}</TableCell>
                                    <TableCell>{item["trSN"]}</TableCell>
                                    <TableCell>{item["trName"]}</TableCell>
                                    <TableCell>{item["Sample type"]}</TableCell>
                                    <TableCell>{item["Date"]}</TableCell>
                                    <TableCell className=" d-flex gap-2 justify-content-end" >
                                        <RemoveRedEyeOutlinedIcon
                                            onClick={() => handleView(item)}
                                            style={{ fontSize: '20px', color: 'var(--primary)', cursor: 'pointer' }}
                                        />
                                        <FileDownloadOutlinedIcon
                                            onClick={() => handleDownload(item)}
                                            style={{ fontSize: '20px', color: 'var(--primary)', cursor: 'pointer' }}
                                        />

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>


            </>
        </>
    )
}

export default Page