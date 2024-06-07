import axiosInstance, { endpoints } from "@/utils/axios";

const createTransaction = async (transaction) => {
  try {
    const response = await axiosInstance.post(
      endpoints.transactions.root,
      transaction
    );
    const { data } = response;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default createTransaction;
