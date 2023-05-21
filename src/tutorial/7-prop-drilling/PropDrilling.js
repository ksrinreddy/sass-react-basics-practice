import React, { useState } from "react";
import { data } from "./data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      <section className="section-prop-drilling">
        <h3 className="title">prop drilling</h3>
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <article className="list">
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </article>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="single-item">
      <h4 className="name">{name}</h4>
      <button className="btn-remove" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
