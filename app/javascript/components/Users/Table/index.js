import React from "react";

const UsersList = (props) => {
  return (
    <div className="card content-stock">
      <div className="row">
        <div className="col-md-12">
          <div className="card-content">
            <div className="header-content">
              <div>
                <h1 className="title">Users</h1>
              </div>
            </div>
            <div className="card-body"></div>
            <div>
              <table className="table is-bordered is-striped">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Id</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{props.email}</td>
                    <td>{props.id}</td>
                    <td>
                      <button
                        className="button is-primary"
                        onClick={() => {
                          window.location = "/users/" + props.id;
                        }}
                      >
                        Ver Anuncios
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

export default UsersList;
