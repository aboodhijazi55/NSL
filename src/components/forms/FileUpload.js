"use client";
import React, { useRef, useState } from 'react';
import { Progress } from 'reactstrap';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
    FormLabel,
} from './Form';

const FileUpload = React.forwardRef(
    (
        {
            className = '',
            accept,
            multiple = false,
            onChange,
            value,
            placeholder = 'Upload',
            showFileName = true,
            maxSize,
            uploadText = 'Upload',
            ...props
        },
        ref
    ) => {
        const fileInputRef = useRef(null);
        const [error, setError] = useState(null);
        const [uploadProgress, setUploadProgress] = useState(0);

        const handleFileChange = (files) => {
            if (!files || files.length === 0) return;

            // Check file size if maxSize is provided
            if (maxSize) {
                const invalidFiles = Array.from(files).filter(
                    (file) => file.size > maxSize
                );
                if (invalidFiles.length > 0) {
                    setError(
                        `File size exceeds ${(maxSize / 1024 / 1024).toFixed(2)}MB`
                    );
                    setUploadProgress(0);
                    return;
                }
            }

            setError(null);

            // Start progress tracking using FileReader
            const file = multiple ? files[0] : files[0];
            if (file) {
                setUploadProgress(10);
                const fileReader = new FileReader();

                fileReader.onprogress = (data) => {
                    if (data.lengthComputable) {
                        const progress = parseInt((data.loaded / data.total) * 100, 10);
                        setUploadProgress(progress);
                    }
                };

                fileReader.onloadend = () => {
                    // File reading complete, set progress to 100%
                    setUploadProgress(100);
                    // Small delay before hiding progress
                    setTimeout(() => {
                        setUploadProgress(0);
                    }, 500);
                };

                fileReader.onerror = () => {
                    setError('Error reading file');
                    setUploadProgress(0);
                };

                // Read file to track progress
                fileReader.readAsBinaryString(file);
            }

            if (onChange) {
                if (multiple) {
                    onChange(Array.from(files));
                } else {
                    onChange(files[0]);
                }
            }
        };

        const handleInputChange = (e) => {
            const files = e.target.files;
            handleFileChange(files);
        };

        const getFileName = () => {
            if (!value) return null;
            if (multiple && Array.isArray(value)) {
                return value.map((file) => file.name).join(', ');
            }
            if (value instanceof File) {
                return value.name;
            }
            return null;
        };

        return (
            <div className={`file-upload-wrapper ${className || ''}`}>
                <span className={`fileInput-span col-md-12 ${error ? 'error-input' : ''}`}>
                    <i className="mdi mdi-progress-upload"></i>{' '}
                    <span className="pointer-cursor task-action-form-fields-font">
                        {uploadText}
                    </span>
                    <input
                        ref={(node) => {
                            fileInputRef.current = node;
                            if (ref) {
                                if (typeof ref === 'function') {
                                    ref(node);
                                } else {
                                    ref.current = node;
                                }
                            }
                        }}
                        type="file"
                        accept={accept}
                        multiple={multiple}
                        onChange={handleInputChange}
                        className="fileInput-width fileInput-opacity"
                        {...props}
                    />
                </span>
                {uploadProgress !== undefined && uploadProgress > 0 && (
                    <Progress
                        striped
                        color="success"
                        value={uploadProgress}
                        className="mb-1 mt-1"
                    >
                        {uploadProgress} %
                    </Progress>
                )}
                {showFileName && getFileName() && (
                    <div className="file-upload-filename mt-2">
                        <span className="file-upload-name">{getFileName()}</span>
                        <button
                            type="button"
                            className="file-upload-remove"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onChange) {
                                    onChange(multiple ? [] : null);
                                }
                                if (fileInputRef.current) {
                                    fileInputRef.current.value = '';
                                }
                                setError(null);
                                setUploadProgress(0);
                            }}
                        >
                            ×
                        </button>
                    </div>
                )}
                {error && (
                    <div className="invalid-feedback d-block mb-1">{error}</div>
                )}
            </div>
        );
    }
);

FileUpload.displayName = 'FileUpload';

const FormFileUpload = ({
    control,
    name,
    label,
    description,
    accept,
    multiple = false,
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
    placeholder,
    showFileName = true,
    maxSize,
    ...fileUploadProps
}) => {
    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => {
                const hasError = !!fieldState.error;

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
                            <FileUpload
                                {...field}
                                {...fileUploadProps}
                                accept={accept}
                                multiple={multiple}
                                placeholder={placeholder}
                                showFileName={showFileName}
                                maxSize={maxSize}
                                value={field.value}
                                onChange={(files) => {
                                    field.onChange(files);
                                }}
                                className={hasError ? 'has-error' : ''}
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

FormFileUpload.displayName = 'FormFileUpload';

export { FileUpload, FormFileUpload };
