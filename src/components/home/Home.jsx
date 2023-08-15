import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'
const Component = styled(Box)`
 padding : 10px 10px;
 background : #f2f2f2;
`

export default function Home() {
  return (
    <>
        <Navbar/>
        <Component>
             <Banner/> 
        </Component>
    </>
  )
}
