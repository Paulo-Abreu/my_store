import React from "react";
import TableStock from "./Table";

const Stock = (props) => {
  
  const Table = props.data.products.map((product) =>
    <TableStock name={product.name} price={product.price} quantity={product.quantity} key={product.id}/>
  )

  return (
    <div>
      <div>
        {Table}
      </div>
    </div>
  );
}
export default Stock;