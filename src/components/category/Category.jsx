import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../home/Nav";
import { Box, Button, Typography, styled } from "@mui/material";

const Parent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px ",
  padding: "2%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Child = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid none",
  textDecoration: "none",
   color: "black",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  width: "250px",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
    padding: "1%",
  borderRadius: "2px",
    backgroundColor: "#fff",
}));

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const CartBtn = styled(Button)`
  width: 120px;
  background: #22314b;
  color: white;
`;

const Text = styled(Typography)`
  font-size: 14px;
`;

export default function Category() {
  const [data, setData] = useState([]);

  const params = useParams();
  var titleString = params.category;
  titleString = titleString.toUpperCase();

  const para = params.category;
  // const para2 = params.brand;

  useEffect(() => {
    var url = "https://e-com-server-akansha-1202.vercel.app/api/products";
    // const url="http://localhost:9000/api/products"


    axios.get(url).then((response) => {
      // console.log(response.data);
      setData(response.data);
    });
  }, [params]);


  return (
    <Box>
      <Nav />
      <Typography>{titleString}</Typography>
      <Parent>
        {data
          .filter((e) => {
            return e.category === para;
          })
          .map((item, index) => (
              <Child  to={`/details/${encodeURIComponent(item.id)}`}
              state={item}
              key={index}>
                <Image src={item.url} alt="img" />
                <Text>{item.title.shortTitle}</Text>
                <Text>Sale Price: ₹{item.price.cost}</Text>
                <Text style={{ color: "#878787" }}>
                  M.R.P.:
                  <strike>₹{item.price.mrp}</strike>
                </Text>
                <Text>Rating :{item.rating}⭐</Text>

                <CartBtn
                  sx={{
                    ":hover": {
                      bgcolor: "#EEE0C9",
                      color: " #22314B",
                    },
                  }}
                >
                  Add To Cart
                </CartBtn>
              </Child>
          ))}
      </Parent>
    </Box>
  );
}

//the encodeURIComponent() function--> used to encode the URL parameters (article.title and article.urlToImage)
//                                     to ensure that special characters are properly handled.

//avi.atulya@prepbytes.com
