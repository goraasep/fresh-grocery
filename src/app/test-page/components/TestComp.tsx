"use client";
import { FC, useEffect } from "react";
import useProduct from "@/hooks/useProduct";
import { QueryCache, useQuery } from "@tanstack/react-query";
const TestComp: FC = () => {
  //   //   const queryCache = new QueryCache({
  //   //     onError: (error) => {
  //   //       console.log(error);
  //   //     },
  //   //     onSuccess: (data) => {
  //   //       console.log(data);
  //   //     },
  //   //     onSettled: (data, error) => {
  //   //       console.log(data, error);
  //   //     },
  //   //   });
  //   //   const query = queryCache.find(["fetchProducts"]);
  //   //   console.log(query);
  const { isLoading, error, products, isFetching, dataUpdatedAt } =
    useProduct();
  //   useEffect(() => {
  //     // console.log(products);
  //   }, []);

  return (
    <div>
      {isFetching && <div>Fetching....</div>}
      {dataUpdatedAt && <div>Data Updated At: {dataUpdatedAt}</div>}
      <div>test</div>
    </div>
  );
};
export default TestComp;
