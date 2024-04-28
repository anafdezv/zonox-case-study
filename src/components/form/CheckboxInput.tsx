import { BiErrorCircle } from 'react-icons/bi';

export interface CheckboxProps {
    label: string;
    showLabel?: boolean;
    hintText?: string;
    onChange: (value: boolean) => void;
    defaultValue?: boolean;
    error?: boolean;
    errorMessage?: string;
    name: string;
    disabled?: boolean;
}

export const CheckboxInput = ({
    label,
    showLabel = true,
    hintText,
    onChange,
    defaultValue = false,
    error = false,
    errorMessage = 'form.error.required',
    name,
    disabled = false,
}: CheckboxProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        onChange(checked);
    };

    return (
        <div className="w-full flex flex-col gap-2">
            <div className="w-full relative flex items-center gap-2">
                <input
                    type="checkbox"
                    onChange={handleChange}
                    name={name}
                    disabled={disabled}
                    checked={defaultValue}
                    className={`accent-blue-600 checked:bg-blue-600 shadow-sm active:outline-none focus:outline-blue focus:border-blue-300 active:border-blue-300 disabled:bg-gray-50 ${
                        error ? 'border-error-300 pr-8' : 'border-gray-300'
                    }`}
                />
                <div className="flex flex-col gap-1">
                    <label
                        htmlFor={name}
                        className={`font-medium text-gray-700 ${showLabel ? '' : 'sr-only'}`}
                    >
                        {label}
                    </label>
                </div>

                {error && (
                    <BiErrorCircle className="text-error-500 absolute right-0 mr-2" size="20px" />
                )}
            </div>
            {error && <p className="-mt-1 text-xs text-error-500">{errorMessage}</p>}
            {hintText && <p className="-mt-1 text-xs text-gray-500">{hintText}</p>}
        </div>
    );
};
