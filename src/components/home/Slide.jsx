import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  margin-right: 25px;
  padding: 15px 20px;
`;

const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Slide({ products }) {
  return (
    <Component>
      <DealText>Deal of the Day</DealText>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        centerMode={true}
      >
        {products.map((product, index) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }} key={index}>
            <Box style={{ margin: "5px" }} >
              <Image src={product.url} alt="carousel"  />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount}</Text>
              <Text style={{ color: "green" }}>{product.tagline}</Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
}
