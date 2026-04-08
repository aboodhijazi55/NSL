import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormInput, FormSelect } from '@/components/forms';
import { Button } from '@mui/material';
import { createUser } from '@/actions/users';

function addNewUser({ onClose }) {

    const [error, setError] = useState('');

    const form = useForm({
        defaultValues: {
            displayName: '',
            userName: '',
            userPassword: '',
            userPhone: '',
            userAddress: '',
            role: '3',
        }
    });



    const onSubmit = async (data) => {
        setError('');
        const res = await createUser({
            displayName: data.displayName,
            userName: data.userName,
            userPassword: data.userPassword,
            userPhone: data.userPhone,
            userAddress: data.userAddress,
            role: data.role,
        });
        if (!res.ok) {
            setError(res.error ?? 'Could not save user.');
            return;
        }
        onClose();
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-100'>
                <FormInput
                    control={form.control}
                    name='displayName'
                    label='Display Name'
                    placeholder='Enter Display Name'
                    rules={{ required: 'Display Name is required' }}
                />
                <FormInput
                    control={form.control}
                    name='userName'
                    label='User Name'
                    placeholder='Enter User Name'
                    rules={{ required: 'User Name is required' }}
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
                <FormSelect
                    control={form.control}
                    name='role'
                    label='Role'
                    placeholder='Select Role'
                    rules={{ required: 'Role is required' }}
                    options={[
                        { value: '3', label: 'User' },
                        { value: '2', label: 'Admin' },
                        { value: '1', label: 'Super Admin' },
                    ]}
                />
                {error && <p className="text-danger small mb-2">{error}</p>}
                <div className='d-flex justify-content-end align-items-end gap-2 mt-3'>
                    <Button type='submit' className='add-btn' disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Saving…' : 'Save'}
                    </Button>
                </div>
            </form>
        </Form >
    )
}

export default addNewUser