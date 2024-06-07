"use client";

import { useCallback, useEffect, useState } from "react";

import getCategories from "@/services/categories/get-categories";

import CategoriesTable from "./categories-table";

const IncomeCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    const data = await getCategories({ income: true });
    setCategories(data);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <CategoriesTable
      categories={categories}
      fetchCategories={fetchCategories}
    />
  );
};
export default IncomeCategories;
