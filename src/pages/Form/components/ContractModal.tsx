import BaseLogo from '@/assets/logo.svg';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
export const ContractModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isSending, setIsSending] = useState(false);
    const [phone, setPhone] = useState('');
    return (
        <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-4 flex flex-col gap-8 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-0 text-gray-700 mr-2 mt-2"
                    >
                        <FaXmark size="24px" />
                    </button>{' '}
                    <div className="flex flex-col items-center pt-8">
                        <BaseLogo />
                        {!isSending && (
                            <p className="font-semibold text-gray-800">
                                ¡Dejanos un teléfono y te llamaremos!
                            </p>
                        )}
                    </div>
                    {isSending ? (
                        <p className="font-semibold text-gray-800 text-center">
                            ¡Gracias! Nos pondremos en contacto contigo lo antes posible
                        </p>
                    ) : (
                        <div className="flex flex-col w-full gap-1">
                            <Dialog.Title className={'font-medium'}>Tu teléfono</Dialog.Title>
                            <PhoneInput
                                inputClass="w-full"
                                country={'es'}
                                value={phone}
                                onChange={(p) => {
                                    setPhone(p);
                                }}
                            />
                        </div>
                    )}
                    <button
                        onClick={() => {
                            isSending ? onClose() : setIsSending(true);
                        }}
                        className="btn btn-primary"
                    >
                        {isSending ? 'Cerrar' : 'Enviar'}
                    </button>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
