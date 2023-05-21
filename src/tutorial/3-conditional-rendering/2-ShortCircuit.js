import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  // console.log(secondValue);
  return (
    <>
      <div className="shortcircuit">
        {/* <h1 className="first">{firstValue}</h1> */}
        {/* <h1 className="second">value: {secondValue}</h1> */}

        <h1 className="or-operator">{text || "ram"}</h1>
        <button className="btn" onClick={() => setIsError(!isError)}>
          toggle error
        </button>
        {/* {text && <h1>hello world</h1>} */}
        {/* {!text && <h1>hello people</h1>} */}
        {isError && <h1>Error...</h1>}
        {isError ? (
          <p>there is an error..</p>
        ) : (
          <div>
            <h2>there is no error</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ShortCircuit;
