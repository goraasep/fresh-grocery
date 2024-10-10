"use client";
import { FC, useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

const ProductList: FC = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("http://localhost:8000/products");
    setProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="px-4 grid grid-cols-2 gap-2 py-5">
      {products.map((product: any) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
