import React from 'react';

const CustomerLinks = (props) => {
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
            window.location = "/explore/";
          }}
        >
          <i className="fas fa-users"></i>
          <p className="title is-4 has-text-white">Explorar</p>
        </a>
      </li>
    </ul>
  );
}

export default CustomerLinks;
                      