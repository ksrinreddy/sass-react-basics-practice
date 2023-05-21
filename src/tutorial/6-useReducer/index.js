import React, { useReducer, useRef, useState } from "react";
import { data } from "./data";
import Modal from "./Modal";

// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      <section className="section-useReducer">
        {state.isModalOpen && (
          <Modal modalContent={state.modalContent} closeModal={closeModal} />
        )}
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-add">
            add
          </button>
        </form>
        <div className="list">
          {state.people.map((person) => {
            return (
              <article className="list-item" key={person.id}>
                <p className="item-title">{person.name}</p>
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", paylaod: person.id })
                  }
                >
                  remove
                </button>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Index;
