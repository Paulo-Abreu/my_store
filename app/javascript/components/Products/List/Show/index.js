import React, { Component } from "react";
import './style.css';
import axios from 'axios';

const handleSubmit = (id) => {
  // TODO: Remove this console.log
  axios.post("/api/v1/likes", { product_id: id }).then((response) => {
    (window.location = "/"), console.log(response);
  });
};

const ShowProduct = (props) => {
  return (
    <div className="card page-content">
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <h1 className="title">{props.data.product.name}</h1>
            <p id="date">Produto postado em: {props.data.product.date}</p>
            <br />
            <h4 className="subtitle">Detalhes: {props.data.product.details}</h4>
            <br />
            <h4 className="subtitle">Price: {props.data.product.price}</h4>
            <br />
            <img
              className="img"
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
            <br />
            <br />
            <button className="button is-info">Back</button>
            <button className="button is-light" onClick={() => {handleSubmit(props.data.product.id)}}><i className="far fa-thumbs-up"></i></button>
            <button className="button is-link" onClick={() => {window.location = "/products/" + props.data.product.id + "/buy";}}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowProduct;