import React, { Component } from 'react';
import Home from './Home';  
import ProductsForm from './Products/ProductsForm';
import ProductsList from './Products/List';
import ShowProduct from './Products/List/Show';
import CheckoutPage from './Products/Checkout';
import Stock from './Stock';
import StockEdit from './Stock/Edit';
import StockRemove from './Stock/Remove';
import PaymentPage from './Products/Payment';
import ViewSale from './Products/Payment/View';

class ComponentLoader extends Component {
  components = {
    home: Home,
    products_form: ProductsForm,
    products_list: ProductsList,
    checkout_page: CheckoutPage,
    show_product: ShowProduct,
    stock: Stock,
    stock_edit: StockEdit,
    stock_remove: StockRemove,
    payment_page: PaymentPage,
    view_sale: ViewSale
  };

  render() {
    const TagName = this.components[this.props.tag || 'eventList'];
    return <TagName data={this.props.data.data}/>
  }
}
export default ComponentLoader;
