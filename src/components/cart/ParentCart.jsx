import React, { useState } from 'react';
import CustomButtons from '../header/CustomButttons';
import Cart from './Cart';

function ParentCart() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  return (
    <>
      <CustomButtons orderPlaced={orderPlaced} />
      <Cart setOrderPlaced={setOrderPlaced} />
    </>
  );
}

export default ParentCart;
