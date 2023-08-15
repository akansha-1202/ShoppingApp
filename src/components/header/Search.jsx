import React from 'react'
import { InputBase, Box,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
// border : 2px solid #22314B ;
  border : 2px solid;
  background : #fff;
  width: 35%;
  margin-left: 18%;
  display : flex;
  justify-content: space-between;
  align-items: center;
`

const InputSearchBase = styled(InputBase)`
  color: grey;
  width: 80%;
`
const SearchIconWrapper = styled(Box)`
  color: #22314B; 
`
export default function Search() {
  return (
    <SearchContainer >
       <InputSearchBase
        placeholder='Search for products, brands and more..'/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
   </SearchContainer>
  )
}
