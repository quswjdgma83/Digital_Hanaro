import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Counter1 from "./component/counter1";
import Layout from "./component/Layout";
import Counter2 from "./component/counter2";
import Counter3 from "./component/counter3";
import Calculator from "./component/calculator";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 전체를 감싸는 Route가 있어야 하고, 태그 내에 문서 전체의 레이아웃 잡는 컴포넌트가 있어야 한다. */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/counter1" element={<Counter1 />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="/counter3" element={<Counter3 />} />
          <Route path="/calc" element={<Calculator />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
