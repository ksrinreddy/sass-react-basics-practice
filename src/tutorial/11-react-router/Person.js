import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./data";

const Person = () => {
  //   console.log(useParams());
  const { id } = useParams();
  const [name, setName] = useState("default name");

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <article className="person-page">
      <h1 className="name">{name}</h1>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </article>
  );
};

export default Person;
