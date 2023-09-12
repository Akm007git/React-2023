import React from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent, CardMedia, Card } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => 
  // console.log(videoId,snippet);
   (
    <Card sx={{ width:{md:"285px",xs: "100%", sm:"340px"},boxShadow:"none",borderRadius:0}} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {xs:"100%",sm:"340px", md:"285px"}, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        {/* //-------------------------------------------------// */}

        <Link to={snippet ?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="GrayText">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}

            <CheckCircle sx={{fontSize:"12px",color:"gray",ml:"7px" ,mt:"9px"}}/>
          </Typography>
        </Link>



      </CardContent>
    </Card>
  );

export default VideoCard;
