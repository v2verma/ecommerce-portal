import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Heart } from "lucide-react";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/service/cartSlice";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

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
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Initialize navigate function

  const handleAddToCart = (product: any) => {
    console.log("Add to Cart clicked", JSON.stringify(product));
    dispatch(addToCart(product));
    navigate("/cart"); // ✅ Navigate to the Cart page
  };
  return (
    <div>
      <Card
        className="w-72 border rounded-lg shadow-md overflow-hidden"
        key={product.id}
      >
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-fit"
          />

          {/* Heart Icon - Top Right */}
          <div className="absolute bottom-2 right-12 bg-white/70 p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
            <Heart className="text-red-500" size={20} />
          </div>

          {/* Eye Icon - Bottom Right */}
          <div className="absolute bottom-2 right-2 bg-white/70 p-2 rounded-full shadow cursor-pointer hover:scale-110 transition">
            <Eye className="text-gray-600" size={20} />
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm  text-blue-500 font-bold">
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
          onClick={() => handleAddToCart(product)}
          aria-label="Add to Cart"
        >
          Add to Cart <ArrowRight />
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
