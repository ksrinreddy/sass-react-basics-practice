import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // value update form/method
      // setValue(value + 1);

      // functional update form/method
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section className="counter">
        <h3 className="counter__title">regualr counter</h3>
        <p className="counter__value">{value}</p>
        <div className="counter__btn-container">
          <button
            className="counter__btn decrease"
            onClick={() => setValue(value - 1)}
          >
            decrease
          </button>
          <button className="counter__btn reset" onClick={reset}>
            reset
          </button>
          <button
            className="counter__btn increase"
            onClick={() => setValue(value + 1)}
          >
            increase
          </button>
        </div>
      </section>
      <section className="complex-counter">
        <h3 className="complex-counter__title">complex counter</h3>
        <p className="complex-counter__value">{value}</p>
        <button
          className="complex-counter__btn increase-later"
          onClick={complexIncrease}
        >
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
