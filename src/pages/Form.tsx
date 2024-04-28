import { Header, Stepper } from '@/components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState<number>(0);

    const formSteps = [
        { title: 'Información de consumo' },
        { title: 'Datos de contacto' },
        { title: 'Datos de la vivienda' },
    ];

    return (
        <div className="h-screen w-screen overflow-hidden landing-bg bg-blue-50 flex flex-col">
            <Header
                actions={
                    <button className="btn btn-outline" onClick={() => navigate('/')}>
                        Volver a inicio
                    </button>
                }
            />
            <div className="w-full h-full lg:py-8 lg:px-4">
                <div className="w-full h-full lg:max-w-2xl bg-white mx-auto lg:shadow flex-flex-col lg:rounded-lg overflow-hidden">
                    <div className="hidden lg:flex h-2 min-h-2 bg-blue-600" />
                    {/* HEADER */}
                    <div className="px-5 py-4 w-full flex flex-col gap-4 items-center border-b border-gray-200">
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
                        </div>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};
