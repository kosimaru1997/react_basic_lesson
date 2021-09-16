import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./comprrnents/ColorfulMessag";

const App = () => {
  const [num, setNum] = useState(0);
  const [bool, setBool] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const switchShowFlag = () => {
    setBool(!bool);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        bool || setBool(true);
      } else {
        bool && setBool(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={switchShowFlag}>on/off</button>
      {bool && <p>( @@)</p>}
    </>
  );
};

export default App;
