import { fetchDataFromLocalStorage } from "../helper";

export const mainLoader = () => {
  const data = fetchDataFromLocalStorage("userName");
  if (data) {
    return { userName: data as string };
  }
  return { userName: "" };
};
