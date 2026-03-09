import React from 'react';
import {
    FormField,
    FormItem,
    FormControl,
    FormDescription,
    FormMessage,
} from './Form';


const ToggleButton = React.forwardRef(({
    className,
    id,
    checked,
    value, // Alias for checked
    onChange,
    onToggle, // Alias for onChange/toggle action
    activeLabel = 'Yes',
    inactiveLabel = 'No',
    activeColor,
    inactiveColor,
    colors,
    thumbStyle,
    trackStyle,
    thumbAnimateRange,
    thumbIcon,
    ...props
}, ref) => {
    // Support both checked (bool) and value (flexible)
    const isChecked = !!(checked !== undefined ? checked : value);
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

    const handleToggle = (e) => {
        if (e && e.stopPropagation) e.stopPropagation();

        if (onToggle) {
            onToggle();
        } else if (onChange) {
            onChange({
                target: {
                    name: props.name,
                    id: toggleId,
                    checked: !isChecked,
                    value: !isChecked
                }
            });
        }
    };

    // Resolve Colors for CSS variables
    const aColor = colors?.active?.base || activeColor || '#1abc9c';
    const iColor = colors?.inactive?.base || inactiveColor || '#f1556c';

    // Custom Thumb background if provided
    const thumbBg = isChecked
        ? colors?.activeThumb?.base
        : colors?.inactiveThumb?.base;

    const wrapperStyles = {
        '--active-color': aColor,
        '--inactive-color': iColor,
    };

    // Inline style overrides for track and thumb
    const finalTrackStyle = { ...trackStyle };
    if (isChecked && colors?.active?.base) finalTrackStyle.backgroundColor = colors.active.base;
    if (!isChecked && colors?.inactive?.base) finalTrackStyle.backgroundColor = colors.inactive.base;

    const finalThumbStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...thumbStyle
    };
    if (thumbBg) finalThumbStyle.backgroundColor = thumbBg;

    // Handle custom translate if thumbAnimateRange is provided
    if (thumbAnimateRange) {
        // Force reset positioning from global CSS to avoid compounding offsets
        finalThumbStyle.left = '0px';
        finalThumbStyle.top = '0px';
        finalThumbStyle.transform = `translateX(${isChecked ? thumbAnimateRange[1] : thumbAnimateRange[0]}px)`;

        // Helpfully center vertically if track and thumb heights are known
        if (!thumbStyle?.top && trackStyle?.height && thumbStyle?.height) {
            const hDiff = (parseInt(trackStyle.height) - parseInt(thumbStyle.height)) / 2;
            if (!isNaN(hDiff)) finalThumbStyle.top = `${hDiff}px`;
        }
    }

    const isPro = !!(thumbStyle || trackStyle || thumbAnimateRange);

    return (
        <div
            className={`toggle-button-wrapper ${className || ''}`}
            style={wrapperStyles}
            onClick={handleToggle}
        >
            <input
                type="checkbox"
                ref={ref}
                id={toggleId}
                checked={isChecked}
                onChange={handleToggle}
                className="toggle-input"
                {...props}
            />
            <label
                htmlFor={toggleId}
                className="toggle-label"
                style={finalTrackStyle}
                onClick={(e) => e.preventDefault()} // Let wrapper handle it
            >
                {isPro ? (
                    <div className="pro-inner" style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        justifyContent: trackStyle?.justifyContent || 'space-between',
                        alignItems: 'center',
                        padding: '0 8px',
                        pointerEvents: 'none',
                        color: trackStyle?.color || 'inherit'
                    }}>
                        <div style={{ opacity: isChecked ? 1 : 0, transition: 'opacity 0.2s', flex: 1, textAlign: 'left' }}>
                            {activeLabel}
                        </div>
                        <div style={{ opacity: isChecked ? 0 : 1, transition: 'opacity 0.2s', flex: 1, textAlign: 'right' }}>
                            {inactiveLabel}
                        </div>
                    </div>
                ) : (
                    <span className="toggle-inner">
                        <span className="toggle-active-text">{activeLabel}</span>
                        <span className="toggle-inactive-text">{inactiveLabel}</span>
                    </span>
                )}
                <span
                    className="toggle-switch"
                    style={finalThumbStyle}
                >
                    {thumbIcon}
                </span>
            </label>
        </div>
    );
});

ToggleButton.displayName = 'ToggleButton';


const FormToggleButton = ({
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
    ...toggleProps
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
                        <label className={`form-label ${labelClassName || ''}`} style={labelStyle}>
                            {label}
                        </label>
                    )}
                    <FormControl>
                        <ToggleButton
                            id={name}
                            name={name}
                            checked={field.value}
                            onChange={(e) => {
                                field.onChange(e.target.checked);
                                if (toggleProps.onChange) toggleProps.onChange(e);
                            }}
                            onBlur={field.onBlur}
                            {...toggleProps}
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

FormToggleButton.displayName = 'FormToggleButton';

export { ToggleButton, FormToggleButton };
