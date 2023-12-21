import { useLocalStorage } from "../hooks/localStorage";

export const Calc = () => {
  const [earnings, setEarnings] = useLocalStorage("earnings", 10);
  const [costs, setCosts] = useLocalStorage("costs", 3);
  const [profits, setProfits] = useLocalStorage("profits", 7);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfits(earnings - costs);
  };

  return (
    <div>
      <h1>ボタン押したら計算バージョン</h1>
      <form onSubmit={handleSubmit}>
        <br />
        売上:
        <input
          placeholder="売上"
          type="text"
          value={earnings}
          onChange={(e) => {
            setEarnings(e.target.value);
            setProfits("未計算");
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
            setProfits("未計算");
          }}
        />{" "}
        千円
        <div>
          <br />
          <input type="submit" value="再計算" />
        </div>
        <h3>
          {profits === "未計算"
            ? "未計算"
            : `売上: ${earnings},000 - 経費: ${costs},000 = 利益: ${profits},000`}
        </h3>
      </form>
    </div>
  );
};
