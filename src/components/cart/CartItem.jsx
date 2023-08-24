import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/common-utils";
import GroupedBtn from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  // padding: 30px;
`;
const Remove = styled(Button)`
  //  margin-top : 5px;
  font-size: black;
  font-weight: 600;
`;

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{ height: 130, width: 150 ,objectFit:"contain"}} />
      </LeftComponent>
      <Box style={{ margin: 15 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <Typography style={{ margin: "5px 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount} off
          </Box>
        </Typography>
        <GroupedBtn item={item}/>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
}
