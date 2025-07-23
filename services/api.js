import axios from "axios";

axios.defaults.baseURL = "https://nodejs-ingenium-life-ua.onrender.com";

export const fetchPosts = async (page, signal) => {
  try {
    const response = await axios.get(`/blog?page=${page}`, {
      signal,
    });
    const posts = response.data?.data?.data;
    console.log("Full response:", response.data);
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
