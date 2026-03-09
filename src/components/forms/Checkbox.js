import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
} from './Form';


const Checkbox = React.forwardRef(({ className, id, label, checked, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    if (label) {
        return (
            <div className={`checkbox checkbox-with-icon ${className || ''}`}>
                <input
                    type="checkbox"
                    ref={ref}
                    id={checkboxId}
                    checked={checked}
                    {...props}
                />
                <label htmlFor={checkboxId}>
                    {Boolean(checked) && (
                        <span className="checkbox-icon-wrapper">
                            <CheckIcon className="checkbox-icon checked" />
                        </span>
                    )}
                    <span className="checkbox-label-text">{label}</span>
                </label>
            </div>
        );
    }

    return (
        <input
            type="checkbox"
            ref={ref}
            className={`form-checkbox ${className || ''}`}
            checked={checked}
            {...props}
        />
    );
});

Checkbox.displayName = 'Checkbox';


const FormCheckbox = ({
    control,
    name,
    label,
    description,
    rules,
    defaultValue = false,
    className,
    labelClassName,
    labelStyle,
    descriptionClassName,
    descriptionStyle,
    messageClassName,
    messageStyle,
    itemClassName,
    ...checkboxProps
}) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field }) => (
                <FormItem className={itemClassName || className}>
                    <FormControl>
                        <Checkbox
                            id={name}
                            name={name}
                            label={label}
                            checked={field.value}
                            onChange={(e) => {
                                field.onChange(e.target.checked);
                                if (checkboxProps.onChange) checkboxProps.onChange(e);
                            }}
                            onBlur={field.onBlur}
                            {...checkboxProps}
                        />
                    </FormControl>
                    {description && (
                        <FormDescription
                            className={descriptionClassName}
                            style={descriptionStyle}
                        >
                            {description}
                        </FormDescription>
                    )}
                    <FormMessage
                        className={messageClassName}
                        style={messageStyle}
                    />
                </FormItem>
            )}
        />
    );
};

FormCheckbox.displayName = 'FormCheckbox';

export { Checkbox, FormCheckbox };
