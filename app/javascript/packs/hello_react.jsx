import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';
import Main from '../components/Main';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('dashboard')

  if (element) {
    const rawData = Object.assign({}, element.dataset);
    const propsData = Object.keys(rawData).reduce((acc, prop) => {
      acc[prop] = JSON.parse(rawData[prop]);
      return acc;
    }, {});

    ReactDOM.render(
      <Main data={propsData} />,
      document.body.appendChild(document.createElement('div')),
    )
  }

})
