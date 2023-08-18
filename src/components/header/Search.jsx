import React, { useState, useEffect } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  // border : 2px solid #22314B ;
  border: 2px solid;
  background: #fff;
  width: 35%;
  margin-left: 18%;
  display: flex;
  // justify-content: space-between;
  // align-items: center;
`;

const InputSearchBase = styled(InputBase)`
  color: grey;
  width: 80%;
  font-size : unset;
  padding-left : 20px;
`;
const SearchIconWrapper = styled(Box)`
  color: #22314b;
  padding : 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: black;
  margin-top: 45px;
  font-size : 10px;
  // width: 29.8%;
  // padding-left : 1px;

`;
export default function Search() {
  const [text, setText] = useState('');
  // const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
  }

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
 
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more.."
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link to={`/product/${product.id}`}
                 style={{ textDecoration:'none', color:'inherit'}}
                 onClick={() => setText('')}  
                >
                {product.title.longTitle}
                </Link>
                </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
}
