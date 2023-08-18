import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../consonants/data";

const Component = styled(Box)`
  display: flex;
  // margin: 5% 10% 2% 10%;
  justify-content: space-evenly;
  padding :10px;
  width: 100%;
  background :#fff;
  // margin: '55px 130px 0 130px !important',
  // overflowX: 'overlay',
  [theme.breakpoints.down('lg')]: {
      margin: '0px !important'
  }
`;

const Container = styled(Box)`
  padding: 2px 2px;
  text-align: center;
  width: 10%;
  // height: 10%;
`;

const Text = styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;
`;

export default function Navbar() {
  return (
    <Component>
      {navData.map((data,index) => (
        <Container key={index}>
          <img src={data.url} alt={data.text} style={{ width: 64 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
}
