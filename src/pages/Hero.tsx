import { Header, Input } from '@/components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');

    return (
        <div className="h-screen w-screen overflow-hidden landing-bg bg-blue-50 lg:bg-white lg:bg-[url('./assets/landing_bg.svg')] bg-no-repeat bg-left bg-cover flex flex-col">
            <Header />
            <div className="w-full h-full flex flex-col lg:flex-row max-w-7xl mx-auto items-center justify-start py-6 md:py-12 relative">
                <div className="w-full lg:w-2/4 flex flex-col gap-6 md:gap-12 px-5 z-20">
                    <div className="flex flex-col gap-3">
                        <p className="text-xl md:text-3xl lg:text-5xl font-semibold text-center lg:text-left">
                            Recupera el control de tu factura de la luz
                        </p>
                        <p className="text-sm md:text-base lg:text-xl text-gray-600 text-center lg:text-left">
                            Ahorra con Zonox. Encontramos la mejor tarifa de luz para ti y te
                            cambiamos de forma automática cuando salga una mejor
                        </p>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-1">
                        <div className="flex flex-col w-full gap-0.5">
                            <Input
                                label={'Email'}
                                showLabel={false}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                name={'email'}
                                placeholder="Introduce tu email"
                            />
                            <p className="text-xs text-gray-600">
                                Nos preocupamos por tus datos en nuestra{' '}
                                <a href="#" className="underline">
                                    Política de Privacidad
                                </a>
                            </p>
                        </div>
                        <button
                            disabled={!email}
                            className="btn btn-primary min-w-fit"
                            onClick={() => navigate('/ahorra')}
                        >
                            ¡Empieza a ahorrar!
                        </button>
                    </div>
                </div>
                <div className="ml-8 flex lg:hidden">
                    <img className="object-cover" src={'/images/landing_mobile.png'} />
                </div>
                <div className="absolute -right-10 top-20 hidden lg:flex">
                    <img className="object-cover" src={'/images/landing_desktop.png'} />
                </div>
            </div>
        </div>
    );
};
