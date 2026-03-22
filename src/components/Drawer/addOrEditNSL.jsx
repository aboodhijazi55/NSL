import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormInput, FormDatePicker, FormRadio, FormSelect } from '@/components/forms';
import { Button } from '@mui/material';
import { Row, Col } from 'reactstrap';

function AddOrEditNSL({ onClose, from }) {
    const form = useForm({
        defaultValues: {
            jobNo: '',
            sampleDate: '',
            analysisDate: '',
            reportDate: '',
            reportNo: '',
            company: '',
            location: '',
            contactPerson: '',
            manufacture: '',
            manufactureYear: '',
            sampleName: '',
            serialNo: '',
            nslSampleId: '',
            voltage: '',
            powerMva: '',
            oilQty: '',
            oilTemp: '',
            samplePoint: 'bottom',
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        onClose();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                <Row className='g-3 align-items-stretch mb-2' >
                    <Col xs={12} lg={6} className='min-w-0'>
                        <div className='test-container h-100'>
                            <p className='text-muted fw-bold mt-1 mb-2 text-left'>Report dates &amp; numbers</p>
                            <Row className='g-3'>
                                {/* sm={6} only: drawer stays ~600px; viewport xl would force 4 tiny cols and break native date pickers */}
                                <Col xs={12} sm={6}>
                                    <FormInput
                                        control={form.control}
                                        name='jobNo'
                                        label='Job No.'
                                        placeholder='e.g. 070-25244231'
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormDatePicker
                                        control={form.control}
                                        name='sampleDate'
                                        label='Sample Date'
                                        placeholder='Select date'
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormDatePicker
                                        control={form.control}
                                        name='analysisDate'
                                        label='Analysis Date'
                                        placeholder='Select date'
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormDatePicker
                                        control={form.control}
                                        name='reportDate'
                                        label='Report Date'
                                        placeholder='Select date'
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormInput
                                        control={form.control}
                                        name='reportNo'
                                        label='Report No.'
                                        placeholder='e.g. 20250001'
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormInput
                                        control={form.control}
                                        name='nslSampleId'
                                        label='NSL Sample ID'
                                        placeholder='e.g. 2511240'
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='min-w-0'>
                        <div className='test-container h-100'>
                            <p className='text-muted fw-bold mt-1 mb-2 text-left'>Customer</p>
                            <Row className='g-3'>
                                <Col xs={12} sm={6}>
                                    <FormInput
                                        control={form.control}
                                        name='company'
                                        label='Company'
                                        placeholder='Company name'
                                    />
                                </Col>
                                <Col xs={12} sm={6}>
                                    <FormInput
                                        control={form.control}
                                        name='location'
                                        label='Location'
                                        placeholder='Site / address'
                                    />
                                </Col>
                                <Col xs={12}>
                                    <FormInput
                                        control={form.control}
                                        name='contactPerson'
                                        label='Contact / engineer'
                                        placeholder='e.g. Eng. name'
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className='test-container ' style={{ marginTop: '37px' }}>
                    <p className='text-muted fw-bold mt-1 mb-2 text-left'>Sample information</p>
                    <Row className='g-3'>
                        <Col md={12}>
                            <FormSelect
                                control={form.control}
                                name='sampleType'
                                options={[
                                    { value: 'transformerOil', label: 'Transformer Oil' },
                                    { value: 'fuel', label: 'Fuel' },
                                    { value: 'gearOil', label: 'Gear Oil' },
                                    { value: 'engineOil', label: 'Engine Oil' },
                                    { value: 'hydraulicOil', label: 'Hydraulic Oil' },
                                    { value: 'other', label: 'Other' },
                                ]}
                                placeholder='Select Tr data'
                            // here i will add the tr data from the database
                            />

                        </Col>
                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='manufacture'
                                label='Manufacture'
                                placeholder='e.g. ABB'
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='manufactureYear'
                                label='Manufacture Year'
                                placeholder='e.g. 2013'
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='sampleName'
                                label='Sample Name'
                                placeholder='TR name '
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='serialNo'
                                label='Serial No.'
                                placeholder='Serial number'
                            />
                        </Col>

                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='voltage'
                                label='Voltage'
                                placeholder='e.g. 15/132'
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='powerMva'
                                label='Power (MVA)'
                                placeholder='e.g. 90'
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='oilQty'
                                label='Oil Qty'
                                placeholder='e.g. NYNAS 20000 Kg'
                            />
                        </Col>
                        <Col md={3}>
                            <FormInput
                                control={form.control}
                                name='oilTemp'
                                label='Oil Temp.'
                                placeholder='e.g. 32 °C'
                            />
                        </Col>
                        <Col xs={12}>
                            <FormRadio
                                control={form.control}
                                name='samplePoint'
                                label='Sample point'
                                direction='horizontal'
                                options={[
                                    { value: 'top', label: 'Top' },
                                    { value: 'bottom', label: 'Bottom' },
                                    { value: 'oltc', label: 'OLTC' },
                                ]}
                            />
                        </Col>
                    </Row>
                </div>
                <div className='test-container ' style={{ marginTop: '37px' }}>
                    <p className='text-muted fw-bold mt-1 mb-2 text-left'>Sample information</p>
                    <Row className='g-3'>
                        <Col md={3}>
                            <FormSelect
                                control={form.control}
                                name='sampleType'
                                options={[
                                    { value: 'transformerOil', label: 'Transformer Oil' },
                                    { value: 'fuel', label: 'Fuel' },
                                    { value: 'gearOil', label: 'Gear Oil' },
                                    { value: 'engineOil', label: 'Engine Oil' },
                                    { value: 'hydraulicOil', label: 'Hydraulic Oil' },
                                    { value: 'other', label: 'Other' },
                                ]}
                                placeholder='Select Tr data'
                            // here i will add the tr data from the database
                            />
                        </Col>
                    </Row>
                </div>
                <div className='d-flex justify-content-end align-items-end gap-2 mt-4'>
                    <Button type='submit' className='add-btn'>Save</Button>
                </div>
            </form>
        </Form>
    )
}

export default AddOrEditNSL
