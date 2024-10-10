import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("http://localhost:8000/products");
  console.log(data);
  return data;
};

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  let URL = "http://localhost:8000/products";

  const response = fetch(URL, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}
const useProduct = () => {
  const {
    isFetching,
    dataUpdatedAt,
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: async () =>
      (await axios.get("http://localhost:8000/products")).data,
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
