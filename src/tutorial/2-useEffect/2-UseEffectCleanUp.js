import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  // console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("call useEffect");
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");

  return (
    <>
      <div className="cleanup">
        <h1 className="window">window width</h1>
        <h2 className="size">{size} px</h2>
      </div>
    </>
  );
};

export default UseEffectCleanUp;
