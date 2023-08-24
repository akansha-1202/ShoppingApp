import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Grid, Typography, Box, Button, styled} from "@mui/material"
import CartItem from './CartItem'
import TotalBalance from './TotalBalance'
import EmptyCart from './EmptyCart'
import { useNavigate } from 'react-router-dom'
import { clearCart } from "../../redux/actions/cartActions";


const Container = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]: {
      padding: '15px 0'
  }
})); 

const Header = styled(Box)`
  padding : 15px 24px;
  background : #fff;

`

const PlaceOrder = styled(Box)`
   padding : 16px 22px;
   background : #fff;
   box-shadow : 0 -2px 10px 0;
   border-top: 1px solid #f0f0f0;
`

const StyledBtn =styled(Button)`
   display :flex;
   margin-left: auto;
   background: #22314b;
   color: white;
   width :250px;
   height : 51px;
   border-radius :2px;
`

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
      marginBottom: 15
  }
}));


export default function Cart() {
  const {cartItems} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    // Clear the cart after placing the order
    dispatch(clearCart());
  };

  
  return (
    <>
    {
      cartItems.length ?
      <Container container>
        <LeftComponent item lg ={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {
              cartItems.map((item, index) =>(
                <CartItem item={item} key={index}/>
              ) )
            }
            <PlaceOrder>
              <StyledBtn onClick={() => {
                    cartItems.length = 0;
                    handlePlaceOrder();
                    alert("Order Placed Successfully");
                    navigate('/');
                }}>Place Order</StyledBtn>
            </PlaceOrder>
        </LeftComponent>
        <Grid item lg ={3} md={3} sm={12} xs={12}>
          <TotalBalance cartItems={cartItems}/>
        </Grid>

      </Container>
      :
      <EmptyCart/>
    }
    </>
  )
}
