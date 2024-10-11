import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:8000/products");
  return data;
};

const useProduct = () => {
  const {
    isFetching,
    dataUpdatedAt,
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: async () => fetchProducts(),
    staleTime: 60 * 1000,
    gcTime: 60 * 1000,
  });
  return {
    dataUpdatedAt,
    isFetching,
    isLoading,
    error,
    products,
  };
};
export default useProduct;
