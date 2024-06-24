import React from 'react'
import {prisma} from '@/lib/db/prisma'
import Products from '@/Components/Products'

async function page() {
    const tshirts = await prisma.product.findMany({
        where:{
            category: "T-shirt"
        }
    })
  return (
    <div>
        <Products products={tshirts} text={'T-shirty'}/>
    </div>
  )
}

export default page