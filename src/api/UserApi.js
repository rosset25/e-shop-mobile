import { API_URL, paramsPOST } from "./BaseApi";
import {
  userRegistrationInfo,
  successfulLoginResponse,
  failedResponse,
  defaultErrorResponse,
} from "../utils/parser";

export async function registerUser(formData) {
  //http://192.168.1.37:1337   ${API_URL}
  const url = `http://192.168.1.37:1337/auth/local/register`;
  const parsedData = userRegistrationInfo(formData);

  try {
    const response = await fetch(url, paramsPOST(parsedData));
    const result = await response.json();
    if (response.ok) {
      return successfulLoginResponse(response, result);
    } else {
      return failedResponse(response, result);
    }
  } catch (error) {
    console.log(error);
    return defaultErrorResponse(500);
  }
}
