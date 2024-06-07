import axiosInstance, { endpoints } from "@/utils/axios";

const getCategories = async ({ income = false, expense = false }) => {
  try {
    const response = await axiosInstance.get(endpoints.categories.root, {
      params: {
        income,
        expense,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getCategories;
