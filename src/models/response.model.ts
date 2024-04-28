export type InvoiceSimulationsResponse = {
    invoice_simulations: {
        monthtly_avg_power_cost: number;
        monthtly_avg_energy_cost: number;
        monthtly_avg_other_cost: number;
        monthtly_avg_surplus_earnings: number;
        monthtly_avg_lost_surplus_earnings: number;
        monthly_avg_total_cost: number;
        tariff: {
            id: string;
            name: string;
            type: string;
            green: boolean;
            url: string;
            current_tariff_price: {
                date_of_expiry: string;
                p1: string;
                p2?: string;
                e1: string;
                e2?: string;
                e3?: string;
            };
            marketer: {
                code: string;
                name: string;
                short_name: string;
            };
        };
        tariff_type: {
            id: string;
            code: string;
            name: string;
            power_periods: number;
            energy_periods: number;
        };
        compact_name: string;
        tariff_type_name: string;
    }[];
};
