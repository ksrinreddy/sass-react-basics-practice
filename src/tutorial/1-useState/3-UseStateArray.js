import React from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      <article className="array grid">
        <h3 className="array__title">useStateArray</h3>
        {people.map((person) => {
          // console.log(person);
          const { id, name } = person;
          return (
            <div className="array__item" key={id}>
              <h4>{name}</h4>
              <button
                className="btn array__remove-btn"
                onClick={() => removeItem(id)}
              >
                remove
              </button>
            </div>
          );
        })}
        <button className="array__clear-btn" onClick={() => setPeople([])}>
          clear items
        </button>
      </article>
    </>
  );
};

export default UseStateArray;
