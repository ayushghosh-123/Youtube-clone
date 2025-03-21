// import React from 'react'
import { Stack, Box } from "@mui/material"

const Videos = ({videos}) => {

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>    
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={item}></VideoCard>}
          {video.id.ChannelId && <ChannelCard ChannelDetail={item}></ChannelCard>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos