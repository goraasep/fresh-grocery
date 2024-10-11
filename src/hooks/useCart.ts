import { Product } from "@/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const FETCH_CART = "fetchCart";
const fetchCart = async () => {
  const { data } = await axios.get("http://localhost:8000/cart");
  return data;
};

const addToCart = async (product: Product) => {
  const response = await axios.post("http://localhost:8000/cart", product);
  return response.data;
};

const removeFromCart = async (productId: number) => {
  const response = await axios.delete(
    `http://localhost:8000/cart/${productId}`
  );
  return response.data;
};

const editCartItem = async (updatedData: {
  productId: number;
  weight: number;
}) => {
  const response = await axios.patch(
    `http://localhost:8000/cart/${updatedData.productId}`,
    {
      metadata: {
        weight: updatedData.weight,
      },
    }
  );
  return response.data;
};

const useCart = () => {
  const queryClient = useQueryClient();

  const updateItemWeightMutation = useMutation({
    mutationFn: editCartItem,
    onSuccess: () => {
      console.log("mutated in use");
      queryClient.invalidateQueries({ queryKey: [FETCH_CART] });
    },
  });
  const addItemMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FETCH_CART] });
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [FETCH_CART] });
    },
  });

  const {
    isLoading,
    error,
    data: productsCart,
  } = useQuery({
    queryKey: [FETCH_CART],
    queryFn: async () => fetchCart(),
  });
  const addItem = (product: Product) => {
    // if (productsCart.find((p: Product) => p.id === product.id)) {
    //   const productInCart = productsCart.find(
    //     (p: Product) => p.id === product.id
    //   );
    //   //     console.log(product.metadata.weight);
    //   updateItemWeight(
    //     parseInt(productInCart.id, 10),
    //     productInCart.metadata.weight + 100
    //   );
    // } else {
    //   addItemMutation.mutate(product);
    // }
    addItemMutation.mutate(product);
  };

  const removeItem = (productId: number) => {
    removeItemMutation.mutate(productId);
  };
  const updateItemWeight = (productId: number, weight: number) => {
    const updatedItem = {
      productId,
      weight,
    };
    console.log("updated in use");
    updateItemWeightMutation.mutate(updatedItem);
  };
  const getTotalPrice = () => {
    return productsCart.reduce((total: number, product: Product) => {
      return total + product.price * (product.metadata.weight / 100);
    }, 0);
  };

  return {
    isLoading,
    error,
    productsCart,
    addItem,
    removeItem,
    updateItemWeight,
    getTotalPrice,
  };
};
export default useCart;
