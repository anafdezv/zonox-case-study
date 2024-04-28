import { APPLIANCE, SIZE_OF_PROPERTY, TYPE_OF_PROPERTY } from '@/enums';
import { MdApartment } from 'react-icons/md';
import { PiHouseLineBold, PiWarehouse } from 'react-icons/pi';

export const TypeOfPropertyString: { [key in TYPE_OF_PROPERTY]: string } = {
    [TYPE_OF_PROPERTY.APARTMENT]: 'Apartamento',
    [TYPE_OF_PROPERTY.TOWN_HOUSE]: 'Casa adosada',
    [TYPE_OF_PROPERTY.VILLA]: 'Villa',
};

export const TypeOfPropertyIcons: { [key in TYPE_OF_PROPERTY]: JSX.Element } = {
    [TYPE_OF_PROPERTY.APARTMENT]: <MdApartment />,
    [TYPE_OF_PROPERTY.TOWN_HOUSE]: <PiHouseLineBold />,
    [TYPE_OF_PROPERTY.VILLA]: <PiWarehouse />,
};

export const SizeOfPropertyString: { [key in SIZE_OF_PROPERTY]: string } = {
    [SIZE_OF_PROPERTY.SMALL]: 'Pequeño',
    [SIZE_OF_PROPERTY.MEDIUM]: 'Mediano',
    [SIZE_OF_PROPERTY.LARGE]: 'Grande',
    [SIZE_OF_PROPERTY.VERY_LARGE]: 'Muy grande',
};

export const SubSizeOfPropertyString: { [key in SIZE_OF_PROPERTY]: string } = {
    [SIZE_OF_PROPERTY.SMALL]: '50-80 m2',
    [SIZE_OF_PROPERTY.MEDIUM]: '80-110 m2',
    [SIZE_OF_PROPERTY.LARGE]: '110-170 m2',
    [SIZE_OF_PROPERTY.VERY_LARGE]: '>170 m2',
};

export const ApplianceString: { [key in APPLIANCE]: string } = {
    [APPLIANCE.ELECTRIC_BOILER]: 'Caldera eléctrica',
    [APPLIANCE.ELECTRIC_STOVE]: 'Cocina eléctrica',
    [APPLIANCE.DRYER]: 'Secadora',
    [APPLIANCE.DISHWASHER]: 'Lavavajillas',
    [APPLIANCE.HEAT_PUMP]: 'Bomba de calor',
    [APPLIANCE.ELECTRIC_CAR]: 'Cargador coche',
};
