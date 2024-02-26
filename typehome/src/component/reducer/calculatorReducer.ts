import { CalculatorAction, CalculatorStateType } from "../type/commonType";

export function CalculatorReducer(
  state: CalculatorStateType,
  action: CalculatorAction
): CalculatorStateType {
  switch (action.type) {
    case "ADD": {
      let result = action.x + action.y;
      return {
        ...state,
        result: result,
        operator: "+",
        x: action.x,
        y: action.y,
      };
    }
    case "SUB": {
      let result = action.x - action.y;
      return {
        ...state,
        result: result,
        operator: "-",
        x: action.x,
        y: action.y,
      };
    }
    case "MUL": {
      let result = action.x * action.y;
      return {
        ...state,
        result: result,
        operator: "*",
        x: action.x,
        y: action.y,
      };
    }
    case "DIV": {
      let result = action.x / action.y;
      return {
        ...state,
        result: parseFloat(result.toFixed(2)),
        operator: "/",
        x: action.x,
        y: action.y,
      };
    }
    default:
      throw new Error("지원하지 않는 액션입니다.");
  }
}
