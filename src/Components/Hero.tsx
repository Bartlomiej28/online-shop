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
                    src="https://image.hm.com/assets/hm/41/88/41881e3d9e4eacc4f9ed0b02b5d78e633ee42fd6.jpg?imwidth=2160"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/ca/64/ca64482a509e887b1a7af85f131861ee4b6a182b.jpg?imwidth=2160"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/9f/24/9f244c97963ad9dc06dfe2b191ec3c2610e4853d.jpg?imwidth=2160"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/84/15/84155ff87fad13e52955a5a41b9bd3a4527427fb.jpg?imwidth=2160"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/80/c0/80c068d60249eb76e34ad06555d00c0f705e94f5.jpg?imwidth=2160"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/56/3b/563beb9be4ff2856b5c7066df4f56d582864978b.jpg?imwidth=2160"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <img
                    src="https://image.hm.com/assets/hm/b9/da/b9dad865a298e528a7a08f4f384f2d108e47876a.jpg?imwidth=2160"
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
