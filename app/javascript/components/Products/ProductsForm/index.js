import React, { useState } from "react";
import axios from "axios";
import './style.css'

const ProductsForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (event) => {
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

  return (
    <div>
      <form className="card product-card-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="text" placeholder="John" value={name} onChange={e => setName(e.target.value)} />
            <span className="icon is-small is-left">
              <i class="fas fa-receipt"></i>    
              </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">O nome é aceito</p>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-success" type="number" placeholder="R$9999" value={price} onChange={e => setPrice(e.target.value)}/>
            <span className ="icon is-small is-left">
            <i className="fas fa-dollar-sign"></i>            
            </span>
            <span className ="icon is-small is-right">
            <i className ="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">Preço aceito</p>
        </div>

        <div className="field">
          <label className="label">Details</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" value={details} onChange={e => setDetails(e.target.value)}></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit" value="Submit">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ProductsForm;