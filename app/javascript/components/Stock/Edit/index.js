import React, { useState } from "react";
import axios from "axios";

const StockEdit = (props) => {
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (event) => {
    axios.patch(
      "/api/v1/stocks/" + props.data.stock.id,
      {
        stock_item: {
          quantity: quantity,
        },
      },
      (window.location = "/stocks")
    );
    event.preventDefault();
  };

  return (
    <div>
      <form className="card product-card-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Quantity</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="number"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-receipt"></i>
            </span>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit" value="Submit">
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>  
        </div>
      </form>
    </div>
  );
};
export default StockEdit;
