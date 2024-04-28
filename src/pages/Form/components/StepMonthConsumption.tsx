import { CheckboxInput, InputNumber } from '@/components';
import { FormDataModel } from '@/models';
import { useState } from 'react';

export const StepMonthCost = ({
    data,
    setData,
    onSave,
    onGoBack,
}: {
    data?: FormDataModel;
    setData: (data: FormDataModel) => void;
    onSave: () => void;
    onGoBack: () => void;
}) => {
    const [disableCost, setDisableCost] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-10 px-4 py-8 w-full max-w-[480px] mx-auto">
            <InputNumber
                formatLabel="€"
                disabled={disableCost}
                label={'¿Cuánto pagas aproximadamente al mes?'}
                defaultValue={data?.monthly_avergage_cost}
                onChange={(e) => {
                    const newData: FormDataModel = { ...data, monthly_avergage_cost: e };
                    setData(newData);
                }}
                name={'monthly_avergage_cost'}
            />
            <CheckboxInput
                label={'No lo sé'}
                defaultValue={disableCost}
                onChange={(e) => {
                    setDisableCost(e);
                    const newData: FormDataModel = { ...data, monthly_avergage_cost: undefined };
                    setData(newData);
                }}
                name={'disable_cost'}
            />
            <div className="flex flex-col w-full gap-2">
                <button
                    onClick={onSave}
                    disabled={!disableCost && !data?.monthly_avergage_cost}
                    className="btn btn-primary w-full"
                >
                    Descubre tus tarifas
                </button>
                <button className="btn btn-outline w-full" onClick={onGoBack}>
                    Anterior
                </button>
            </div>
        </div>
    );
};
