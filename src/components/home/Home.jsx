import { useEffect } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

export default function Home() {
  const dispatch = useDispatch();
  const {products} = useSelector( state => state.getProducts);
  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Nav />
      <Component>
        <Banner />
        <Slide products={products}/>
      </Component>
    </>
  );
}
