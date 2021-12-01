import React, { Component } from 'react';
import Home from './Home';  
import ProductsForm from './Products/ProductsForm';
import ProductsList from './Products/List';

class ComponentLoader extends Component {
  components = {
    home: Home,
    products_form: ProductsForm,
    products_list: ProductsList,
  };

  render() {
    const TagName = this.components[this.props.tag || 'eventList'];
    return <TagName data={this.props.data.data} />
  }
}
export default ComponentLoader;
