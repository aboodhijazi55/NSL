import React from 'react';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormLabel,
} from './Form';

const DatePicker = React.forwardRef(
    (
        {
            className = '',
            icon,
            text,
            iconEnd,
            ...props
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = React.useState(false);

        return (
            <div
                className={`input-wrapper ${isFocused ? 'input-focused' : ''} ${className || ''}`}
            >
                {icon && icon}
                {text && <div className="text-holder">{text}</div>}
                <input
                    type="date"
                    ref={ref}
                    {...props}
                    className="input-class"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {iconEnd && iconEnd}
            </div>
        );
    }
);

DatePicker.displayName = 'DatePicker';

const FormDatePicker = ({
    control,
    name,
    label,
    description,
    rules,
    defaultValue,
    className,
    labelClassName,
    labelStyle,
    descriptionClassName,
    descriptionStyle,
    messageClassName,
    messageStyle,
    itemClassName,
    ...datePickerProps
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
                            className={labelClassName}
                            style={labelStyle}
                        >
                            {label}
                        </FormLabel>
                    )}
                    <FormControl>
                        <DatePicker {...field} {...datePickerProps} />
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

FormDatePicker.displayName = 'FormDatePicker';

export { DatePicker, FormDatePicker };
