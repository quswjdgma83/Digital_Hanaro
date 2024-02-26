import { useReducer, useState } from "react";
import { myStateReducer } from "./reducer/myreducer";
import { MyState } from "./type/commonType";
/*
  reducer => 현재 상태와 액션(함수)객체를 받아와서 새로운 상태를 반환한다.
  function(currentState, action) {
    //현재 상태에 action을 가하여 새로운 상태를 만들어서 새로운 상태값을 반환한다.
    return newSate
  }

  사용목적: 상태와 함수를 분리해서 처리하기 위해 주로 redux 라이브러리가 이렇게 구축되어 있다. 컴포넌트 간에 props 드릴링이 발생할 경우
  컴포넌트 구조가 복잡할 때 이 방법으로 명확한 의사전달이 어려워진다. 그래서 모두가 사용하는 공통 공간에 함수를 두고 이 함수를 직접 호출하게 한다.
*/

//reducer에게 초기상태를 전달해 주어야 한다.
//const initialState: MyState - 변수선언문
//{count: 0} - 초기값

const initialState: MyState = { count: 0 };

function Counter3() {
  // const [number, setNumber] = useState<MyState>({ count: 0 });
  const [status, dispatch] = useReducer(myStateReducer, initialState);
  //앞에가 상태정보, dispatch함수임
  //StateReducer를 dispatch를 써서 호출하라는 의미임

  //useReducer를 써서 함수 두개를 외부로 내보내려고 한다. increase와 decrease가 백엔드와 통신을 한다면
  //각 컴포넌트마다 통신을 담당할 코드가 엄청 많다. 이걸 한곳에서 몰아서 처리를 할 수 있다.
  const increase = () => {
    dispatch({ type: "increase" });
  };
  const decrease = () => {
    dispatch({ type: "decrease" });
  };
  const reset = () => {
    dispatch({ type: "reset" });
  };
  const add = () => {
    dispatch({ type: "add", count: 5 });
  };
  return (
    <div>
      <h1>현재 카운트 : {status.count}</h1>
      <button type="button" onClick={increase}>
        ++
      </button>
      <button type="button" onClick={decrease}>
        --
      </button>{" "}
      <button type="button" onClick={reset}>
        초기화
      </button>
      <button type="button" onClick={add}>
        +5
      </button>
    </div>
  );
}

export default Counter3;
