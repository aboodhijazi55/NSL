"use client";
import React from 'react';
import { useController } from 'react-hook-form';

export const FormColorPicker = ({ control, name, label, rules }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "#999",
        rules
    });

    return (
        <div className="mb-2">
            {label && <label className="form-label d-block">{label}</label>}
            <input
                type="color"
                value={field.value || "#999"}
                onChange={(e) => field.onChange(e.target.value)}
                style={{
                    width: '125px',
                    height: '35px',
                    padding: '5px',
                    border: 'none',
                    borderRadius: '1px',
                    backgroundColor: '#fff',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px',
                    cursor: 'pointer'
                }}
            />
        </div>
    );
};

