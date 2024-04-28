import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';

export interface InputProps {
    label: string;
    showLabel?: boolean;
    placeholder?: string;
    onChange: (value: React.FormEvent<HTMLInputElement>) => void;
    defaultValue?: string | number;
    error?: boolean;
    errorMessage?: string;
    name: string;
    disabled?: boolean;
    required?: boolean;
    hintText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            showLabel = true,
            placeholder,
            onChange,
            defaultValue,
            error = false,
            errorMessage = 'form.error.required',
            name,
            disabled = false,
            required = false,
            hintText,
        },
        ref,
    ) => {
        return (
            <div className="w-full flex flex-col gap-2">
                <label
                    htmlFor={name}
                    className={`mb-0 text-sm font-medium text-gray-700 ${
                        showLabel ? '' : 'sr-only'
                    }`}
                >
                    {label} {required && '*'}
                </label>
                <div className="w-full relative flex items-center">
                    <input
                        ref={ref}
                        type={'text'}
                        step="any"
                        onChange={onChange}
                        placeholder={placeholder}
                        name={name}
                        disabled={disabled}
                        value={defaultValue}
                        className={`w-full rounded-lg px-3 py-2 border shadow-sm placeholder-gray-500 focus:outline-none focus:border-primary-300 active:border-primary-300 disabled:bg-gray-50 ${
                            error ? 'border-error-300 pr-8' : 'border-gray-300'
                        }`}
                    />

                    {error && (
                        <BiErrorCircle
                            className="text-error-500 absolute right-0 mr-2"
                            size="20px"
                        />
                    )}
                </div>
                {error && errorMessage && (
                    <p className="mb-0 -mt-1 text-xs text-error-500"> {errorMessage}</p>
                )}
                {hintText && <p className="mb-0 -mt-1 text-xs text-gray-500">{hintText}</p>}
            </div>
        );
    },
);
