import React from "react";

const SalesLinks = (props) => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a
          className="menu-link"
          onClick={() => {
            window.location = "/users/";
          }}
        >
          <i className="fas fa-users"></i>
          <p className="title is-4 has-text-white">Usuarios</p>
        </a>
      </li>
      <li className="menu-item">
        <a
          className="menu-link"
          onClick={() => {
            window.location = "/products/";
          }}
        >
          <i className="fas fa-shopping-basket"></i>
          <p className="title is-4 has-text-white">Anuncios</p>
        </a>
      </li>
      <li className="menu-item">
        <a
          className="menu-link"
          onClick={() => {
            window.location = "/products/new";
          }}
        >
          <i className="fas fa-shopping-basket"></i>
          <p className="title is-4 has-text-white">Anunciar</p>
        </a>
      </li>
      <li className="menu-item">
        <a
          className="menu-link"
          onClick={() => {
            window.location = "/timeline";
          }}
        >
          <i className="fas fa-boxes"></i>
          <p className="title is-4 has-text-white">Timeline</p>
        </a>
      </li>
    </ul>
  );
};

export default SalesLinks;
