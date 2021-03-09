import errorHandler from "@/utils/errorHandler";
import  axios  from "axios";

const baseURL = process.env.BASE_URL

export const getPackagesByInstanceId = async (instanceId: string): Promise<Package[]> => {
    try {
       const {data: packages} = await axios.get(`${baseURL}/datasets/${instanceId}`)
       return packages
      } catch (error) {
      throw errorHandler(error)  
    }
}