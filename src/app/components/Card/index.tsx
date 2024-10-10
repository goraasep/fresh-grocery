import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC } from "react";

interface Props {
  product: Product;
}
interface Product {
  price: number;
  weight: number;
  name: string;
  category: string;
  imageUrl: string;
  metadata: Metadata;
  id: string;
}

export interface Metadata {
  unit: string;
  weight: number;
  calorie: number;
  proteins: number;
  fats: number;
  increment: number;
  carbs: number;
}

const Card: FC<Props> = ({ product }) => {
  return (
    <div className="bg-[#F9F8F6] flex flex-col p-3">
      <Image
        src={product.imageUrl}
        className="h-auto w-full aspect-square mix-blend-multiply object-cover"
        width={150}
        height={150}
        alt=""
      />
      <div className="font-semibold text-2xl">${product.price}</div>
      <div>{product.name}</div>
      <div className="flex justify-between items-center">
        <div className="opacity-30">{product.weight / 1000}kg</div>
        <FontAwesomeIcon
          icon={faPlus}
          className="h-6 w-6 rounded-full border border-black p-2 border-opacity-30"
        />
      </div>
    </div>
  );
};
export default Card;
