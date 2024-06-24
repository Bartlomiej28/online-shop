"use client"

import React, { Suspense } from 'react'
import useShoppingCartStore from '@/Store/store'
import Loading from './loading'
import { useRouter } from 'next/navigation'


function Page() {
    const itemsList = useShoppingCartStore((state) => state.itemsList);
    const removeFromCart = useShoppingCartStore((state) =>state.removeFromCart);
    const totalPrice = useShoppingCartStore((state) => state.totalShoppingPrice);
    const router = useRouter();
    
    const handlePayAndOrder = ()=>{
      router.push('/order')
    }

  return (
    <div className='w-full min-h-screen h-auto pt-20'>
      <Suspense fallback={<Loading/>}>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Sklep</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Dostawa</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Płatność</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Podsumowanie Zamówienia</p>
          <p className="text-gray-400">
            Wybierz swoje produkty i wybierz metodę dostawy.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  <Suspense fallback={<Loading/>}>
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
                                <p className="ml-4">{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{product.color}, {product.size}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Ilość: {product.quantity}</p>

                            <div className="flex">
                                <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={()=>{removeFromCart(product.id, product.color, product.size)}}
                                >
                                Usuń
                                </button>
                            </div>
                            </div>
                        </div>
                        </li>
                    ))}
                    </Suspense>
                </ul>
            </div>
            
          </div>

          <p className="mt-8 text-lg font-medium">Metody Dostawy</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                defaultChecked
                
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Kurier Fedex</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Dostawa: 2-4 Dni
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                defaultChecked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="https://jakimkurierem.pl/logo_kuriera/dhl_logo.svg"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Kurier DHL</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Dostawa: 2-4 Dni
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Szczegóły Płatności</p>
          <p className="text-gray-400">
            Uzupełnij swoje zamówienie przez wprowadzenie swoich szczegółów płatności.
          </p>
          <div>
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m8 0V8m0 4v4m0-4h-4m0 0V8m0 4v4m-4-4H8m0 0V8m0 4v4m4-4H8m0 0v4"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Imię i Nazwisko
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m8 0V8m0 4v4m0-4h-4m0 0V8m0 4v4m-4-4H8m0 0V8m0 4v4m4-4H8m0 0v4m4-4H8m0 0v4"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Dane karty
            </label>
            <div className="flex">
              <div className="relative w-7/12 flex-shrink-0">
                <input
                  type="text"
                  id="card-no"
                  name="card-no"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8 0V8m0 4v4m0-4h-4m0 0V8m0 4v4m-4-4H8m0 0V8m0 4v4m4-4H8m0 0v4m4-4H8m0 0v4"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="credit-expiry"
                className="w-1/6 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="MM/YY"
                required
              />
              <input
                type="text"
                name="credit-cvc"
                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="CVC"
                required
              />
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Adres korespondencyjny
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8 0V8m0 4v4m0-4h-4m0 0V8m0 4v4m-4-4H8m0 0V8m0 4v4m4-4H8m0 0v4m4-4H8m0 0v4"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
                required
              />
            </div>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Cena</p>
                <p className="font-semibold text-gray-900">{totalPrice}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Dostawa</p>
                <p className="font-semibold text-gray-900">8.00zł</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Suma</p>
              <p className="text-2xl font-semibold text-gray-900">{totalPrice > 0 ? totalPrice +8 : 0}</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" onClick={handlePayAndOrder}>
            Zapłać i Zamów
          </button>
        </div>
      </div>
      </Suspense>
    </div>
  )
}

export default Page