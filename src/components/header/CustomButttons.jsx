import React, { useState, useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
`;

const Cart = styled(Box)`
  display: flex;
`;

export default function CustomButttons() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? 
        <Profile account={account} setAccount={setAccount}/>
       : 
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
      }
      <Cart>
        <ShoppingCartIcon></ShoppingCartIcon>
        <Typography>Cart</Typography>
      </Cart>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
