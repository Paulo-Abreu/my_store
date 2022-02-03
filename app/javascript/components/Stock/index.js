import React from "react";
import TableStock from "./Table";

const Stock = (props) => {
  
  const Table = props.data.stock.map((product) =>
    <TableStock name={product.item.name} price={product.item.price} quantity={product.quantity} id={product.id} key={product.id}/>
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