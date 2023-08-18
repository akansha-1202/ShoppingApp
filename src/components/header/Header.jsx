import React from "react";
import logo from "../../assets/logo3.png";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButttons from "./CustomButttons";
import { Link } from "react-router-dom";


const StyledHeader = styled(AppBar)`
  background: #96b6c5;
  //   background : white;
  height: 65px;
`;

const Component = styled(Link)`
  //   padding-right:15%;
  line-height: 0;
  width: 40%;
  text-decoration : none;
`;
const SubHeading = styled(Typography)`
  font-size: 9%;
  color: #22314b;
  font-style: italic;
  margin-left: 13%;
`;
export default function Header() {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 60 }}>
        <Component to='/' >
          <img src={logo} alt="logo" className="logo" />
          <SubHeading className="slogan">One for All</SubHeading>
        </Component>
        <Search />
        <Box>
          <CustomButttons />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
}
