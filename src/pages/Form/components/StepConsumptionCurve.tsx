import { CardsInput } from '@/components/form/CardInput';
import { SEASON_DISCRIMINATION, TIME_DISCRIMINATION } from '@/enums';
import { ConsumeMomentIcons, ConsumeMomentString, SeasonIcons, SeasonString } from '@/helpers';
import { useEnumValues } from '@/hooks';
import { FormDataModel } from '@/models';

export const StepConsumptionCurve = ({
    data,
    setData,
    onSave,
}: {
    data?: FormDataModel;
    setData: (data: FormDataModel) => void;
    onSave: () => void;
}) => {
    return (
        <div className="flex flex-col gap-10 px-4 py-8 w-full max-w-[400px] mx-auto">
            <CardsInput
                label={'¿Cuando consumes más energía?'}
                onChange={(e) => {
                    const newData = { ...data, time_discrimination: e };
                    setData(newData);
                }}
                defaultValue={data?.time_discrimination}
                name={'time_discrimination'}
                options={useEnumValues(TIME_DISCRIMINATION).map((k) => {
                    return {
                        title: ConsumeMomentString[k as TIME_DISCRIMINATION],
                        value: k,
                        name: k,
                        icon: ConsumeMomentIcons[k as TIME_DISCRIMINATION],
                    };
                })}
            />
            <CardsInput
                style={'horizontal'}
                label={'¿En qué estación tu consumo es mayor?'}
                onChange={(e) => {
                    const newData = { ...data, season_discrimination: e };
                    setData(newData);
                }}
                defaultValue={data?.season_discrimination}
                name={'season_discrimination'}
                options={useEnumValues(SEASON_DISCRIMINATION).map((k) => {
                    return {
                        title: SeasonString[k as SEASON_DISCRIMINATION],
                        value: k,
                        name: k,
                        icon: SeasonIcons[k as SEASON_DISCRIMINATION],
                    };
                })}
            />
            <div className="flex flex-col-reverse lg:flex-row w-full gap-2">
                <button className="btn btn-outline" disabled>
                    Anterior
                </button>
                <button
                    onClick={onSave}
                    disabled={!data?.season_discrimination || !data.time_discrimination}
                    className="btn btn-primary"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};
