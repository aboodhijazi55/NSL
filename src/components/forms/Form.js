import React from 'react';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';
import './forms.css';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

const Form = FormProvider;


const FormFieldContext = React.createContext({});


const FormField = ({ ...props }) => {
    return (
        <FormFieldContext.Provider value={{ name: props.name }}>
            <Controller {...props} />
        </FormFieldContext.Provider>
    );
};


const FormItemContext = React.createContext({});


const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    const fieldState = getFieldState(fieldContext.name, formState);

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};


const FormItem = React.forwardRef(({ className = '', ...props }, ref) => {
    const id = React.useId();

    return (
        <FormItemContext.Provider value={{ id }}>
            <div
                ref={ref}
                className={`form-item ${className}`}
                {...props}
            />
        </FormItemContext.Provider>
    );
});
FormItem.displayName = 'FormItem';

const FormControl = React.forwardRef(({ children, ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();


    const child = React.Children.only(children);

    return React.cloneElement(child, {
        ref,
        id: formItemId,
        'aria-describedby': !error
            ? formDescriptionId
            : `${formDescriptionId} ${formMessageId}`,
        'aria-invalid': !!error,
        ...props,
        ...child.props,
    });
});
FormControl.displayName = 'FormControl';

const FormDescription = React.forwardRef(({ className = '', style, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
        <div className="form-description-container">
            <InfoOutlineIcon fontSize="9px" color="#6c757d" />
            <p
                ref={ref}
                id={formDescriptionId}
                className={`form-description m-0 p-0 ${className || ''}`}
                style={style}
                {...props}
            />
        </div>
    );
});
FormDescription.displayName = 'FormDescription';


const FormMessage = React.forwardRef(
    ({ className = '', style, children, ...props }, ref) => {
        const { error, formMessageId } = useFormField();
        const body = error ? String(error?.message) : children;

        if (!body) {
            return null;
        }

        return (
            <p
                ref={ref}
                id={formMessageId}
                className={`form-message ${className}`}
                style={style}
                {...props}
            >
                {body}
            </p>
        );
    }
);
FormMessage.displayName = 'FormMessage';


const FormLabel = React.forwardRef(({ className = '', style = {}, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
        <label
            ref={ref}
            className={`form-label ${error ? 'form-label-error' : ''} ${className}`}
            htmlFor={formItemId}
            style={style}
            {...props}
        />
    );
});
FormLabel.displayName = 'FormLabel';

export {
    useFormField,
    Form,
    FormItem,
    FormField,
    FormControl,
    FormDescription,
    FormMessage,
    FormLabel,
};
