import { QueryFunction, QueryKey } from "@tanstack/react-query";
import axios from "axios";
import { UserType } from "@/types/user.type";
import { RepoType } from "@/types/repo.type";

export const getUser:
  | QueryFunction<UserType, QueryKey, never>
  | undefined = async ({ queryKey }) => {
  try {
    checkNetwork();
    const userName = queryKey[1];
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) throw new Error(error.response.data.message);
      else if (error.request) throw new Error(error.message);
      throw new Error(`Error: ${error.message}`);
    } else {
      throw error;
    }
  }
};

export const getRepos:
  | QueryFunction<RepoType[], QueryKey, unknown>
  | undefined = async ({ queryKey, pageParam }) => {
  try {
    checkNetwork();
    const userName = queryKey[1];
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=4&page=${pageParam}`,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) throw new Error(error.response.data.message);
      else if (error.request) throw new Error(error.message);
      throw new Error(`Error: ${error.message}`);
    } else {
      throw error;
    }
  }
};

function checkNetwork() {
  if (!navigator.onLine) throw new Error("Network request failed");
}
