import { Button, ButtonGroup, styled } from '@mui/material';
import React from 'react';
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../redux/actions/cartActions";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledBtn = styled(Button)`
    border-radius: 50%;
`;

export default function GroupedBtn({ item }) {
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch(incrementQuantity(id, item.quantity)); // Passing only the id
  };

  const decrement = (id) => {
    dispatch(decrementQuantity(id, item.quantity)); // Passing only the id
  };

  return (
    <Component>
      <StyledBtn onClick={() => decrement(item.id)}>-</StyledBtn>
      <Button>{item.quantity}</Button>
      <StyledBtn onClick={() => increment(item.id)}>+</StyledBtn>
    </Component>
  );
}
