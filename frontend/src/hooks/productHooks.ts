import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient"; // modified version of axios
import { Product } from "../types/Product";

// export const useGetProductsQuery = () =>
//   useQuery({
//     queryKey: ["products"],
//     queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
//   });

export const useGetProductsQuery = (searchQuery: string) =>
  useQuery(
    ["products", searchQuery], // Include searchQuery as part of the query key
    async () => {
      // Define the API URL based on whether there's a search query or not
      const apiUrl = searchQuery
        ? `api/products?search=${searchQuery}`
        : `api/products`;

      const response = await apiClient.get<Product[]>(apiUrl);
      return response.data;
    }
  );

export const useGetProductDetailsBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ["products", slug],
    queryFn: async () =>
      (await apiClient.get<Product>(`api/products/${slug}`)).data,
  });
