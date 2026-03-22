import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import { Form, FormInput, FormMultiEmailSelect, FormMultiSelect, FormDatePicker, } from '@/components/forms';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function addOrEditTest({ onClose }) {

    const form = useForm({
        defaultValues: {
            testName: '',
            limit: '',
            unit: '',
            method: '',
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
                    name='testName'
                    label='Test Name'
                    placeholder='Enter Test Name'
                    rules={{ required: 'Test Name is required' }}
                />
                <FormInput
                    control={form.control}
                    type='text'
                    name='limit'
                    label='Limit'
                    placeholder='Enter Limit'

                />
                <FormInput
                    control={form.control}
                    type='text'
                    name='unit'
                    label='Unit'
                    placeholder='Enter Unit'

                />
                <FormInput
                    control={form.control}
                    type='text'
                    name='method'
                    label='Method'
                    placeholder='Enter Method'

                />

                <div className='d-flex justify-content-end align-items-end gap-2 mt-3'>
                    <Button type='submit' className='add-btn'>Save</Button>
                </div>
            </form>
        </Form >
    )
}

export default addOrEditTest