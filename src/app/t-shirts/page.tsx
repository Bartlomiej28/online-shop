import React from 'react'
import { PrismaClient } from '@prisma/client'
import Products from '@/Components/Products'

async function page() {
  const prisma = new PrismaClient()
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