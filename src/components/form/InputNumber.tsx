import React, { useState } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

export interface InputNumberProps {
    label: string;
    showLabel?: boolean;
    placeholder?: string;
    onChange: (value: number) => void;
    defaultValue?: string | number;
    error?: boolean;
    errorMessage?: string;
    name: string;
    disabled?: boolean;
    required?: boolean;
    hintText?: string;
    formatLabel?: string;
}

export const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
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
            formatLabel = '€',
        },
        ref,
    ) => {
        const [inputValue, setInputValue] = useState<string | undefined>(defaultValue?.toString());

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            setInputValue(newValue);
            const formattedValue = formatInputValue(newValue);
            onChange(Number(formattedValue));
        };

        const handleBlur = () => {
            const formattedValue = formatInputValue(inputValue);
            setInputValue(formattedValue);
            onChange(Number(formattedValue));
        };

        const formatInputValue = (value: string | undefined) => {
            if (!value) return '';
            // Reemplazar comas por puntos para permitir el parseo adecuado
            const parsedValue = value.replace(',', '.');
            // Aplicar la máscara de entrada para mantener solo dos decimales
            const roundedValue = parseFloat(parsedValue).toFixed(2);
            return roundedValue;
        };

        return (
            <div className="w-full flex flex-col gap-2">
                <label
                    htmlFor={name}
                    className={`text-center text-base font-semibold text-gray-900 ${showLabel ? '' : 'sr-only'}`}
                >
                    {label} {required && '*'}
                </label>
                <div className="w-full relative flex items-center">
                    <div className="w-full h-fit flex items-center">
                        <input
                            ref={ref}
                            type={'text'}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder={placeholder}
                            name={name}
                            disabled={disabled}
                            value={inputValue}
                            className={`w-full rounded-l-lg px-3 py-2 border shadow-sm placeholder-gray-500 focus:outline-none focus:border-blue-300 active:border-blue-300 disabled:bg-gray-50 ${
                                error ? 'border-error-300 pr-8' : 'border-gray-300'
                            }`}
                        />
                        <div className="h-full rounded-r-lg px-3 py-2 bg-gray-50 border-r border-t border-b border-gray-300 text-gray-800 font-medium">
                            {formatLabel}
                        </div>
                    </div>

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
