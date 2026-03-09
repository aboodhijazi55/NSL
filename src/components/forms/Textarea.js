import React from 'react';
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from './Form';

const Textarea = React.forwardRef(
  ({ className = '', rows = 3, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={`form-textarea ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

const FormTextarea = ({
  control,
  name,
  label,
  description,
  rules,
  defaultValue,
  className,
  rows = 3,
  labelClassName,
  labelStyle,
  descriptionClassName,
  descriptionStyle,
  messageClassName,
  messageStyle,
  itemClassName,
  ...textareaProps
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
            <Textarea {...field} {...textareaProps} rows={rows} />
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

FormTextarea.displayName = 'FormTextarea';

export { Textarea, FormTextarea };
