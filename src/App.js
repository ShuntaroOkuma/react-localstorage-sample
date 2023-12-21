import { CalcRealtime } from "./components/CalcRealtime";
import { Calc } from "./components/Calc";

const App = () => {
  return (
    <div>
      <div text-align="right">
        <h4>React × localStorage Sample</h4>
      </div>
      <div>
        <CalcRealtime />
        <br />
        <Calc />
      </div>
    </div>
  );
};
export default App;
