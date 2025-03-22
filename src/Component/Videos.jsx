import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos = [] }) => { // Default videos to an empty array
  return (  
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos?.map((video, idx) => (
        <Box key={idx}>
          {video.id?.videoId && <VideoCard video={video} />}
          {video.id?.channelId && <ChannelCard channelDetail={video} />} {/* Fixed prop name */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
