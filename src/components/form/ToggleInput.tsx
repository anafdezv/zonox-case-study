import React from 'react';
import { BiErrorCircle } from 'react-icons/bi';

export interface ToggleProps {
    label: string[];
    showLabel?: boolean;
    hintText?: string;
    onChange: (value: boolean) => void;
    defaultValue?: boolean;
    error?: boolean;
    errorMessage?: string;
    name: string;
    disabled?: boolean;
}

export const ToggleInput = React.forwardRef<HTMLInputElement, ToggleProps>(
    (
        {
            label,
            showLabel = true,
            hintText,
            onChange,
            defaultValue = false,
            error = false,
            errorMessage = 'form.error.required',
            name,
            disabled = false,
        },
        ref,
    ) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;
            onChange(checked);
        };

        return (
            <div className="w-full flex flex-col gap-2 justify-center items-center">
                <div className="flex items-center gap-3">
                    <label className="flex flex-col md:flex-row gap-2 items-center cursor-pointer">
                        <span
                            className={`hidden md:flex text-sm font-medium ${defaultValue === true ? 'text-gray-600' : 'text-blue-600'} ${showLabel ? '' : 'sr-only'}`}
                        >
                            {label[0]}
                        </span>{' '}
                        <input
                            ref={ref}
                            type="checkbox"
                            onChange={handleChange}
                            name={name}
                            disabled={disabled}
                            defaultChecked={defaultValue}
                            className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                        <span
                            className={`hidden md:flex text-sm font-medium peer-checked:text-blue-600 text-gray-600 ${showLabel ? '' : 'sr-only'}`}
                        >
                            {label[1]}
                        </span>{' '}
                        <span
                            className={`flex md:hidden text-sm font-medium  text-blue-600 ${showLabel ? '' : 'sr-only'}`}
                        >
                            {defaultValue === true ? label[1] : label[0]}
                        </span>
                    </label>

                    {error && <BiErrorCircle className="text-error-500" size="20px" />}
                </div>
                {error && <p className="-mt-1 text-xs text-error-500">{errorMessage}</p>}
                {hintText && <p className="-mt-1 text-xs text-gray-500">{hintText}</p>}
            </div>
        );
    },
);
