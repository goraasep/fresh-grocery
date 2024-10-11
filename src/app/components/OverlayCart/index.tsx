"use client";
import useCart from "@/hooks/useCart";
import { Product } from "@/types/product";
import Image from "next/image";
import { FC } from "react";

const OverlayCart: FC = () => {
  const { productsCart, isLoading, error, getTotalPrice } = useCart();
  //   if(productsCart){

  //   }
  //   if (productsCart) {
  //     console.log(productsCart[0].imageUrl);
  //   }
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="bg-black text-white h-[55px] rounded-full flex justify-between items-center mx-4 px-6 top-[calc(95%-55px)] sticky">
        <div className="flex gap-1 justify-start">
          <div>Cart</div>
          <div className="flex justfy-start">
            {productsCart.length > 1 &&
              productsCart
                .slice(-2)
                .map((product: Product) => (
                  <Image
                    className="h-auto w-full aspect-square object-cover rounded-full"
                    src={product.imageUrl}
                    width={20}
                    height={20}
                    alt=""
                  />
                ))}
          </div>
        </div>
        <div>${getTotalPrice()}</div>
      </div>
    </div>
  );
};

export default OverlayCart;
