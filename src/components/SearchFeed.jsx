import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm } = useParams();  
  // it will run when load the page
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`) // returning promise from this async function
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: "white" }} ml={{sm:"125px"}}>

Search Results for:<span style ={{color:"#f31503"}}>{searchTerm}

</span>
       
      </Typography>
      
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
