import { useEffect } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Slide from "./Slide";
import HomeItems from "./HomeItems";
import Perks from "./Perks";
const Component = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;

export default function Home() {
  const dispatch = useDispatch();
  const {products} = useSelector( state => state.getProducts);
  console.log(products,"home");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Nav />
      <Component>
        <Banner />
        <HomeItems/>
        <Slide products={products}/>
        <div>
          <img
            src="https://cdn.rentechdigital.com/common_files/blogs/12-growth-strategies-for-ecommerce-marketers-of-all-niches-swipecart-blog-img-02-27-06-2022.gif"
            alt="gif"
            style={{width: '100%', height: '50vh', objectFit:"cover", marginTop:"1%"}}
          />
        </div>
`        <Perks/>
`      </Component>
    </>
  );
}
