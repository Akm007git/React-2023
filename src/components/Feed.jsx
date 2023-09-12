import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import  Sidebar  from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  // it will run when load the page
useEffect(()=>
{
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`) // returning promise from this async function
  .then((data)=>setVideos(data.items))
},[selectedCategory]);
  


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "row" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
      <Sidebar
        selectedCategory = {selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
        <Typography variant="h5" fontWeight="bold" mb={2} sx={{color:"white"}}>
         {selectedCategory} <span style={{color:"#ff0000"}}>Videos</span>
        </Typography>
        <Videos videos = {videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
