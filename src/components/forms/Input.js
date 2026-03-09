import React from 'react';
import PasswordEyeIcon from './icons/PasswordEyeIcon';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormLabel,
} from './Form';

const Input = React.forwardRef(
    (
        {
            className = '',
            type = 'text',
            icon,
            text,
            iconEnd,
            ...props
        },
        ref
    ) => {
        const [currentType, setCurrentType] = React.useState(type);
        const [isFocused, setIsFocused] = React.useState(false);

        return (
            <div
                className={`input-wrapper ${isFocused ? 'input-focused' : ''} ${className || ''}`}
            >
                {icon && icon}
                {text && <div className="text-holder">{text}</div>}
                <input
                    type={type === 'password' ? currentType : type}
                    ref={ref}
                    {...props}
                    className={`input-class ${type === 'number' ? 'no-spinner' : ''}`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {iconEnd && iconEnd}
                {/* {type === 'password' && (
                    <PasswordEyeIcon
                        isVisible={currentType === 'text'}
                        onClick={() => {
                            setCurrentType(currentType === 'password' ? 'text' : 'password');
                        }}
                    />
                )} */}
            </div>
        );
    }
);

Input.displayName = 'Input';

const FormInput = ({
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
    ...inputProps
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
                        <Input {...field} {...inputProps} className={className} />
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

FormInput.displayName = 'FormInput';

export { Input, FormInput };
