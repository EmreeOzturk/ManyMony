export const fetchDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};
export const saveDataToLocalStorage = (key: string, value: string) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export const removeDataFromLocalStorage = (key: string) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
export const clearLocalStorage = () => {
  localStorage.clear();
};
