import {
    APPLIANCE,
    SEASON_DISCRIMINATION,
    SIZE_OF_PROPERTY,
    TIME_DISCRIMINATION,
    TYPE_OF_PROPERTY,
} from '@/enums';

export type FormDataModel = {
    time_discrimination?: TIME_DISCRIMINATION;
    season_discrimination?: SEASON_DISCRIMINATION;
    monthly_avergage_consumption?: number;
    type_of_property?: TYPE_OF_PROPERTY;
    size_of_property?: SIZE_OF_PROPERTY;
    number_of_dwellers?: number;
    list_of_appliances?: APPLIANCE[];
    monthly_avergage_cost?: number;
};
