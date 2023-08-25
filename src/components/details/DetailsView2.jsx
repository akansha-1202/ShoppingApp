import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import { getProductDetailsCategory } from "../../redux/actions/productActions";
import { Grid ,styled} from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Grid)`
  background: #f2f2f2;
  display: flex;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',
  
  [theme.breakpoints.between('sm', 'md')]: {
    paddingLeft: '20%'
},
[theme.breakpoints.down('sm')]: {
  margin: 15
},
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

export default function DetailsView2() {
    const product = useLocation().state;
    console.log("useLocation : ", product);
    
  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>

          <RightContainer item lg={8} sm={8} xs={12}>
            <ProductDetail product={product}/>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
}
