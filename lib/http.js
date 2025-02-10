import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",  // Replace with your base URL
    withCredentials: true, // Sends cookies with requests
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    },
  });


export async function getCsrfToken() {
    const res = await axiosInstance.get('/csrf-token', {
        credentials: 'include'
    });
    console.log("CSRF", res.data.csrfToken);
    return res.data.csrfToken;
}


axiosInstance.interceptors.request.use(
   (config) => {
    console.log("Interceptor called")
    const token = localStorage.getItem("access_token");
    // const csrfToken = await getCsrfToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // config.headers['X-CSRFToken'] = csrfToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
