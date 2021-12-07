import React, { Component } from "react";
import './style.css';

const ShowProduct = (props) => {
  return (
    <div class="card page-content">
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <h1 class="title">{props.data.product.name}</h1>
            <p id="date">Produto postado em: {props.data.product.name}</p>
            <br />
            <h4 class="subtitle">Detalhes: {props.data.product.name}</h4>
            <br />
            <h4 class="subtitle">Price: {props.data.product.name}</h4>
            <br />
            <img
              class="img"
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
            <br />
            <br />
            <button class="button is-info">Back</button>
            <button
              class="button is-success"
              onClick={() => { window.location = "/products/" + props.data.product.id + "/buy";}}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShowProduct;