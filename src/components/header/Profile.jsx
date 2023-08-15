import React, { useState } from "react";
import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 7px;
`;
const Logout = styled(Typography)`
      font-size : 14px;
      margin-left 20px:
`


export default function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget); //you want to open with respect to
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () =>{
         setAccount("")
  }
  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor:"pointer" }}>{account}</Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
}
