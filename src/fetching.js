import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Fetching = ({ apiUrl }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, [apiUrl]);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <p className="product-description">{product.description}</p>
          <Link to={`/viewproduct/${product.id}`} className="buy-now">
            Buy Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Fetching;
