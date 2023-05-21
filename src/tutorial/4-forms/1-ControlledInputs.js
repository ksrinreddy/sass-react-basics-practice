import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    const person = { id: new Date().getTime().toString(), firstName, email };
    console.log(person);
    setFirstName("");
    setEmail("");
    setPeople((people) => {
      return [...people, person];
    });
  };

  return (
    <>
      <section className="section-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName" className="label">
              Name :
            </label>
            <input
              type="text"
              className="input"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            add person
          </button>
        </form>
        <div className="items-list">
          {people.map((person) => {
            const { id, firstName, email } = person;
            return (
              <div className="item" key={id}>
                <h4 className="name">{firstName}</h4>
                <p className="email">{email}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ControlledInputs;
