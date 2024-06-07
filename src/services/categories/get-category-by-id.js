import axiosInstance, { endpoints } from "@/utils/axios";

const getCategoryById = async (id) => {
  try {
    const response = await axiosInstance.get(endpoints.categories.byId(id));
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export default getCategoryById;
