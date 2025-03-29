import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Rating from "./Rating";

interface ProductCardProps {
  product: {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    price: number;
    brand: string;
    rating: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <Card
        className="w-72 border rounded-lg shadow-md overflow-hidden"
        key={product.id}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-md  text-blue-500 font-bold">
              {product.brand}
            </span>
            <Rating rating={product.rating} />
          </div>
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-bold mt-2">{`₹${product.price}`}</p>
        </CardContent>
        <Button
          variant="outline"
          className="rounded-full mx-6 text-blue-500 border-blue-500 hover:bg-blue-100"
        >
          Add to Cart <ArrowRight />
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
