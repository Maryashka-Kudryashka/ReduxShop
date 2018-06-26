import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sort.css';

import { changeOrder } from '../../actions/products';

export class Sort extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.changeProductsOrder(event.target.value)
  }

  render() {
    return(<div className="App-sort">
      <select className="App-sort-select" onChange={this.handleChange}>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="availability">Availability</option>
      </select>
    </div>)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeProductsOrder: (order) => dispatch(changeOrder(order))
  }
};

export default connect(null, mapDispatchToProps)(Sort);
