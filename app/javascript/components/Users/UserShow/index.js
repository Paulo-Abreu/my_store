import React, { Component } from "react";

const UserProducts = (props) => {
  return (
    <div className="card page-content">
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <h1 className="title"></h1>
            <p id="date">Produto postado em: {props.created_at}</p>
            <br />
            <h4 className="subtitle">Detalhes: {props.details}</h4>
            <br />
            <h4 className="subtitle">Price: {props.price}</h4>
            <br />
            <img
              className="img"
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
            <br />
            <br />
            <button className="button is-info">Back</button>
            <button
              className="button is-link"
              onClick={() => {
                window.location = "/products/" + props.id + "/buy";
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProducts;
