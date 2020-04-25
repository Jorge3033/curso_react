import React from 'react';
import axios from 'axios';
export default class AppProductsInput extends React.Component {
  state = {
    name: '',
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const product = {
      name: this.state.name,
    };
    axios.post(`http://localhost:3001/Products`,{ product})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Producto:
          <input type="text" name="name" onChange={this.handleChange}/>
        </label>
        <button type="submit">Buscar</button>
      </form>
    );
  }
}