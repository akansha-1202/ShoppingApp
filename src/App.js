import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsView from "./components/details/DetailsView";
import Cart from "./components/cart/Cart";

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 70 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailsView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}
