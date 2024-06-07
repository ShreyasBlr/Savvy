import axiosInstance, { endpoints } from "@/utils/axios";

const createCategory = async (category) => {
  try {
    const response = await axiosInstance.post(
      endpoints.categories.root,
      category
    );
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategory;
