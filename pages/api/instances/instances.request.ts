import errorHandler from "@/utils/errorHandler";
import axios from "axios";

const baseURL = process.env.BASE_URL;

export const getInstances = async (): Promise<Instance[]> => {
  try {
    const { data: instances } = await axios.get(`${baseURL}/instances`);
    return instances;
  } catch (error) {
    throw errorHandler(error);
  }
};

export const getInstanceById = async (id: string): Promise<Instance[]> => {
  try {
    const { data: instance } = await axios.get(`${baseURL}/instances/${id}`);
    return instance;
  } catch (error) {
    throw errorHandler(error);
  }
};
