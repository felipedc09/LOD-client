import errorHandler from "@/utils/errorHandler";
import  axios  from "axios";

const BASE_URL = 'https://lod-cloud-server.herokuapp.com'

export const getInstances = async (): Promise<Instance[]> => {
    try {
       const {data: instances} = await axios.get(`${BASE_URL}/instances`)
       return instances
    } catch (error) {
      throw errorHandler(error)  
    }
}

export const getInstanceByName = async (name: string): Promise<Instance[]> => {
    try {
       const {data: instance} = await axios.get(`${BASE_URL}/instances/${name}`)
       return instance
    } catch (error) {
      throw errorHandler(error)  
    }
}