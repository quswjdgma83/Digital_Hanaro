import { useReducer, useState } from "react";
import { CalculatorReducer } from "./reducer/calculatorReducer";
import { CalculatorStateType } from "./type/commonType";

function Calculator() {
  const initialState: CalculatorStateType = {
    x: 0,
    y: 0,
    result: 0,
    operator: "",
  };
  const [state, dispatch] = useReducer(CalculatorReducer, initialState);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const xChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setX(Number(e.target.value));
  const yChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setY(Number(e.target.value));

  const Add = () => {
    dispatch({ type: "ADD", x: x, y: y });
  };
  const Sub = () => {
    dispatch({ type: "SUB", x: x, y: y });
  };
  const Mul = () => {
    dispatch({ type: "MUL", x: x, y: y });
  };
  const Div = () => {
    dispatch({ type: "DIV", x: x, y: y });
  };

  return (
    <div>
      x: <input type="number" onChange={xChange} /> <br />
      y: <input type="number" onChange={yChange} /> <br />
      <button type="button" onClick={Add}>
        +
      </button>{" "}
      <br />
      <button type="button" onClick={Sub}>
        -
      </button>{" "}
      <br />
      <button type="button" onClick={Mul}>
        *
      </button>{" "}
      <br />
      <button type="button" onClick={Div}>
        /
      </button>{" "}
      <br />
      <h1>
        결과: {state.x} {state.operator} {state.y} = {state.result}
      </h1>
    </div>
  );
}

export default Calculator;
