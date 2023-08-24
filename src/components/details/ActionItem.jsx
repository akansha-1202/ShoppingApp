import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import toast, { Toaster } from "react-hot-toast";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
  //   [theme.breakpoints.down('md')]: {
  //     marginLeft : '40px'
  // },
}));

const Image = styled("img")({
  width: "95%",
  padding: "15px",
});

// const StyledButton = styled(Button)`
//   width: 39%;
//   height: 50px;
//   border-radius: 2px;
//   font-size:12px;
// `;
const StyledButton = styled(Button)(({ theme }) => ({
  width: "55%",
  height: 50,
  marginLeft: "60px",
  marginTop: "10px",
  borderRadius: 2,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

export default function ActionItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const [quantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  return (
    <LeftContainer>
      <Box style={{ padding: "15px 20px", border: "1px solid #f0f0f0" }}>
        <Image src={product.detailUrl} />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => {
          addItemToCart();
          toast.success("Item added to Cart");
        }}
      >
        Add to Cart
      </StyledButton>
      <Toaster />
      {/* <StyledButton variant="contained" style={{ background: "#fb641b" }}>
        Buy Now
      </StyledButton> */}
    </LeftContainer>
  );
}
