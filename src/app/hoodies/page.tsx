import React from 'react'
import {prisma} from '@/lib/db/prisma'
import Products from '@/Components/Products'

async function page() {
    const tshirts = await prisma.product.findMany({
        where:{
            category: "Hoodie"
        }
    })
  return (
    <div>
        <Products products={tshirts} text={'Bluzy i bluzy z kapturem'}/>
    </div>
  )
}

export default page