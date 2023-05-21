import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  //   console.log(person);
  const changeMessage = () => {
    setPerson({ ...person, message: "hello" });
  };

  return (
    <>
      <article className="object grid">
        <h3 className="object__title">useState Object</h3>
        <h4 className="object__person-name">{person.name}</h4>
        <h4 className="object__person-age">{person.age}</h4>
        <h4 className="object__person-message">{person.message}</h4>
        <button className="btn object__btn" onClick={changeMessage}>
          change message
        </button>
      </article>
    </>
  );
};

export default UseStateObject;
