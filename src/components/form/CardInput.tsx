import React from 'react';

export interface CardsInputProps {
    label: string;
    showLabel?: boolean;
    onChange: (value: any) => void;
    defaultValue?: any;
    error?: boolean;
    errorMessage?: string;
    name: string;
    disabled?: boolean;
    required?: boolean;
    style?: 'vertical' | 'horizontal';
    options: CardOptionsProps[];
}

export type CardOptionsProps = {
    title: string;
    value: any;
    icon?: JSX.Element;
    name: string;
};

export const CardsInput = React.forwardRef<HTMLInputElement, CardsInputProps>(
    (
        {
            label,
            showLabel = true,
            onChange,
            defaultValue,
            error = false,
            errorMessage = 'form.error.required',
            name,
            style = 'vertical',
            disabled = false,
            required = false,
            options,
        },
        ref,
    ) => {
        return (
            <div className="w-full flex flex-col gap-4">
                <label
                    htmlFor={name}
                    className={`text-center text-base font-semibold text-gray-900 ${showLabel ? '' : 'sr-only'}`}
                >
                    {label} {required && '*'}
                </label>

                <div
                    ref={ref}
                    className={`w-full flex gap-2 ${style === 'horizontal' ? 'grid grid-cols-2' : 'flex-col'}`}
                >
                    {options.map((o) => (
                        <button
                            key={`${o.name}-${o.value}`}
                            onClick={() => onChange(o.value)}
                            disabled={disabled}
                            type="button"
                            className={` ${style === 'horizontal' ? 'flex-col justify-center  text-center' : 'justify-start  text-start'}
                            flex items-center gap-2 w-full px-4 py-2 rounded-lg cursor-pointer border  ${
                                o.value === defaultValue
                                    ? 'text-blue-800 border-2 border-blue-600 bg-blue-50'
                                    : 'border-gray-300  hover:text-gray-700 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all'
                            }`}
                        >
                            {o.icon && (
                                <span
                                    className={` border-2 rounded-full h-8 w-8 p-1.5 flex items-center justify-center text-xl ${
                                        o.value === defaultValue
                                            ? 'text-blue-600 border-blue-100 bg-blue-200'
                                            : 'border-gray-100  text-gray-600 bg-gray-200 '
                                    }`}
                                >
                                    {o.icon}
                                </span>
                            )}
                            <p className="w-full text-sm lg:text-base font-semibold pt-0.5">
                                {o.title}
                            </p>
                        </button>
                    ))}
                </div>
                {error && errorMessage && (
                    <p className="-mt-1 text-xs text-red-600">{errorMessage}</p>
                )}
            </div>
        );
    },
);
