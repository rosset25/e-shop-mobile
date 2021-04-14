import { registerUser, loginUser } from "../api/UserApi";

export const UserService = {
  registerUser: async (formData) => {
    const result = await registerUser(formData);
    return result;
  },
  loginUser: async (formData) => {
    const result = await loginUser(formData);
    return result;
  },
};
