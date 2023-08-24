import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsView from "./components/details/DetailsView";
import DetailsView2 from "./components/details/DetailsView2";
import Cart from "./components/cart/Cart";
import Category from "./components/category/Category";
import SubCategory from "./components/category/SubCategory";
import Footer from "./components/footer/Footer";
import LoginDialog from "./components/login/LoginDialog";

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 70 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailsView />} />
            <Route path="/details/:id" element={<DetailsView2 />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/products/:brand" element={<SubCategory />} />
            {/* <Route path="/:brand" element={<Category/>}/> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<LoginDialog/>}/>
            <Route path="/login" element={<LoginDialog/>}/>

            
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}
