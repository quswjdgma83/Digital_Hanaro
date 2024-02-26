//상태정보타입- 마치 json처럼 사용가능하다
export interface MyState {
  count: number;
}
//Reducer에 전달할 Action : 함수인데 타입을 미리 지정해야 한다
//type만 지정, 함수타입 2개 더 추가하기
export type CounterAction =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "reset" }
  | { type: "add"; count: 5 };

export type CalculatorStateType = {
  x: number;
  y: number;
  result: number;
  operator: string;
};

export type CalculatorAction =
  | { type: "ADD"; x: number; y: number }
  | { type: "SUB"; x: number; y: number }
  | { type: "DIV"; x: number; y: number }
  | { type: "MUL"; x: number; y: number }
  | { type: "reset"; x: number; y: number; result: number; operator: "" };
