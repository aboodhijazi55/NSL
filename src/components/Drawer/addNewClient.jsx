import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import { Form, FormInput, FormMultiEmailSelect, FormMultiSelect, FormDatePicker, } from '@/components/forms';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function addNewClient({ onClose }) {

    const form = useForm({
        defaultValues: {
            clinetName: '',
            clinetEmail: [],
            clinetPhone: [{ number: '' }],
        }
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'clinetPhone',
        rules: { required: 'At least one phone number is required' },
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
                    name='clinetName'
                    label='Clinet Name'
                    placeholder='Enter Clinet Name'
                    rules={{ required: 'Name is required' }}
                />
                <FormMultiEmailSelect
                    control={form.control}
                    name='clinetEmail'
                    label='Clinet Emails'
                    placeholder='Enter Clinet Email'
                    rules={{ required: 'email is required' }}
                />
                <div className='mb-3'>
                    <label className='form-label d-block mb-2' style={{ fontWeight: 500 }}>
                        Client Phones
                    </label>
                    {fields.map((field, index) => (
                        <div key={field.id} className='d-flex align-items-start gap-2 mb-2'>
                            <div className='flex-grow-1'>
                                <FormInput
                                    control={form.control}
                                    name={`clinetPhone.${index}.number`}
                                    placeholder='Enter phone number'
                                    type='number'
                                    rules={{ required: index === 0 ? 'At least one phone is required' : false, minLength: { value: 10, message: 'Phone number must be 10 digits' }, maxLength: { value: 10, message: 'Phone number must be 10 digits' } }}
                                />
                            </div>
                            <IconButton
                                type='button'
                                size='small'
                                onClick={() => remove(index)}
                                disabled={fields.length <= 1}
                                aria-label='Remove phone'
                                sx={{ mt: 0.5 }}
                            >
                                <DeleteOutlineIcon fontSize='small' />
                            </IconButton>
                        </div>
                    ))}
                    <Button
                        type='button'
                        variant='outlined'
                        color='var(--primary)'
                        size='small'
                        startIcon={<AddIcon />}
                        onClick={() => append({ number: '' })}
                        sx={{ mt: 0.5 }}
                    >
                        Add Another Phone
                    </Button>
                </div>
                <FormInput
                    control={form.control}
                    name='clinetAddress'
                    label='Clinet Address'
                    placeholder='Enter Clinet Address'
                    rules={{ required: 'Address is required' }}
                />
                <div className='d-flex justify-content-end align-items-end gap-2 mt-3'>
                    <Button type='submit' className='add-btn'>Add</Button>
                </div>
            </form>
        </Form>
    )
}

export default addNewClient