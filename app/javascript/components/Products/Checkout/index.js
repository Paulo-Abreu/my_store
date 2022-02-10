import React, { useState } from "react";
import axios from "axios";

const CheckoutPage = (props) => {
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (event) => {
    axios
      .post("/api/v1/stocks/" + props.data.stock[0].id + "/payment", {
        stock_item: {
          id: props.data.stock[0].id,
          product_id: props.data.stock[0].product_id,
          price: props.data.stock[0].item.price * quantity,
          quantity: quantity
        },
      })
      .then((response) => {
        console.log(response);
        this.$swal("Parabéns!", "Produto criado com sucesso!", "success").then(
          () => {
            window.location = "/payment";
          }
        );
      });
    event.preventDefault();
  };

  return (
    <div className="payment-page">
      <h2>Pagamento</h2>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h3>Endereço de Cobrança</h3>
                  <label>
                    <i className="fa fa-user"></i> Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="firstname"
                    placeholder="Joao da Silva"
                  />
                  <label for="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@exemplo.com"
                  />
                  <label for="end">
                    <i className="fa fa-address-card-o"></i> Endereço
                  </label>
                  <input
                    type="text"
                    id="end"
                    name="address"
                    placeholder="Rua das Palmeiras, 2578"
                  />
                  <label for="city">
                    <i className="fa fa-institution"></i> Cidade
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="São Paulo"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label for="state">Estado</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="SP"
                      />
                    </div>
                    <div className="col-50">
                      <label for="cep">CEP</label>
                      <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="8357041"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Pagamento</h3>
                  <label for="fname">Cartões Aceitos</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label for="cname">Nome no cartão</label>{" "}
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="João Silva"
                  />
                  <label for="ccnum">Numero do Cartão</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label for="expmonth">Mês Exp</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="Outubro"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Ano Exp</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />
                Endereço de entrega é o mesmo da cobrança
              </label>
              <button type="submit" value="Submit" className="btn">
                Confirmar Compra
              </button>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h4>
              Carrinho
              <span className="price" style={{ color: "black" }}>
                <i className="fa fa-shopping-cart"></i>
              </span>
            </h4>
            <p>
              <a>{props.data.stock[0].item.name}</a>{" "}
              <span className="price">R$ {props.data.stock[0].item.price}</span>
            </p>
            <p>
              <a>Quantidade</a>{" "}
              <span>
                <input
                  type="number"
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                ></input>
              </span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span className="price" style={{ color: "black" }}>
                <b>R$ {props.data.stock[0].item.price * quantity}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
