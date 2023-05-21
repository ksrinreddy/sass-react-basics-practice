import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="showhide"
        style={{ marginTop: "3rem", textAlign: "center" }}
      >
        <button className="btn" onClick={() => setShow(!show)}>
          show/hide
        </button>
        {show && <Item />}
      </div>
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <h1>window</h1>
      <h3>size: {size}px </h3>
    </>
  );
};

export default ShowHide;
