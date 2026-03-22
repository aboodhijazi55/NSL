import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import { Form, FormInput, FormMultiEmailSelect, FormSelect, FormDatePicker, } from '@/components/forms';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function AddOrEditJOB({ onClose, from }) {

    const form = useForm({
        defaultValues: {
            jobNumber: '',
            date: '',
            status: 0,
        }
    });



    const onSubmit = (data) => {
        console.log(data);
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

                <div className='d-flex justify-content-end align-items-end gap-2 mt-3'>
                    <Button type='submit' className='add-btn'>Save</Button>
                </div>
            </form>
        </Form >
    )
}

export default AddOrEditJOB