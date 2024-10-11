"use client";
import Image from "next/image";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
const OverlayItem: FC = () => {
  const { products, error } = useProduct();
  const {} = useCart();

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 ">
          <div className="bg-white h-[90vh] rounded-t-lg mx-4 px-6 top-[10vh] sticky">
            <Image
              src="/products/beetles.png"
              width={370}
              height={336}
              alt="logo"
              className="h-auto w-full aspect-square object-cover"
            />
            <div>
              <div className="font-bold text-3xl py-5">Garlic</div>
              <div className="font-semibold">in 100 grams</div>
              <div className="grid grid-cols-4  py-4 my-4 border rounded-xl text-center">
                <div>
                  <div className="font-semibold">123</div>
                  <div className="text-gray-400">calories</div>
                </div>
                <div>
                  <div className="font-semibold">123</div>
                  <div className="text-gray-400">proteins</div>
                </div>
                <div>
                  <div className="font-semibold">123</div>
                  <div className="text-gray-400">fats</div>
                </div>
                <div>
                  <div className="font-semibold">123</div>
                  <div className="text-gray-400">carbs</div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 w-full">
                <div className="flex justify-between bg-gray-100 py-4 px-3 col-span-4 rounded-full">
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="h-6 w-6 text-black  p-1"
                  />
                  <div>1000kg</div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="h-6 w-6 text-black  p-1"
                  />
                </div>
                <div className="flex items-center justify-center ">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="h-6 w-6 text-black bg-gray-100 rounded-full p-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OverlayItem;
