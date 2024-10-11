"use client";
import useCart from "@/hooks/useCart";
import { Product } from "@/types/product";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC } from "react";

interface Props {
  product: Product;
}

const Card: FC<Props> = ({ product }) => {
  const { addItem, productsCart, updateItemWeight, removeItem } = useCart();
  const productInCart = productsCart.find((p: Product) => p.id === product.id);
  const handleAdd = () => {
    if (productInCart) {
      updateItemWeight(
        parseInt(productInCart.id, 10),
        productInCart.metadata.weight + 100
      );
    } else {
      addItem(product);
    }
  };
  const handleRemove = () => {
    if (productInCart.metadata.weight > 100) {
      updateItemWeight(
        parseInt(productInCart.id, 10),
        productInCart.metadata.weight - 100
      );
    } else {
      removeItem(parseInt(productInCart.id, 10));
    }
  };
  return (
    <div className="bg-[#F9F8F6] flex flex-col p-3">
      <Image
        src={product.imageUrl}
        className="h-auto w-full aspect-square object-cover"
        width={150}
        height={150}
        alt=""
      />
      <div className="font-semibold text-2xl">${product.price}</div>
      <div>{product.name}</div>
      <div className="flex justify-between items-center">
        {!productInCart && (
          <div className="text-gray-400">{product.weight / 1000}kg</div>
        )}
        {productInCart && (
          <>
            <FontAwesomeIcon
              onClick={handleRemove}
              icon={faMinus}
              className="h-6 w-6 rounded-full border border-black p-2 border-opacity-30 hover:cursor-pointer"
            />
            <div>{productInCart.metadata.weight / 1000}kg</div>
          </>
        )}

        <FontAwesomeIcon
          onClick={handleAdd}
          icon={faPlus}
          className="h-6 w-6 rounded-full border border-black p-2 border-opacity-30 hover:cursor-pointer"
        />
      </div>
    </div>
  );
};
export default Card;
