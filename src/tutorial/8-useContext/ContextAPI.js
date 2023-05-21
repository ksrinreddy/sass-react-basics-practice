import React, { useContext, useState } from "react";
import { data } from "./data";

const PersonContext = React.createContext();
// console.log(PersonContext);
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <section className="section-context-api">
        <h3 className="title">context api / useContext</h3>
        <List people={people} />
      </section>
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <article className="list">
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </article>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  // console.log(text);
  return (
    <div className="single-item">
      <h4 className="name">{name}</h4>
      <button className="btn-remove" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default ContextAPI;
