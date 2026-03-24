import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormInput, FormSelect, FormDatePicker, } from '@/components/forms';
import { Button } from '@mui/material';
import { createJob } from '@/actions/jobs';

function AddOrEditJOB({ onClose, from, clientId = '' }) {

    const form = useForm({
        defaultValues: {
            jobNumber: '',
            date: '',
            status: 0,
        }
    });
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        setError('');
        const cid = clientId === '' ? null : Number.parseInt(String(clientId), 10);
        const res = await createJob({
            jobNumber: data.jobNumber,
            date: data.date,
            status: Number(data.status),
            clientId: Number.isNaN(cid) ? null : cid,
        });
        if (!res.ok) {
            setError(res.error ?? 'Could not save job.');
            return;
        }
        onClose();
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                <FormInput
                    control={form.control}
                    name='jobNumber'
                    type='Number'
                    label='Job Number'
                    placeholder='Enter Job Number'
                    rules={{ required: 'Job Number is required' }}
                />
                <FormDatePicker
                    control={form.control}
                    name='date'
                    label='Date'
                    placeholder='Select Date'
                    rules={{ required: 'Date is required' }}
                />
                <FormSelect
                    control={form.control}
                    name='status'
                    label='Status'
                    placeholder='Select Status'
                    rules={{ required: 'Status is required' }}
                    options={[
                        { value: 0, label: 'Pending' },
                        { value: 1, label: 'Completed' },
                    ]}
                />

                {error && <p className="text-danger small mb-2">{error}</p>}
                <div className='d-flex justify-content-end align-items-end gap-2 mt-3'>
                    <Button type='submit' className='add-btn'>Save</Button>
                </div>
            </form>
        </Form >
    )
}

export default AddOrEditJOB