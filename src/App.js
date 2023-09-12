import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./index.css";
import Footer from "./components/Footer";

// import {Feed} from "@mui/icons-material";
// import VideoDetails from "./components/VideoDetails";
// import ChannelDetails from "./components/ChannelDetails";
// import Navbar from "./components/Navbar";
// import SearchFeed from "./components/SearchFeed";

import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Navbar,
} from "./components";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
