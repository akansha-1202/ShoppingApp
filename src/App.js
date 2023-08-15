import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";

export default function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 70 }}>
        <Home />
      </Box>
    </DataProvider>
  );
}
