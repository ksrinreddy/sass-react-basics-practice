import React from "react";
import { useFetch } from "../9-custom-hooks/2-useFetch";
import Product from "./Product";

const url = "https://course-api.com/react-prop-types-example";

const PropTypesExample = () => {
  const { products } = useFetch(url);
  return (
    <section className="prop-types-section">
      <h2 className="title">prop types</h2>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default PropTypesExample;
