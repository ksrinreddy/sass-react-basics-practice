import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const resp = await fetch(url);
    const users = await resp.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="fetch">
        <h1 className="fetch__title">github users</h1>
        <ul className="users grid">
          {users.map((user) => {
            const { id, avatar_url, html_url, login } = user;
            return (
              <li key={id} className="user">
                <img src={avatar_url} alt={login} className="user__img" />
                <div className="user__info">
                  <h4 className="user__login">{login}</h4>
                  <a href={html_url} className="user__profile">
                    Profile
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UseEffectFetchData;
