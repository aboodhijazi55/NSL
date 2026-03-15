"use client";
import React, { useState, useRef, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormLabel,
} from './Form';

const MultiSelect = React.forwardRef(
    ({
        className = '',
        options = [],
        placeholder = 'Select...',
        value = [],
        onChange,
        valueKey = 'value',
        labelKey = 'label',
        includeSelectAll = true,
        includeFilter = true,
        dropdownHeight = 200,
        selectAllText = 'Select All',
        disabled = false,
        showSelectedNames = false,
        ...props
    }, ref) => {
        const [isOpen, setIsOpen] = useState(false);
        const [filterText, setFilterText] = useState('');
        const dropdownRef = useRef(null);

        // Handle click outside to close dropdown
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };

            if (isOpen) {
                document.addEventListener('mousedown', handleClickOutside);
            }

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [isOpen]);

        // Filter options based on search text
        const filteredOptions = filterText
            ? options.filter((option) =>
                option[labelKey]?.toLowerCase().includes(filterText.toLowerCase())
            )
            : options;

        // Check if option is selected
        const isSelected = (option) => {
            return value.some((item) => item[valueKey] === option[valueKey]);
        };

        // Check if all options are selected
        const allSelected = options.length > 0 && value.length === options.length;

        // Toggle option selection
        const toggleOption = (option) => {
            if (isSelected(option)) {
                onChange(value.filter((item) => item[valueKey] !== option[valueKey]));
            } else {
                onChange([...value, option]);
            }
        };

        // Toggle select all
        const toggleSelectAll = () => {
            if (allSelected) {
                onChange([]);
            } else {
                onChange([...options]);
            }
        };

        // Get display text for selected items
        const getDisplayText = () => {
            if (value.length === 0) return placeholder;
            if (showSelectedNames) {
                return value.map(item => item[labelKey]).join(', ');
            }
            if (value.length === 1) return value[0][labelKey];
            return `${value.length} selected`;
        };

        return (
            <div className={`picky-container ${className}`} ref={dropdownRef} style={{ position: 'relative' }}>
                {/* Selection Display */}
                <div
                    className={`picky-input ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    style={{
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.875rem',
                        border: '1px solid #dee2e6',
                        borderRadius: '0.375rem',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        backgroundColor: disabled ? '#e9ecef' : 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <span style={{ color: value.length === 0 ? '#6c757d' : '#212529' }}>
                        {getDisplayText()}
                    </span>
                    <ArrowDropDownIcon />
                </div>

                {/* Dropdown */}
                {isOpen && (
                    <div
                        className="picky-dropdown"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            marginTop: '4px',
                            border: '1px solid #dee2e6',
                            borderRadius: '0.375rem',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            zIndex: 1000,
                        }}
                    >
                        {/* Search Filter */}
                        {includeFilter && (
                            <div className="picky-filter-container">
                                <input
                                    type="text"
                                    className="form-control form-control-sm picky-filter-input"
                                    placeholder="Filter..."
                                    value={filterText}
                                    onChange={(e) => setFilterText(e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                    style={{ fontSize: '0.875rem' }}

                                />
                            </div>
                        )}

                        {/* Options List */}
                        <div
                            style={{
                                maxHeight: `${dropdownHeight}px`,
                                overflowY: 'auto',
                            }}
                        >
                            {/* Select All Option */}
                            {includeSelectAll && (
                                <div
                                    className="picky-option"
                                    onClick={toggleSelectAll}
                                    style={{
                                        padding: '5px 12px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        borderBottom: '1px solid #dee2e6',
                                        backgroundColor: allSelected ? '#f0f8ff' : 'white',
                                        fontWeight: 'bold',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!allSelected) e.currentTarget.style.backgroundColor = '#f8f9fa';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!allSelected) e.currentTarget.style.backgroundColor = 'white';
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={allSelected}
                                        className="picky-option-checkbox"
                                        onChange={() => { }}
                                    />
                                    <span>{selectAllText}</span>
                                </div>
                            )}

                            {/* Individual Options */}
                            {filteredOptions.map((option, index) => {
                                const selected = isSelected(option);
                                return (
                                    <div
                                        key={`${option[valueKey]}-${index}`}
                                        className="picky-option"
                                        onClick={() => toggleOption(option)}
                                        style={{
                                            padding: '5px 12px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            backgroundColor: selected ? '#f0f8ff' : 'white',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!selected) e.currentTarget.style.backgroundColor = '#f8f9fa';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!selected) e.currentTarget.style.backgroundColor = 'white';
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selected}
                                            onChange={() => { }}
                                            className="picky-option-checkbox"
                                        />
                                        <span>{option[labelKey]}</span>
                                    </div>
                                );
                            })}

                            {/* No Results */}
                            {filteredOptions.length === 0 && (
                                <div style={{ padding: '12px', textAlign: 'center', color: '#6c757d' }}>
                                    No options found
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

MultiSelect.displayName = 'MultiSelect';

const FormMultiSelect = ({
    control,
    name,
    label,
    description,
    options = [],
    placeholder = 'Select...',
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
    valueKey = 'value',
    labelKey = 'label',
    includeSelectAll = true,
    includeFilter = true,
    dropdownHeight = 200,
    selectAllText = 'Select All',
    disabled = false,
    showSelectedNames = false,
    ...selectProps
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
                        <MultiSelect
                            {...field}
                            {...selectProps}
                            options={options}
                            placeholder={placeholder}
                            valueKey={valueKey}
                            labelKey={labelKey}
                            includeSelectAll={includeSelectAll}
                            includeFilter={includeFilter}
                            dropdownHeight={dropdownHeight}
                            selectAllText={selectAllText}
                            disabled={disabled}
                            showSelectedNames={showSelectedNames}
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

FormMultiSelect.displayName = 'FormMultiSelect';

export { MultiSelect, FormMultiSelect };
