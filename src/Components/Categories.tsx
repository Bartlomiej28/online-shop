import React from 'react'
import Link from "next/link";

function Categories() {

    const callouts = [
        {
          name: 'Bluzy i bluzy z kapturem',
          description: 'Wygodne bluzy i bluzy z kapturem',
          imageSrc: 'https://image.hm.com/assets/hm/c0/37/c037db1a0ff5581daf736681791dddbaabd99ce7.jpg?imwidth=564',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '/hoodies',
        },
        {
          name: 'T-shirty',
          description: 'Jednolite T-shirty i T-shirty z nadrukiem ',
          imageSrc: 'https://image.hm.com/assets/hm/fe/98/fe983c9a3374686f2cd2c0fdc96036a530917bbc.jpg?imwidth=564',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '/t-shirts',
        },
        {
          name: 'Koszule',
          description: 'Wygodne i eleganckie koszule',
          imageSrc: 'https://image.hm.com/assets/hm/52/10/52105f881ef33f3d7169d696549f9804235b27d2.jpg?imwidth=564',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '/shirts',
        },
      ]

  return (
    <div className="bg-gray-100 w-full h-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Kategorie</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                    />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                    <Link href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                    </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Categories
