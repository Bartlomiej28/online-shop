import Hero from "@/Components/Hero";
import Categories from "@/Components/Categories";
import Products from "@/Components/Products";
import { PrismaClient } from '@prisma/client'
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const prisma = new PrismaClient()
  const products = await prisma.product.findMany();
  return (
    <main className="h-auto">
      <Hero/>
      <Categories/>
      <Suspense fallback={<Loading/>}>
        <Products products={products} text={'Wszystkie Produkty'}/>
      </Suspense>
    </main>
  );
}
