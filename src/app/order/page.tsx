"use client";
import React, { Suspense } from 'react';
import Confetti from 'react-confetti';
import useShoppingCartStore from '@/Store/store';
import useDeviceSize from '@/Hooks/useDeviceSize';
import Loading from './loading';
import Link from 'next/link';

function Page() {
    const [width, height] = useDeviceSize();
    const itemsList = useShoppingCartStore((state) => state.itemsList);

    return (
        <div className="w-full h-screen relative">
            <div className="w-full h-screen absolute z-10">
                <Confetti width={width - 20} height={height} numberOfPieces={500} recycle={false} />
            </div>
            <div className="w-full h-screen absolute z-20 flex justify-center items-center p-4">
                <div className="flex flex-col w-full md:w-2/3 lg:w-1/3 gap-6 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex space-x-4 justify-center items-center">
                        <p className="text-2xl md:text-3xl font-medium text-center">Dziękujemy za wspólne zakupy!</p>
                    </div>
                    <div className="border border-black min-h-64 max-h-64 p-4 overflow-scroll">
                        <Suspense fallback={<Loading />}>
                            <ul>
                                {itemsList.map((product: any) => (
                                    <li key={product.id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.name}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href={product.href}>{product.name}</a>
                                                    </h3>
                                                    <p className="ml-4">{product.price} zł</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{product.color}, {product.size}</p>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <p className="text-gray-500">Ilość: {product.quantity}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Suspense>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="mb-1 text-xl font-semibold">Numer zamówienia:</h2>
                        <p className="text-sm dark:text-gray-600">
                            Zamówienie dotrze do Ciebie w przeciągu 3-4 dni.
                        </p>
                        <p className="text-sm dark:text-gray-600">
                            <b>Stan:</b> Zamówione
                        </p>
                        <Link href={'/'}><button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Kontynuuj Zakupy</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
