import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../consonants/data";

const Component = styled(Box)`
  display: flex;
  // margin: 55px 130px 20px 130px;
  margin: 5% 10% 2% 10%;
  justify-content: space-between;
`;

const Container = styled(Box)`
  padding: 2px 2px;
  text-align: center;
  width: 10%;
  // height: 10%;
`;

const Text = styled(Typography)`
  font-size: 0.6rem;
  font-weight: 600;
`;

export default function Navbar() {
  return (
    <Component>
      {navData.map((data) => (
        <Container>
          <img src={data.url} alt={data.text} style={{ width: "100%" }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
}
