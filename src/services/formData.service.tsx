import { FormDataModel } from '@/models';
import axios from 'axios';

export const getInvoiceSimulations = async (data: FormDataModel): Promise<any> => {
    const baseUrl = 'https://cors-anywhere.herokuapp.com/https://zonox.es/invoice-simulations.json';

    const queryParams = new URLSearchParams();

    if (data.has_bill === true && data.monthly_avergage_consumption !== undefined) {
        queryParams.append(
            'monthly_avergage_consumption',
            data.monthly_avergage_consumption.toString(),
        );
    } else {
        if (data.type_of_property) {
            queryParams.append('type_of_property', data.type_of_property);
        }
        if (data.size_of_property) {
            queryParams.append('size', data.size_of_property);
        }
        if (data.number_of_dwellers !== undefined) {
            queryParams.append('number_of_inhabitants', data.number_of_dwellers.toString());
        }
        if (data.list_of_appliances && data.list_of_appliances.length > 0) {
            data.list_of_appliances.forEach((appliance, index) => {
                queryParams.append(`appliances[${index}]`, appliance);
            });
        }
    }

    if (data.time_discrimination) {
        queryParams.append('time_discrimination', data.time_discrimination);
    }
    if (data.season_discrimination) {
        queryParams.append('season_discrimination', data.season_discrimination);
    }

    const url = `${baseUrl}?${queryParams.toString()}`;

    try {
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
    }
};

export default getInvoiceSimulations;
