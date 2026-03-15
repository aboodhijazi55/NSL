"use client";
import React, { useState, useEffect } from 'react';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormLabel,
} from './Form';

const MultiEmailSelect = React.forwardRef(
    (
        {
            className = '',
            value = [],
            onChange,
            placeholder = "Type or paste email addresses and press `Enter`...",
            disabled = false,
            hasError = false,
            ...props
        },
        ref
    ) => {
        const [items, setItems] = useState(Array.isArray(value) ? value : []);
        const [inputValue, setInputValue] = useState('');
        const [error, setError] = useState(null);


        useEffect(() => {
            setItems(Array.isArray(value) ? value : []);
        }, [value]);


        const isEmail = (email) => {
            return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
        };


        const isInList = (email) => {
            return items.includes(email);
        };


        const isValidEmail = (email) => {
            let errorMessage = null;

            if (isInList(email)) {
                errorMessage = `${email} has already been added.`;
            } else if (!isEmail(email)) {
                errorMessage = `${email} is not a valid email address.`;
            }

            if (errorMessage) {
                setError(errorMessage);
                return false;
            }

            return true;
        };

        // Handle input change
        const handleChange = (evt) => {
            setInputValue(evt.target.value);
            setError(null);
        };

        // Handle key press (Enter, Tab, comma)
        const handleKeyDown = (evt) => {
            if (['Enter', 'Tab', ','].includes(evt.key)) {
                evt.preventDefault();
                const trimmedValue = inputValue.trim();

                if (trimmedValue && isValidEmail(trimmedValue)) {
                    const newItems = [...items, trimmedValue];
                    setItems(newItems);
                    setInputValue('');
                    if (onChange) onChange(newItems);
                }
            }
        };

        // Handle paste
        const handlePaste = (evt) => {
            evt.preventDefault();
            const paste = evt.clipboardData.getData('text');
            const emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

            if (emails) {
                const toBeAdded = emails.filter((email) => !isInList(email));
                const newItems = [...items, ...toBeAdded];
                setItems(newItems);
                if (onChange) onChange(newItems);
            }
        };

        // Handle delete
        const handleDelete = (item) => {
            const newItems = items.filter((i) => i !== item);
            setItems(newItems);
            if (onChange) onChange(newItems);
        };

        const isEmptyError = hasError && (!items || items.length === 0);
        const showError = error || isEmptyError;

        return (
            <div className={`multi-email-select ${className}`}>
                <div
                    className={`cc-bcc-input-view ${showError ? 'has-error-input-email' : ''}`}
                >
                    {items.map((item) => (
                        <div className="cc-bcc-tag-item" key={item}>
                            {item}
                            <button
                                type="button"
                                className="button"
                                onClick={() => handleDelete(item)}
                                disabled={disabled}
                                aria-label={`Remove ${item}`}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                    <input
                        ref={ref}
                        className={`input_cc_bcc ${showError ? 'has-error' : ''} w-100`}
                        value={inputValue}
                        placeholder={placeholder}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        onPaste={handlePaste}
                        autoComplete="off"
                        list="emailList"
                        disabled={disabled}
                        {...props}
                    />
                    <datalist id="emailList"></datalist>
                </div>

                {error && <p className="error-cc-bcc">{error}</p>}
                {isEmptyError && !error && (
                    <p className="error-cc-bcc">Please add at least one email address.</p>
                )}
            </div>
        );
    }
);

MultiEmailSelect.displayName = 'MultiEmailSelect';

const FormMultiEmailSelect = ({
    control,
    name,
    label,
    description,
    placeholder = "Type or paste email addresses and press `Enter`...",
    rules,
    defaultValue = [],
    className,
    labelClassName,
    labelStyle,
    descriptionClassName,
    descriptionStyle,
    messageClassName,
    messageStyle,
    itemClassName,
    disabled = false,
    ...inputProps
}) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => {
                const fieldValue = field.value || [];
                const hasError = !!fieldState?.error;

                return (
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
                            <MultiEmailSelect
                                {...inputProps}
                                value={fieldValue}
                                onChange={(newValue) => {
                                    field.onChange(newValue);
                                }}
                                placeholder={placeholder}
                                disabled={disabled}
                                hasError={hasError}
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
                );
            }}
        />
    );
};

FormMultiEmailSelect.displayName = 'FormMultiEmailSelect';

export { MultiEmailSelect, FormMultiEmailSelect };
