import React, { useState } from "react";

const MultipleInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  // know how to fix age default value type to number instead of string
  const [person, setPerson] = useState({
    firstName: "",
    age: "",
    email: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (person.firstName && person.email && person.age) {
      const newPerson = { id: new Date().getTime().toString(), ...person };
      // console.log(typeof newPerson.age);
      setPeople((people) => {
        return [...people, newPerson];
      });
      setPerson({ firstName: "", email: "", age: "" });
    }
    // setFirstName("");
    // setEmail("");
    // setAge("");
  };

  return (
    <>
      <section className="section-wrapper">
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName" className="label">
              Name :
            </label>
            <input
              type="text"
              className="input"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              Email :
            </label>
            <input
              type="email"
              className="input"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age" className="label">
              Age :
            </label>
            <input
              type="number"
              className="input"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
        <div className="items-list">
          {people.map((person) => {
            const { id, firstName, age, email } = person;
            return (
              <div className="item" key={id}>
                <h4 className="name">{firstName}</h4>
                <p className="age">{age}</p>
                <p className="email">{email}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MultipleInputs;
