import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};

export { useFetch };
