import React from "react";
import defaultImage from "./assets/default-image.jpeg";
import PropTypes from "prop-types";

const Product = ({ name, price, image }) => {
  const imageUrl = image && image.url;
  return (
    <article className="single-product">
      <img src={imageUrl || defaultImage} alt={name} className="image" />
      <div className="info">
        <h4 className="name">{name || "default name"}</h4>
        <h4 className="price">${price || 3.99}</h4>
      </div>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
