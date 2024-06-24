"use client"
import React, { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import useShoppingCartStore from '@/Store/store'
import { StarIcon } from '@heroicons/react/20/solid'


type Color ={
  name: string
  class: string
  selectedClass: string
}

type Size= {
  name: string
  inStock: boolean
}

type ProductPanelProps= {
  id: string
  name: string ;
  price: string;
  imageSrc: string ;
  productDesc: string ;
  colors: Color[];
  sizes: Size[];
  productRating: number,
  reviewCount: number
}


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const ProductPanel: React.FC<ProductPanelProps> = ({id, name, price, imageSrc, productDesc, colors, sizes, productRating, reviewCount }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const addToCart = useShoppingCartStore((state) => state.addToCart)

  const handleAddToCart = () =>{

    const product = {
      id: id,
      price: price,
      name: name,
      color: selectedColor.name,
      size: selectedSize.name,
      imageSrc: imageSrc
    }
    addToCart(product)
  }

  return (
    <div className="w-full h-auto pt-20">
      <div>
        <div className="flex flex-col items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 lg:flex-row lg:items-start lg:gap-x-8">
          <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 w-full lg:w-1/2">
            <img src={imageSrc} alt={productDesc} className="object-cover object-bottom" />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>
            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>
              <p className="text-2xl text-gray-900">{price} zł</p>

              <div className="mt-6">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                productRating > rating ? 'text-gray-900' : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0',
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">{productRating} out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          {reviewCount} reviews
                        </a>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

              <div>
                <fieldset aria-label="Choose a color">
                  <legend className="text-sm font-medium text-gray-900">Kolor</legend>
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4 flex items-center space-x-3"
                  >
                    {colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={({ checked }) =>
                          classNames(
                            color.selectedClass,
                            checked ? 'ring-2 ring-offset-1' : '',
                            `relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none`
                          )
                        }
                      >
                        <span
                          aria-hidden="true"
                          className={`${color.class} h-8 w-8 rounded-full border border-black border-opacity-10 ${color.name === 'Black' ? 'bg-black' : color.name === 'White' ? 'bg-white' : 'bg-blue-400'}`}
                        ></span>
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
                <fieldset className="mt-10" aria-label="Choose a size">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">Rozmiar</div>
                    
                  </div>
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4 grid grid-cols-4 gap-4"
                  >
                    {sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ focus }) =>
                          classNames(
                            size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            focus ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                          )
                        }
                      >
                        {({ checked, focus }) => (
                          <>
                            <span>{size.name}</span>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  focus ? 'border' : 'border-2',
                                  'pointer-events-none absolute -inset-px rounded-md'
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
                <button
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleAddToCart}
                >
                  Dodaj do koszyka
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPanel



