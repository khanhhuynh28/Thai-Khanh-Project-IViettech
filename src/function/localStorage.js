export const localStorageUlti = (key, defaultVallue) => {
  const get = () =>
    JSON.parse(localStorage.getItem(key)) || defaultVallue;
  const set = (value) => localStorage.setItem(key, JSON.stringify(value));
  const remove = () => localStorage.removeItem(key);
  return {
    get,
    set,
    remove,
  }
}