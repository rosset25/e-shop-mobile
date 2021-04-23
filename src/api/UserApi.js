import { API_URL, paramsPOST } from "./BaseApi";
import {
  userRegistrationInfo,
  userLoginInfo,
  successfulLoginResponse,
  failedResponse,
  defaultErrorResponse,
} from "../utils/parser";

export async function registerUser(formData) {
  const url = `${API_URL}/auth/local/register`;
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

export async function loginUser(formData) {
  const url = `${API_URL}/auth/local`;
  const parsedData = userLoginInfo(formData);

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
