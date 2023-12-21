# localStorage sample

## How to use

```sh
$ npm install
$ npm start
```

## Memo

- src/hooks/useLocalStorage.js

  - localStorage を使うための hooks
  - useState の引数に localStorage の値を取得する関数を渡している
    - そうすることで、初期表示時に localStorage の値を取得できる
  - useEffect で localStorage の値を更新する
    - localStorage の値が変更されたら、コンポーネントの再描画が走る
    - unmount 時に localStorage の値を削除する

- /src/components/Calc.js
  - ボタンを押したら、localStorage に保存されている値を取得して、計算して、localStorage に保存する
- /src/components/CalcRealtime.js
  - 値を入力した瞬間に localStorage を操作する
