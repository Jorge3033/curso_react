import React from 'react';
import axios from 'axios';
export default class AppProducts extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:3001/Products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      });
  }
  render() {
    return (
      <ul>
        { this.state.products.map(product=> <li key={product.id}>{product.name}</li>)}
      </ul>
    );
  }
}