import axiosInstance, { endpoints } from "@/utils/axios";

const updateCategory = async (category, data) => {
  try {
    const response = await axiosInstance.put(
      endpoints.categories.byId(category),
      data
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategory;
