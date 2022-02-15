import React from "react";
import UserProducts from "..";
const UserShow = (props) => {
  const Table = props.data.products.map((product) => (
    <UserProducts
      created_at={product.created_at}
      details={product.details}
      price={product.price}
      id={product.id}
      key={product.id}
    />
  ));

  return (
    <div>
      <div>{Table}</div>
    </div>
  );
};
export default UserShow;
