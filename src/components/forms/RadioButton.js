
import React from 'react';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormLabel,
} from './Form';

// Base Radio Component (for manual composition)
// Uses hoja360 custom radio pattern with hidden input and styled label
const Radio = React.forwardRef(({ className, id, label, variant = 'cd', ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    if (label) {
        return (
            <div className={`radio radio-${variant} ${className || ''}`}>
                <input
                    type="radio"
                    ref={ref}
                    id={radioId}
                    {...props}
                />
                <label htmlFor={radioId}>{label}</label>
            </div>
        );
    }

    return (
        <input
            type="radio"
            ref={ref}
            className={`form-radio ${className || ''}`}
            {...props}
        />
    );
});

Radio.displayName = 'Radio';

const FormRadio = ({
    control,
    name,
    label,
    description,
    options = [],
    rules,
    defaultValue,
    className,
    direction = 'vertical', // 'vertical' or 'horizontal'
    labelStyle,
    labelClassName,
    descriptionClassName,
    descriptionStyle,
    messageClassName,
    messageStyle,
    itemClassName,
    variant = 'cd', // 'cd' or 'full'
    ...radioProps
}) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field }) => (
                <FormItem className={itemClassName || className}>
                    {label && (
                        <FormLabel
                            style={labelStyle}
                            className={labelClassName}
                        >
                            {label}
                        </FormLabel>
                    )}
                    <FormControl>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: direction === 'vertical' ? 'column' : 'row',
                                gap: direction === 'vertical' ? '0.5rem' : '1rem',
                            }}
                        >
                            {options.map((option) => (
                                <Radio
                                    key={option.value}
                                    {...field}
                                    {...radioProps}
                                    id={`${name}-${option.value}`}
                                    label={option.label}
                                    variant={variant}
                                    value={option.value}
                                    checked={field.value === option.value}
                                    onChange={(e) => {
                                        field.onChange(option.value);
                                        if (radioProps.onChange) radioProps.onChange(e);
                                    }}
                                />
                            ))}
                        </div>
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

FormRadio.displayName = 'FormRadio';

export { Radio, FormRadio };
