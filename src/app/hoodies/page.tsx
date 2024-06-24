import React from 'react'
import { PrismaClient } from '@prisma/client'
import Products from '@/Components/Products'

async function page() {
    const prisma = new PrismaClient()
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