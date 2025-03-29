import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, updateQuantity } from "../redux/service/cartSlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash } from "lucide-react";
import Rating from "@/components/Rating";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto px-4 py-3 flex h-screen">
      {/* Left Section (Takes More Space) */}
      <section className="flex-grow p-4">
        <div>
          {cartItems.length === 0 ? (
            <p className="p-4 text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item: any) => (
              <Card key={item.id} className="mb-3">
                <CardHeader>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm  text-blue-500 font-bold">
                      {item.brand}
                    </span>
                    <Rating rating={item.rating} />
                    {/* <div className="flex-1">
                      <p className="text-gray-700 font-medium">
                        ${item.price.toFixed(2)}
                      </p>
                    </div> */}
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium">{item.title}</p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash size={18} />
                  </button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Right Section (Takes Less Space) */}
      <section className="w-1/3 p-4">
        {" "}
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-3">Checkout Summary</h2>
          <p className="text-gray-700">
            Total Items: <span className="font-medium">{cartItems.length}</span>
          </p>
          <p className="text-gray-700">
            Total Price:{" "}
            {/* <span className="font-medium">${totalPrice.toFixed(2)}</span> */}
          </p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </Card>
      </section>
    </div>
  );
};

export default Cart;
