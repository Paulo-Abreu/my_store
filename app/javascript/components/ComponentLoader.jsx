import React, { Component } from 'react';
import Home from './Home';  
import ProductsForm from './Products/ProductsForm';
import ProductsList from './Products/List';
import CheckoutPage from './Products/Checkout';

class ComponentLoader extends Component {
  components = {
    home: Home,
    products_form: ProductsForm,
    products_list: ProductsList,
    checkout_page: CheckoutPage,
  };

  render() {
    const TagName = this.components[this.props.tag || 'eventList'];
    return <TagName data={this.props.data.data} />
  }
}
export default ComponentLoader;
