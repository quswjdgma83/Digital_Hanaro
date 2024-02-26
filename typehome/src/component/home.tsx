import { useEffect, useState } from "react";
import MyButton from "./mybutton";

type Status = "idle" | "loading" | "success" | "error";

function Home() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [username, setUserName] = useState<string>("임꺽정");
  const [fruit, setFruit] = useState<string[]>([
    "사과",
    "수빅",
    "오렌지",
    "딸기",
    "참외",
  ]);
  const [status, setStatus] = useState<Status>("loading");
  const [userInfo, serUserInfo] = useState<{ name: string; age: number }>({
    name: "홍길동",
    age: 23,
  });

  useEffect(() => {
    // setStatus("fail"); //일부러 에러일으킴
    setStatus("success");
  }, []);

  return (
    <div>
      <h1>home</h1>
      <MyButton title="타입스크립트" name="홍길동" disabled />
      <MyButton title="타입스크립트" name="홍길동" />
      <br />
      {userInfo.name} {userInfo.age} <br />
      {username} {enabled ? "true" : "false"}
      {fruit.map((item: string) => {
        return <h3>{item}</h3>;
      })}
      <br />
      현재상태: {status}
    </div>
  );
}

export default Home;
