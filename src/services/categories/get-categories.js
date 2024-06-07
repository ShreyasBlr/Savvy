import axiosInstance, { endpoints } from "@/utils/axios";

const getCategories = async (type) => {
  const income = Boolean(type?.income);
  const expense = Boolean(type?.expense);
  try {
    const response = await axiosInstance.get(
      `${endpoints.categories.root}?income=${income}&expense=${expense}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getCategories;
