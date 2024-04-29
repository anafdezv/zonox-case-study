import { InvoiceSimulationsResponse } from '@/models';
import { ContractModal } from '@/pages';
import { useState } from 'react';

export const ShowData = ({ data }: { data: InvoiceSimulationsResponse[] }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <div className="w-full h-full flex flex-col items-center py-8 lg:justify-center gap-8 bg-blue-500 lg:bg-blue-200  relative overflow-y-scroll">
            <ContractModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />{' '}
            <p className="z-[10] text-center text-2xl lg:text-5xl font-semibold text-white">
                Estas son las mejores tarifas para ti
            </p>{' '}
            <div className="flex flex-col lg:flex-row px-2 gap-2 lg:gap-4 items-center w-full max-w-7xl">
                {data?.map((tarif, index) => (
                    <div
                        key={index}
                        className="z-[10] lg:h-96 w-full max-w-2xl bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center gap-4"
                    >
                        <span className="text-sm uppercase bg-blue-50 px-2 py-1 rounded-full text-blue-500 w-fit text-center font-medium">
                            {tarif.tariff.type === 'fixed' ? 'Fija' : 'Indexada'}
                        </span>{' '}
                        <img
                            className="object-cover max-w-36"
                            src={`/images/companys/${tarif.compact_name.includes('Octopus') ? 'octopus' : tarif.compact_name.includes('Endesa') ? 'endesa' : 'gana_energia'}.png`}
                        />
                        <div className="flex flex-col gap-1 items-center">
                            <div className="flex items-end gap-1">
                                <p className="text-5xl font-semibold">{`${tarif.monthly_avg_total_cost}€`}</p>
                                <p className="text-sm text-gray-600"> al mes</p>
                            </div>
                            <p className="font-semibold text-gray-600">{tarif.compact_name}</p>
                        </div>{' '}
                        <button
                            onClick={() => {
                                setIsOpenModal(true);
                            }}
                            className="btn btn-primary"
                        >
                            Contrata ahora
                        </button>
                    </div>
                ))}
            </div>
            <div className="hidden lg:flex z-0 bg-blue-600 absolute top-0 w-full min-h-20 h-2/3" />
        </div>
    );
};
