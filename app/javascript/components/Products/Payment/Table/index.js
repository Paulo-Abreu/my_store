import React from "react";

const Paymentstock = (props) => {
  return (
    <div className="card content-stock">
      <div className="row">
        <div className="col-md-12">
          <div className="card-content">
            <div className="header-content">
              <div>
                <button className="button is-primary new-button">
                  Novo Cadastro
                </button>
              </div>
            </div>
            <div className="card-body"></div>
            <div>
              <table className="table is-bordered is-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Venda n.º</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.id}</td>
                    <td>
                      <button
                        className="button is-success"
                        onClick={() => {
                          window.location = "/payments/" + props.id;
                        }}
                      >
                        Verificar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentstock;
