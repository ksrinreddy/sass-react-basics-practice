import React, { useState } from "react";

// useState - function

const UseStateBasics = () => {
  // console.log(useState("hello"));
  // const value = useState("x")[0];
  // const handler = useState("x")[1];
  // console.log(value, handler);
  const [text, setText] = useState("random text");
  const handleClick = () => {
    if (text === "random text") {
      setText("changed text");
    } else {
      setText("random text");
    }
  };

  return (
    <>
      <article className="basics container">
        <h3 className="basics__title">useState basics</h3>
        <h1 className="basics__text">{text}</h1>
        <button className="btn basics__btn" onClick={handleClick}>
          change text
        </button>
      </article>
    </>
  );
};

export default UseStateBasics;
