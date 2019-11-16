import Axios, { AxiosResponse } from "axios";

const Request = async (URL: string): Promise<string> => {
  try {
    const response: AxiosResponse = await Axios.get(URL);
    return response.data;
  } catch (err) {
    throw new Error("Axios request failed.");
  }
}

export default Request;
