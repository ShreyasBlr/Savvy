import axiosInstance, { endpoints } from "@/utils/axios";

const getTransactions = async (type) => {
  const income = Boolean(type?.income);
  const expense = Boolean(type?.expense);
  try {
    const response = await axiosInstance.get(endpoints.transactions.root, {
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

export default getTransactions;
