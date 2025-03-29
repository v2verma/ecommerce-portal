import { useGetProductsQuery } from "@/redux/service/productSlice";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log("ProductList data:", JSON.stringify(data)); // Debugging line

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products.</p>;

  return (
    <div className="container mx-auto px-4 py-3 ">
      <h2>Product List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
