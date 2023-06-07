import { useMutation } from "@tanstack/react-query";
import { UserInfo } from "../types/UserInfo";
import apiClient from "../apiClient";

interface ISignin {
  email: string;
  password: string;
}

//use useMutation (for post n put req) from react quary to send ajax req to backend to sign in
export const useSigninMutation = () =>
  useMutation({
    mutationFn: async ({ email, password }: ISignin) =>
      (
        await apiClient.post<UserInfo>(`api/users/signin`, {
          email,
          password,
        })
      ).data,
  });
