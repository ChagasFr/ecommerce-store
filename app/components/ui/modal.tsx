"use client"

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
    open: boolean,
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children
}) => {
    return (
        <Transition show={open} appear as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <div className="fixed insert-0 bg-black bg-opacity-50" />

                <div className="fixed insert-0 overflow-auto">
                    <div className="flex mih-h-full items-center justify-center p-4 text-center">

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                        >
                        </Transition.Child>

                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}