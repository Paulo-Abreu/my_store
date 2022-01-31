import React from "react";
import Card from "./Card";
const ProductsList = (props) => {
  const ListCards = props.data.products.map((product) => (
    <Card product={product} key={product.id} />
  ));

  return (
    <div>
      <h1 className="title title-page">Anuncios</h1>
      <hr />
      <div className="show-products">{ListCards}</div>
    </div>
  );
};
export default ProductsList;
