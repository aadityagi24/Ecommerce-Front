import { useState, useEffect } from "react";
import axios from "axios";

function useCategory() {
  const [categories, setCategories] = useState([]);

  // Get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/api/v1/category/get-category`);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}

export default useCategory;
