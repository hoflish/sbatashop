import React from 'react';
import PropTypes from 'prop-types';

const CartCount = props => {
  const { cart } = props;
  if (cart && cart.items && cart.items.length > 0) {
    const itemsCount = cart.items.reduce((a, b) => a + b.quantity, 0);
    return <span className="cart-count">{itemsCount}</span>;
  }
  return null;
};

CartCount.propTypes = {
  cart: PropTypes.object,
};

export default CartCount;
