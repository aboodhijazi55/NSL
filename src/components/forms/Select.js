import React from 'react';
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormLabel,
} from './Form';

const Select = React.forwardRef(
  ({ className = '', children, placeholder, options = [], ...props }, ref) => {
    return (
      <select ref={ref} className={`form-select ${className}`} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.length > 0
          ? options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
          : children}
      </select>
    );
  }
);

Select.displayName = 'Select';

const FormSelect = ({
  control,
  name,
  label,
  description,
  options = [],
  placeholder,
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
  children,
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
            <Select
              {...field}
              {...selectProps}
              options={options}
              placeholder={placeholder}
            >
              {children}
            </Select>
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

FormSelect.displayName = 'FormSelect';

export { Select, FormSelect };
