import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  // useStateに関数を渡すことで、ローカルストレージの値を取得
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // localStorageのkeyかvalueが変更された時に、localStorageを更新
  useEffect(() => {
    try {
      localStorage.setItem(key, storedValue);
    } catch (error) {
      console.log(error);
    }
    return () => {
      localStorage.removeItem(key);
    };
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
