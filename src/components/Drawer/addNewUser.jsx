import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import { Form, FormInput, FormMultiEmailSelect, FormMultiSelect, FormDatePicker, } from '@/components/forms';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function addNewUser({ onClose }) {

    const form = useForm({
        defaultValues: {
            userName: '',
            userEmail: '',
            userPassword: '',
            userPhone: '',
            userAddress: '',
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
                    name='userName'
                    label='User Name'
                    placeholder='Enter User Name'
                    rules={{ required: 'User Name is required' }}
                />
                <FormInput
                    control={form.control}
                    type='email'
                    name='userEmail'
                    label='User Email'
                    placeholder='Enter User Email'
                    rules={{ required: 'Email is required' }}
                />
                <FormInput
                    control={form.control}
                    type='text'
                    name='userPassword'
                    label='User Password'
                    placeholder='Enter User Password'
                    rules={{ required: 'Password is required' }}
                />
                <FormInput
                    control={form.control}
                    type='text'
                    name='userPhone'
                    label='User Phone'
                    placeholder='Enter User Phone'
                    rules={{ required: 'Phone is required' }}
                />
                <FormInput
                    control={form.control}
                    name='userAddress'
                    label='User Address'
                    placeholder='Enter User Address'
                    rules={{ required: 'Address is required' }}
                />
                <div className='d-flex justify-content-end align-items-end gap-2 mt-3'>
                    <Button type='submit' className='add-btn'>Save</Button>
                </div>
            </form>
        </Form >
    )
}

export default addNewUser