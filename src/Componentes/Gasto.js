import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
  render() {

    const {cantidadGasto, nombreGasto} = this.props.gasto;

    return (
      <li className="gastos">
        <p>
          {nombreGasto}
          <span className="gasto"> $ {cantidadGasto}</span>
        </p>
        </li>
    )
  }
}

 Gasto.protoType = {
  gasto: PropTypes.object.isRequired,
}

export default Gasto;
