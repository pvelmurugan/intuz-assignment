import React from 'react';
import axios from "axios";
import "./Product.scss";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: null }
  }

  componentDidMount() {
    let { products } = this.state;
    axios.get('http://localhost:4000/get-products').then(response => {
      if (response.data && response.data.issuccess)
        products = response.data;
      this.setState({ products });
    });
  }

  render() {
    let { products } = this.state;
    return (
      <div className="grid">
        <table border="1" width="100%">
          <thead><tr><th>Row</th><th>Name</th><th>Available Qty</th></tr></thead>
          <tbody>
            {products && products.issuccess && products.data.map(product => {
              return (
                <tr key={product.id}><td>{product.id}</td><td>{product.name}</td><td>{product.qty}</td></tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}