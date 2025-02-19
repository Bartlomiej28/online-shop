import React from 'react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white w-full h-screen">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:max-w-lg flex items-start justify-center flex-col h-screen">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            W końcu nadeszły letnie stylizacje
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Zanurz się w naszej letniej kolekcji i przygotuj na niezapomniane lato pełne stylu i komfortu! Sprawdź nowości już teraz i zrób zakupy w naszym sklepie internetowym.
          </p>
          <a href="#allProducts" className="mt-8 cursor-pointer inline-block rounded-md border border-transparent z-10 bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
            Zobacz produkty
          </a>
        </div>
        <div className="mt-10 lg:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
          <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                  <img
                    src="https://image.hm.com/assets/hm/a9/40/a940cda22f0a40ca603a62935c58110212115447.jpg?imwidth=564"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/5c/8c/5c8c2678da760d6ac7f3748848aaefe579f78a47.jpg?imwidth=1260"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/c7/21/c7215fdc57bbf80cb0069a4b9b3ebf61af4e7002.jpg?imwidth=564"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/de/39/de396662d27b505b721039ce0ee0dace91f45fab.jpg?imwidth=564"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/69/38/6938163d65448b0289c8129e4a1c04da50a78ea7.jpg?imwidth=564"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/7d/1f/7d1f8880039f55597f2bec3733855b7f374faf57.jpg?imwidth=564"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/d1/01/d101a606eb2f05cf3be6f2b030dc76ec26832c48.jpg?imwidth=564"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
