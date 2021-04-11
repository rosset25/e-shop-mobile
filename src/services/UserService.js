import { registerUser } from "../api/UserApi";

export const UserService = {
  registerUser: async (formData) => {
    const result = await registerUser(formData);
    return result;
  },
};
