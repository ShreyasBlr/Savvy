import axiosInstance, { endpoints } from "@/utils/axios";

const updateStartingBalance = async (data) => {
  try {
    await axiosInstance.post(endpoints.users.startingBalance, data);
  } catch (error) {
    throw new Error(error);
  }
};

export default updateStartingBalance;
