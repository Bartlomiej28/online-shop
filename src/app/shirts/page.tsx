import React from 'react'
import {prisma} from '@/lib/db/prisma'
import Products from '@/Components/Products'

async function page() {
    const tshirts = await prisma.product.findMany({
        where:{
            category: "Shirt"
        }
    })
  return (
    <div>
        <Products products={tshirts} text='Koszule'/>
    </div>
  )
}

export default page