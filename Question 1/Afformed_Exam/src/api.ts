import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  // Add other product properties here
}

export interface ApiResponse {
  data: {
    products: Product[];
    // Add other properties if needed
  };
}

export const getTopProducts = async (
  company: string,
  category: string,
  limit: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(
    `http://20.244.56.144/test/companies/${company}/categories/${category}/products/top-n?limit=${limit}`
  );
  return response.data;
};
