import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [match.params.id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
