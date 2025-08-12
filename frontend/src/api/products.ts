import instance from '@/axiosInstance';
import type{ Product } from '@/types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await instance.get('/products');
  let data = response.data
  console.log(data)
  return response.data;
};
