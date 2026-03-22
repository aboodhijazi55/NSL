
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
import AddOrEditTest from '@/components/Drawer/addOrEditTest';
function Page() {

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    }
    const header = [
        "Test Name",
        "Limit",
        "Unit",
        "Method",
        "Action"

    ]
    const body = [{
        id: 1,
        testName: "acidity",
        limit: "0.03 max ",
        unit: "mgKOH/gm oil",
        method: "ASTM D974",

    },
    {
        id: 2,
        testName: "density",
        limit: "0.910 max ",
        unit: "g/cm3",
        method: "ASTM D4052",
    },
    {
        id: 3,
        testName: "viscosity",
        limit: "100 cSt max ",
        unit: "cSt",
        method: "ASTM D445",
    },
    ]
    return (
        <>
            <Breadcrumb
                pageTitle="Tests"
                breadcrumbItems={[
                    { label: 'Home', href: '/dashboard' },
                    { label: 'Tests', active: true },
                ]}
            />
            <div className='filter-container'>


                <Row className='g-3 w-100 justify-content-start align-items-center'>



                    <Col col={3} className='d-flex justify-content-end align-items-end gap-2  pb-2'>
                        <button type='button' onClick={() => setOpenAdd(true)} className='add-btn'>
                            Add New Test
                        </button>
                    </Col>
                </Row>

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
                                <TableCell>{item.testName}</TableCell>
                                <TableCell>{item.limit}</TableCell>
                                <TableCell>{item.unit}</TableCell>
                                <TableCell>{item.method}</TableCell>
                                <TableCell className="text-end" >
                                    <CreateOutlinedIcon onClick={() => setOpenEdit(true)} style={{ cursor: 'pointer', fontSize: '20px', color: 'var(--primary)' }} />

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Drawer
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                title='Add New Test'
            >
                <AddOrEditTest onClose={() => setOpen(false)} from="add" />
            </Drawer>
            <Drawer
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                title='Edit Test'
            >
                <AddOrEditTest onClose={() => setOpenEdit(false)} from="edit" />
            </Drawer>
        </>
    )
}

export default Page