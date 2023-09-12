import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams(); // use to get the parameter after route in some page
  //console.log(channelDetail);
  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(58,126,180,0.9557072829131653) 34%, rgba(233,28,70,1) 59%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        {/* // reusing the channel card component for channel details page */}
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>

      {/* reusing the videos */}

      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "105px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
