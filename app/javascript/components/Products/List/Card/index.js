import React, { Component } from "react";
import './style.css';

const Card = (props) => {
  return (
    <div>
      <div className="card product-card">
        <a
          onClick={() => {
            window.location = "/products/" + props.product.id;
          }}
        >
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{props.product.name}</p>
                <p className="subtitle is-6">R${props.product.price}</p>
              </div>
            </div>

            <div className="content">
              <p>
                <i class="far fa-thumbs-up">{props.product.likes_count}</i>
              </p>
            </div>
          </div>
        </a>  
      </div>
    </div>
  );
}
export default Card;