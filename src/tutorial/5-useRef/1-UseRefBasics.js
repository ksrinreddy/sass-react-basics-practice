import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  // console.log(refContainer);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    console.log(refContainer.current.value);
    refContainer.current.value = "";
    // console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form-useRef" onSubmit={handleSubmit}>
        <input type="text" className="input-value" ref={refContainer} />
        <button type="submit" className="btn-submit">
          submit
        </button>
        <div ref={divContainer}>hello useref</div>
      </form>
    </>
  );
};

export default UseRefBasics;
