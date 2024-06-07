"use client";

import { useParams } from "next/navigation";

import AddEditCategoryView from "@/sections/categories/views/add-edit-category-view";
import { useEffect, useState } from "react";
import getCategoryById from "@/services/categories/get-category-by-id";

const AddCategoryPage = () => {
  const params = useParams();

  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategoryById(params.id);
        setCategory(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    if (params.id) {
      fetchCategory();
    }
  }, [params.id]);

  return <AddEditCategoryView currCategory={category} />;
};
export default AddCategoryPage;
