import { isFocusable } from "@testing-library/user-event/dist/utils";
import { useReducer, useState } from "react";
/*
  reducer => 현재 상태와 액션(함수)객체를 받아와서 새로운 상태를 반환한다.
  function(currentState, action) {
    //현재 상태에 action을 가하여 새로운 상태를 만들어서 새로운 상태값을 반환한다.
    return newSate
  }

  사용목적: 상태와 함수를 분리해서 처리하기 위해 주로 redux 라이브러리가 이렇게 구축되어 있다. 컴포넌트 간에 props 드릴링이 발생할 경우
  컴포넌트 구조가 복잡할 때 이 방법으로 명확한 의사전달이 어려워진다. 그래서 모두가 사용하는 공통 공간에 함수를 두고 이 함수를 직접 호출하게 한다.
*/

//상태정보타입
interface MyState {
  count: number;
}

//Reducer에 전달할 Action: 함수인데 타입을 미리 지정해야 한다.
type CounterAction =
  | { type: "increase"; value: MyState["count"] }
  | { type: "decrease"; value: MyState["count"] };

//reducer에게 초기상태를 전달해 주어야 한다.
//const initialState: MyState - 변수선언문
//{count: 0} - 초기값

const initialState: MyState = { count: 0 };

//ruducer한테 전달할 함수를 만들자, 매개변수는 앞에 이전 state, 뒤에 함수, 반환값이 새로운 state이어야 한다.
//typescript에서 함수를 선언할 때 매개변수도 타입이 있어야 하지만 반환타입도 지정을 해야한다.
function StateReducer(state: MyState, action: CounterAction): MyState {
  switch (action.type) {
    case "increase":
      //새로운 상태 반환 - 디비로 데이터를 읽어온다.
      //json의 전개ㅡ 앞의 state에 현재 상태 추가하기
      return { ...state, count: action.value };
    case "decrease":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

function Counter2() {
  // const [number, setNumber] = useState<MyState>({ count: 0 });
  const [status, dispatch] = useReducer(StateReducer, initialState);
  //앞에가 상태정보, dispatch함수임
  //StateReducer를 dispatch를 써서 호출하라는 의미임

  //useReducer를 써서 함수 두개를 외부로 내보내려고 한다. increase와 decrease가 백엔드와 통신을 한다면
  //각 컴포넌트마다 통신을 담당할 코드가 엄청 많다. 이걸 한곳에서 몰아서 처리를 할 수 있다.
  const increase = () => {
    dispatch({ type: "increase", value: status.count + 1 });
  };
  const decrease = () => {
    dispatch({ type: "decrease", value: status.count - 1 });
  };
  return (
    <div>
      <h1>현재 카운트 : {status.count}</h1>
      <button type="button" onClick={increase}>
        ++
      </button>
      <button type="button" onClick={decrease}>
        --
      </button>
    </div>
  );
}

export default Counter2;
