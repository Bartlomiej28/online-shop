import React from 'react'
import Link from 'next/link'
function RecommendedProducts() {
    const products = [
        {
          id: 1,
          name: 'T-shirt z nadrukiem',
          href: '/product/66755a663d1f73d534f21927',
          imageSrc: 'https://image.hm.com/assets/hm/a9/b9/a9b92f09c41ba6930f27c5f18a9ea3b015ac65de.jpg?imwidth=2160',
          imageAlt: "T-shirt z nadrukiem",
          price: '149.99',
        },
        {
            id: 2,
            name: 'Top polo z lekkiego bawełnianego dżerseju',
            href: '/product/667562e53d1f73d534f2192c',
            price: '149.99',
            imageSrc: 'https://image.hm.com/assets/hm/95/33/95336f60cf9a0bef59c567882f79bd6c626a404f.jpg?imwidth=2160',
            imageAlt: 'Top polo z lekkiego bawełnianego dżerseju',
          },
          {
            id: 3,
            name: 'Koszula z przewiewnego lnu',
            href: '/product/667567e73d1f73d534f21931',
            price: '149.99',
            imageSrc: 'https://media.cos.com/assets/001/9f/75/9f7533e3af12b440948aece22b3d0b847a3cbd84.jpg?imwidth=2160&aspectRatio=2,3',
            imageAlt: 'Koszula z przewiewnego lnu',
          },
          {
            id: 4,
            name: 'Bluza',
            href: '/product/66756c713d1f73d534f21938',
            price: '149.99',
            imageSrc: 'https://image.hm.com/assets/hm/8c/90/8c902c018e634ed6d1acbdb69135df3633d12c3e.jpg?imwidth=2160',
            imageAlt: 'Bluza',
          },
      ]
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Rekomendowane przez klientów</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price} zł</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecommendedProducts
