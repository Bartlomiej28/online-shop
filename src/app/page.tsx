import Hero from "@/Components/Hero";
import Categories from "@/Components/Categories";
import Products from "@/Components/Products";
import {prisma} from '@/lib/db/prisma'
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
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
