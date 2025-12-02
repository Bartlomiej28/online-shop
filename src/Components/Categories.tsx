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
          imageSrc: 'https://image.hm.com/assets/hm/6f/15/6f156a9bdcd72598b4e470dd68a8e154b1844b50.jpg?imwidth=2160',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '/t-shirts',
        },
        {
          name: 'Koszule',
          description: 'Wygodne i eleganckie koszule',
          imageSrc: 'https://image.hm.com/assets/hm/b5/a7/b5a7cf2662fe906edf15c674a4e74038f6ee290d.jpg?imwidth=2160',
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
