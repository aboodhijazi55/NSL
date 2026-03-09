import React from 'react';

const Label = React.forwardRef(({ className, style = {}, ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={`form-label ${className || ''}`}
            style={style}
            {...props}
        />
    );
});
Label.displayName = 'Label';

export { Label };
