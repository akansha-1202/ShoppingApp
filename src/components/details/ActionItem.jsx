import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartActions";
import { toast } from 'react-toastify'
import axios from "axios"

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
    fontSize : "12px",
  },
}));

export default function ActionItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const [quantity] = useState(1);

  const addItemToCart = async () => {
    try {

      const loginToken = localStorage.getItem("loginToken");
      const signupToken = localStorage.getItem("signupToken");

      // Determine which token to use based on some condition
      const tokenToUse = loginToken || signupToken;

      if (!tokenToUse) {
        toast.success("Please Login First", {
          position: toast.POSITION.TOP_RIGHT
        });
        return; // Exit the function if no valid token is found
      }
      
      const headers = {
        // "Content-Type": "application/json",
        authorization: `Bearer ${tokenToUse}`,
      };
      // console.log(id,quantity,headers);
      const response = await axios.post(
        `https://e-com-server-akansha-1202.vercel.app/api/addToCart/${id}`,
        { quantity }, // Modify this if your backend expects different data
        { headers }
      );

      if (response.status === 200) {
        dispatch(addToCart(id, quantity));

        toast.success(`Item added to cart`, {
          position: toast.POSITION.TOP_RIGHT})      
                 navigate("/cart");
      } else {
        toast.success(`Please Login First `, {
          position: toast.POSITION.TOP_RIGHT}) 
      }
    } catch (err) {
      console.log(err);
      toast.error("Please Login First");
    }
  };
  // const addItemToCart = () => {
  //   dispatch(addToCart(id, quantity));
  //   // navigate("/cart");
  // };
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
        }}
      >
        Add to Cart
      </StyledButton>
      {/* <StyledButton variant="contained" style={{ background: "#fb641b" }}>
        Buy Now
      </StyledButton> */}
    </LeftContainer>
  );
}
