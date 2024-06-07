import axiosInstance, { endpoints } from "@/utils/axios";

const deleteCategory = async (id) => {
  try {
    const response = await axiosInstance.delete(endpoints.categories.byId(id));
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export default deleteCategory;
