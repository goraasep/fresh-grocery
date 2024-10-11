"use client";
import { FC, useEffect, useState } from "react";
import Card from "../Card";
import useProduct from "@/hooks/useProduct";
import OverlayCart from "../OverlayCart";

const ProductList: FC = () => {
  const { products, error, isLoading, isFetching, dataUpdatedAt } =
    useProduct();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      {isFetching ? <div>Fetching...</div> : null}
      {/* {dataUpdatedAt ? <div>Data Updated At: {dataUpdatedAt}</div> : null} */}
      <div className="px-4 grid grid-cols-2 gap-2 py-5">
        {products.map((product: any) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
