import React, { useState, useContext } from "react";
import { Badge, Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import LoginDialog from "../login/LoginDialog";
import { LoginContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-left: 15%;
  margin-right: 10%;
`;

const LoginButton = styled(Button)`
  background: #22314b;
  text-transform: none;
  padding: 5px 30px;
  border-radius: 2px;
  box-shadow: none;
  width: 15%;
`;

const Cart = styled(Link)`
  display: flex;
  text-decoration: none;
  color: white;
`;

export default function CustomButttons({ orderPlaced }) {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const openDialog = () => {
    setOpen(true);
  };

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "#EEE0C9",
              color: " #22314B",
            },
          }}
          onClick={() => {
            openDialog();
          }}
        >
          Login
        </LoginButton>
      )}
      <Cart to="/cart">
        <Badge
          badgeContent={orderPlaced ? 0 : cartItems?.length}
          // badgeContent={cartItems?.length}

          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
        {/* <Typography >Cart</Typography> */}
      </Cart>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
