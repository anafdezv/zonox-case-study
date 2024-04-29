import { Header, Spinner, Stepper } from '@/components';
import { FormDataModel, InvoiceSimulationsResponse } from '@/models';
import { StepConsumptionCurve, StepConsumptionModeling, StepMonthCost } from '@/pages';
import { ShowData } from '@/pages/Form/components/ShowData';
import { getInvoiceSimulations } from '@/services';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [formData, setFormData] = useState<FormDataModel>();
    const [responseData, setResponseData] = useState<InvoiceSimulationsResponse[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const formSteps = [
        { title: 'Información de consumo' },
        { title: 'Información de la vivienda' },
        { title: 'Precio mensual' },
    ];

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <StepConsumptionCurve
                        data={formData}
                        setData={setFormData}
                        onSave={() => setCurrentStep(currentStep + 1)}
                    />
                );
            case 1:
                return (
                    <StepConsumptionModeling
                        data={formData}
                        setData={setFormData}
                        onSave={() => setCurrentStep(currentStep + 1)}
                        onGoBack={() => setCurrentStep(currentStep - 1)}
                    />
                );
            case 2:
                return (
                    <StepMonthCost
                        data={formData}
                        setData={setFormData}
                        onSave={handleSendData}
                        onGoBack={() => setCurrentStep(currentStep - 1)}
                    />
                );
            default:
                return <div />;
        }
    };

    const handleSendData = async () => {
        if (!formData) return;
        setIsLoading(true);
        await getInvoiceSimulations(formData)
            .then((res) => setResponseData(res.invoice_simulations))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="h-screen w-screen overflow-hidden landing-bg bg-blue-50 flex flex-col">
            <Header
                actions={
                    <button className="btn btn-outline" onClick={() => navigate('/')}>
                        Volver a inicio
                    </button>
                }
            />
            {isLoading ? (
                <div className="flex flex-col m-auto items-center justify-center">
                    <p className="text-lg font-semibold">
                        ¡Estamos consiguiendote las mejores tarifas!
                    </p>
                    <Spinner />
                </div>
            ) : responseData ? (
                <div className="w-full h-[calc(100%-75px)] overflow-hidden">
                    <ShowData data={responseData} />
                </div>
            ) : (
                <div className="w-full h-[calc(100%-75px)] lg:py-8 lg:px-4 overflow-hidden">
                    <div className="w-full h-full lg:max-w-2xl bg-white mx-auto lg:shadow flex flex-col lg:rounded-lg overflow-y-scroll">
                        <div className="hidden lg:flex h-2 min-h-2 bg-blue-600" />
                        {/* HEADER */}
                        <div className="px-5 py-4 w-full flex flex-col gap-4 items-center border-b border-gray-200  ">
                            <Stepper steps={formSteps} currentStep={currentStep} />
                            <div className="flex flex-col items-center">
                                <p className="text-lg font-semibold text-center">
                                    Descubre las mejores tarifas para ti
                                </p>
                                <p className="text-sm font-medium text-gray-500 text-center">
                                    {currentStep === 0
                                        ? 'Solo te llevará un par de minutos'
                                        : currentStep === 1
                                          ? '¡Solo necesitamos un poco de información más!'
                                          : '¡Una última pregunta!'}
                                </p>
                            </div>
                        </div>
                        {/* STEPS */}
                        {renderStep()}
                    </div>
                </div>
            )}
        </div>
    );
};
