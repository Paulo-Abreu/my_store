import React from "react";

const ViewSale = (props) => {
  return (
    <div className="nf">
      <table class="printer-ticket">
        <thead>
          <tr>
            <th class="title" colspan="3">
              MyStore
            </th>
          </tr>
          <tr>
            <th colspan="3">17/11/2015 - 11:57:52</th>
          </tr>
          <tr>
            <th colspan="3">
              Nome do cliente <br />
              {props.data.user.email}
            </th>
          </tr>
          <tr>
            <th class="ttu" colspan="3">
              <b>Cupom não fiscal</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="top">
            <td colspan="3">{props.data.stock.item.name}</td>
          </tr>
          <tr>
            <td>R${props.data.stock.item.price}</td>
            <td>{props.data.stock.quantity}</td>
            <td>R${props.data.stock.price}</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td>R${props.data.stock.price}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="sup ttu p--0">
            <td colspan="3">
              <b>Totais</b>
            </td>
          </tr>
          <tr class="ttu">
            <td colspan="2">Sub-total</td>
            <td align="right">R${props.data.stock.price}</td>
          </tr>
          <tr class="ttu">
            <td colspan="2">Desconto</td>
            <td align="right">5,00% - R${props.data.stock.price * 0.05}</td>
          </tr>
          <tr class="ttu">
            <td colspan="2">Total</td>
            <td align="right">
              R${props.data.stock.price - props.data.stock.price * 0.05}
            </td>
          </tr>
          <tr class="sup ttu p--0">
            <td colspan="3">
              <b>Pagamentos</b>
            </td>
          </tr>
          <tr class="ttu">
            <td colspan="2">Total pago</td>
            <td align="right">R${props.data.stock.price}</td>
          </tr>
          <tr class="ttu">
            <td colspan="2">Troco</td>
            <td align="right">R$0,00</td>
          </tr>
          <tr class="sup">
            <td colspan="3" align="center">
              <b>Pedido:</b>
            </td>
          </tr>
          <tr class="sup">
            <td colspan="3" align="center">
              www.mystore.com
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ViewSale;
