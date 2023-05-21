import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  console.log("render component");

  useEffect(() => {
    console.log("hello there");
  }, []);

  return (
    <>
      <div className=" basics">
        <h1 className="value">{value}</h1>
        <button className="btn" onClick={() => setValue(value + 1)}>
          click
        </button>
      </div>
    </>
  );
};

export default UseEffectBasics;
