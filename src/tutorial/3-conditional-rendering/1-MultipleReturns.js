import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getUser = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const user = await response.json();
        // console.log(user);
        // some bug in rerendering the user when changed url and reset to initial(original) url, fix it.
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div className="is-loading">
        <h2 className="is-loading__text">loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="is-error">
        <h2 className="is-error__text">error...</h2>
      </div>
    );
  }
  return (
    <div className="mr-user">
      <h2 className="mr-user__text">{user}</h2>
    </div>
  );
};

export default MultipleReturns;
