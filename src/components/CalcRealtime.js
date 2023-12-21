import { useLocalStorage } from "../hooks/localStorage";

export const CalcRealtime = () => {
  const [earnings, setEarnings] = useLocalStorage("earnings-r", 10);
  const [costs, setCosts] = useLocalStorage("costs-r", 3);
  const [profits, setProfits] = useLocalStorage("profits-r", 7);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 必要に応じてDBに保存する処理を実装する
    alert("DBに保存しました");
  };

  return (
    <div>
      <h1>リアルタイム計算バージョン</h1>
      <form onSubmit={handleSubmit}>
        売上:
        <input
          placeholder="売上"
          type="text"
          value={earnings}
          onChange={(e) => {
            setEarnings(e.target.value);
            setProfits(e.target.value - costs);
          }}
        />{" "}
        千円
        <br />
        経費:
        <input
          type="text"
          placeholder="経費"
          value={costs}
          onChange={(e) => {
            setCosts(e.target.value);
            setProfits(earnings - e.target.value);
          }}
        />{" "}
        千円
        <div>
          <br />
          <input type="submit" value="保存" />
        </div>
        <h3>
          売上: {earnings},000 - 経費: {costs},000 = 利益: {profits},000
        </h3>
      </form>
    </div>
  );
};
