import axiosInstance, { endpoints } from "@/utils/axios";

const getMonthlySummary = async () => {
  try {
    const response = await axiosInstance.get(
      endpoints.transactions.monthlySummary
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getMonthlySummary;
