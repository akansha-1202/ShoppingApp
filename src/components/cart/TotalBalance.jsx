import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useState, useEffect , useCallback} from 'react'

const Header = styled(Box)`
 padding : 15px 24px;
 background:#fff;
 color : grey;
 border-bottom :1px solid $f0f0f0;
`

const Details = styled(Box)`
   padding : 15px 24px;
   background : #fff;
   & > p {
    margin-bottom : 20px ;
    font-size: 14px;
   },
   & > h6 {
    margin-bottom : 20px ;
   }
`

const Price = styled(Box)`
  float : right;
`

const Discount = styled(Box)`
   color : green;
   font-size :12px;
   font-weight : 600;
`
export default function TotalBalance({cartItems}) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = useCallback(() => {
    let totalPrice = 0, totalDiscount = 0;
    cartItems.forEach(item => {
      totalPrice += item.price.mrp;
      totalDiscount += (item.price.mrp - item.price.cost);
    });
    setPrice(totalPrice);
    setDiscount(totalDiscount);
  }, [cartItems]);

  useEffect(() => {
    totalAmount();
  }, [totalAmount]);

  return (
    <Box>
      <Header>
      <Typography>PRICE DETAILS</Typography>
      </Header>
      <Details>
         <Typography>Price ( {cartItems?.length } item)
           <Price component='span'>₹{price}</Price>
         </Typography>
         <Typography>Discount
           <Price component='span'>- ₹{discount}</Price>
         </Typography>
         <Typography>Delivery Charges
           <Price component='span'>₹40</Price>
         </Typography>
         <Typography variant='h6'>Total Amount
           <Price component='span'>₹{price - discount + 40}</Price>
         </Typography>
         <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Details>
    </Box>
  )
}
