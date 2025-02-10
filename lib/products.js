import axiosInstance from "./http";


export async function getProducts() {
    const response = await axiosInstance.get('/products');
    return response.data;
}