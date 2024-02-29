import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // 初期値を設定
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // localStorageから値を取得
      const item = window.localStorage.getItem(key);
      // 値が存在する場合はパースして返す、そうでなければ初期値を返す
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // エラーが発生した場合は、初期値を返す
      console.log(error);
      return initialValue;
    }
  });

  // 値を更新する関数
  const setValue = (value) => {
    try {
      // 値をセット
      setStoredValue(value);
      // localStorageに値を保存
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // localStorageの変更を検知するイベントリスナーを設定
    const handleStorageChange = () => {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.log(error);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
