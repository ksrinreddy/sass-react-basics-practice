import React from "react";

const ErrorExample = () => {
  let text = "random text";

  const handleClick = () => {
    text = "changed text";
    // console.log(text);
  };

  return (
    <>
      <article className="error container grid">
        <h3 className="error__title">Error example</h3>
        <div className="error__info">
          <p className="error__info-text">{text}</p>
          <button
            type="button"
            className="btn error__btn"
            onClick={handleClick}
          >
            change text
          </button>
        </div>
      </article>
    </>
  );
};

export default ErrorExample;
