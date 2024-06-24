import React, { Suspense } from 'react'
import ProductPanel from '@/Components/ProductPanel'
import MoreInfoAboutProduct from '@/Components/MoreInfoAboutProduct'
import RecommendedProducts from '@/Components/RecommendedProducts'
import {prisma} from '@/lib/db/prisma'
import { notFound } from 'next/navigation'
import Loading from './loading'


interface ProductPageProps {
  params: {
    id: string
  }
}

const page = async({ params: { id }} : ProductPageProps) => {

  const product = await prisma.product.findUnique({
    where:{
      id
    }
  })

  if(!product) notFound();

  return (
    <div className="flex flex-col gap-4 w-full">
      <Suspense fallback={<Loading/>}>
        <ProductPanel id={id} name={product.name} price={product.price} imageSrc={product.imageSrc} productDesc={product.productDesc} colors={product.colors} sizes={product.sizes} productRating={product.rating} reviewCount={product.reviewCount}/>
        <MoreInfoAboutProduct productDesc={product.productDesc} additionalImages={product.additionalImages} material={product.material} origin={product.origin} otherInformations={product.otherInformations}/>
        <RecommendedProducts />
      </Suspense>
    </div>
  )
}

export default page

