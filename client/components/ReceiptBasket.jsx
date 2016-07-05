import React, { Component } from 'react';
import ReceiptItem from '../containers/ReceiptItem.js';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

class Receipt extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { basket, quantity, price, subtotal, total, checkoutCompleted } = this.props;
    return (
      <div>

      <div className={index.receiptContainer}>
        <div className={index.receiptbody}>
          <div className={index.receiptheader}>
            <h3>THANK YOU FOR YOUR BUSINESS!</h3>
            {<br></br>}
          </div>
          {basket.map(item => {
            return (<ReceiptItem key={item.sku} sku={item.sku} />);
          })}
          <div className={index.receiptreturncontainer}  onClick={checkoutCompleted}>
            <h4>Click Here To Return To The Sales Page </h4>
          </div>
          <div className={index.receipttotal}>
            <div className={index.quantity}>
              {`SUBTOTAL $${subtotal}.00`}
            </div>
            <div className={index.quantity}>
             {`TOTAL QTY: ${quantity}`}
            </div>
            <div className={index.quantity}>
              {`TOTAL $${total}.00`}
            </div>
            <div className={index.quantity}>
              {`PRICE $${price}.00`}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Receipt;
