import React, { Component } from "react";
import axios from "axios";
import './style.css'

export default class ProductsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      details: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { name, price, details } = this.state;

    axios
      .post(
        "/api/v1/products",
        {
          product: {
            name: name,
            price: price,
            details: details
          }
        },
        window.location = '/products'
      )
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table className="card product-card-form">
            <h1 className="title">Formulario de Produto</h1>
            <div className="form">
              <tr className="card-content">
                <td>
                  <label className="label"><h3>⠀⠀Name⠀⠀</h3></label>
                </td>
                <td>
                  <input
                    className="input is-info"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <br />
              <br />
              <tr className="card-content">
                <td>
                  <label className="label"><h3>⠀Detalhes⠀</h3></label>
                </td>
                <td>
                  <input
                    className="input is-info"
                    name="details"
                    type="text"
                    placeholder="Details"
                    value={this.state.details}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <br />
              <br />
              <tr className="card-content">
                <td>
                  <label className="label"><h3>⠀⠀Preço⠀⠀</h3></label>
                </td>
                <td>
                  <input
                    className="input is-info"
                    type="number"
                    name="price"
                    placeholder="R$9999"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr className="card-content image">
                <td><label className="label">Imagem:⠀</label></td>
                <td>
                  <input type="file" ref="inputFile" />
                </td>
              </tr>
              <div className="footer-form">
                <button className="button is-info add-product" id="button" type="submit" onSubmit={this.handleSubmit}>Criar Produto!</button>
                  <br/>
                  <br/>
                <button className="button is-info add-product" id="button">
                  Back
                </button>
              </div>
            </div>
          </table>
        </form>
      </div>
    );
  }
}