import React from "react";
import './style.css'
import Card from "./Card";
const ProductsList = (props) => {
  
  const ListCards = props.data.products.map((product) =>
    <Card name={product.name} price={product.price} details={product.details} id={product.id} likes={product.likes_count} key={product.id}/>
  )

  return (
    <div>
      <h1 className="title title-page">Anuncios</h1>
      <hr />
      <div className="show-products" >
        {ListCards}
      </div>
    </div>
  );
}
export default ProductsList;