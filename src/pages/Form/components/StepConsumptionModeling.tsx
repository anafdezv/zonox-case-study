import { CardsInput, CardsMultiInput, ToggleInput } from '@/components';
import { InputNumber } from '@/components/form/InputNumber';
import { APPLIANCE, SIZE_OF_PROPERTY, TYPE_OF_PROPERTY } from '@/enums';
import {
    ApplianceString,
    SizeOfPropertyString,
    SubSizeOfPropertyString,
    TypeOfPropertyIcons,
    TypeOfPropertyString,
} from '@/helpers';
import { useEnumValues } from '@/hooks';
import { FormDataModel } from '@/models';

export const StepConsumptionModeling = ({
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
    const isMonthlyConsumptionValid =
        data?.has_bill === true && data?.monthly_avergage_consumption !== undefined;
    const isInputsComplete =
        data?.type_of_property &&
        data?.size_of_property &&
        data?.number_of_dwellers &&
        data?.list_of_appliances &&
        data?.list_of_appliances.length > 0;

    return (
        <div className="flex flex-col gap-10 px-4 py-8 w-full max-w-[480px] mx-auto">
            <ToggleInput
                label={['No tengo una factura', 'Tengo una factura']}
                defaultValue={data?.has_bill}
                onChange={(e) => {
                    const newData: FormDataModel = { ...data, has_bill: e };
                    setData(newData);
                }}
                name={''}
            />
            {data?.has_bill === true ? (
                <InputNumber
                    formatLabel="kWh"
                    label={'¿Cual es tu consumo medio?'}
                    defaultValue={data?.monthly_avergage_consumption}
                    onChange={(e) => {
                        const newData: FormDataModel = { ...data, monthly_avergage_consumption: e };
                        setData(newData);
                    }}
                    name={'monthly_avergage_consumption'}
                />
            ) : (
                <>
                    <CardsInput
                        style={'vertical'}
                        label={'¿En qué estación tu consumo es mayor?'}
                        onChange={(e) => {
                            const newData = { ...data, type_of_property: e };
                            setData(newData);
                        }}
                        defaultValue={data?.type_of_property}
                        name={'type_of_property'}
                        options={useEnumValues(TYPE_OF_PROPERTY).map((k) => {
                            return {
                                title: TypeOfPropertyString[k as TYPE_OF_PROPERTY],
                                value: k,
                                name: k,
                                icon: TypeOfPropertyIcons[k as TYPE_OF_PROPERTY],
                            };
                        })}
                    />
                    <CardsInput
                        style={'horizontal'}
                        label={'¿De qué tamaño es la vivienda?'}
                        onChange={(e) => {
                            const newData = { ...data, size_of_property: e };
                            setData(newData);
                        }}
                        defaultValue={data?.size_of_property}
                        name={'size_of_property'}
                        options={useEnumValues(SIZE_OF_PROPERTY).map((k) => {
                            return {
                                title: SizeOfPropertyString[k as SIZE_OF_PROPERTY],
                                value: k,
                                name: k,
                                subLabel: SubSizeOfPropertyString[k as SIZE_OF_PROPERTY],
                            };
                        })}
                    />
                    <CardsInput
                        style={'horizontal_mini'}
                        label={'Número de habitaciones'}
                        onChange={(e) => {
                            const newData = { ...data, number_of_dwellers: e };
                            setData(newData);
                        }}
                        defaultValue={data?.number_of_dwellers}
                        name={'number_of_dwellers'}
                        options={Array.from({ length: 5 }, (_, i) => i + 1).map((k) => {
                            return {
                                title: `${k}`,
                                value: k,
                                name: `${k}`,
                                subLabel: k === 5 ? 'o más' : '',
                            };
                        })}
                    />
                    <CardsMultiInput
                        style={'horizontal'}
                        label={'¿Cuántos electrodoméstricos tienes?'}
                        onChange={(e) => {
                            const newData = { ...data, list_of_appliances: e as APPLIANCE[] };
                            setData(newData);
                        }}
                        defaultValue={data?.list_of_appliances}
                        name={'list_of_appliances'}
                        options={useEnumValues(APPLIANCE).map((k) => {
                            return {
                                title: ApplianceString[k as APPLIANCE],
                                value: k,
                                name: k,
                            };
                        })}
                    />
                </>
            )}
            <div className="flex flex-col-reverse lg:flex-row w-full gap-2">
                <button className="btn btn-outline w-full" onClick={onGoBack}>
                    Anterior
                </button>
                <button
                    onClick={onSave}
                    disabled={data?.has_bill ? !isMonthlyConsumptionValid : !isInputsComplete}
                    className="btn btn-primary w-full"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
