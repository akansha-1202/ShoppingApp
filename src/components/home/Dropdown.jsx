import React, { useState } from "react";
import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(Menu)`
  margin-top: 7px;
  //   margin-left:25px;
`;
const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 13px;
  padding: 10px;
`;

export default function Dropdown({ text, subCat }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget); //you want to open with respect to
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer", fontSize:"12px" }}>
          {text}
        </Typography>
      </Box>

      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        {subCat.map((brand, index) => {
          return (
            <Link
              to={`/products/${brand}`}
              key={index}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
                key={index}
              >
                <Logout>{brand}</Logout>
              </MenuItem>
            </Link>
          );
        })}
      </Component>
    </>
  );
}
