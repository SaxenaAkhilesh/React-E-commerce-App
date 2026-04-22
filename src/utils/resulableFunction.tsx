let timer: any;
export const debouncing = (fn: Function, delay = 300) => {

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};