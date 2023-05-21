import React, { useState } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <section className="people">
      {people.map((person) => {
        return (
          <article className="single-person" key={person.id}>
            <h4 className="name">{person.name}</h4>
            <Link to={`/person/${person.id}`} className="more-info">
              Learn More
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default People;
