export type StepperStepProps = {
    title: string;
};

export const Stepper = ({
    steps,
    currentStep,
}: {
    steps: StepperStepProps[];
    currentStep: number;
}) => {
    return (
        <div className="w-full flex items-center justify-center">
            {steps.map((step, index) => (
                <div key={step.title.replace('/ /g', '_')} className="flex items-center">
                    <div
                        className={`w-8 h-8 p-2.5 rounded-full ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'}`}
                    >
                        <div className="w-fulll h-full bg-white rounded-full" />
                    </div>
                    {index < steps.length - 1 && (
                        <div
                            className={`w-16 lg:w-40 h-0.5 ${currentStep > index ? 'bg-blue-600' : 'bg-gray-200'}`}
                        />
                    )}
                    <div className="sr-only">{step.title}</div>
                </div>
            ))}
        </div>
    );
};
