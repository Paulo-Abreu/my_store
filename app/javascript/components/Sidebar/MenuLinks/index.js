import React from 'react';

const MenuLinks = (props) => {
  return (
    <ul className="menu">
      <li className="menu-item">
        <a className="menu-link">
          <i className="fas fa-users"></i>
          <p className="title is-4 has-text-white">Usuarios</p>
        </a>
      </li>
      <li className="menu-item">
        <a className="menu-link">
          <i className="fas fa-shopping-basket"></i>
          <p className="title is-4 has-text-white">Anuncios</p>
        </a>
      </li >
      <li className="menu-item">
        <a className="menu-link" >
          <i className="fas fa-clipboard-list"></i>
          <p className="title is-4 has-text-white">Anunciar</p>
        </a>
      </li >
    </ul >
  )
}

export default MenuLinks;
                      