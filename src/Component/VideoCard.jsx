// import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoChannelUrl, demoVideoTitle, demoChannelTitle, demoVideoUrl } from "../Utils/Constant"

function VideoCard({video: {id: {videoId}, snippet }}) {
  return (
    <Card sx={{width: {md: '300px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
      
        <CardMedia image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: 358, height:180}}/>
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}/>

      {/* video subtitle */}
      <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold">
        {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>

      {/* channel detail */}
      <Link sx={{backgroundColor: '#1e1e1e', color: '#fff'}}to={snippet?.channelId? `/Channel/${snippet?.channelId}`: demoChannelUrl}>
        <Typography variant="subtitle1" fontWeight="bold" backgroundColor="#1e1e1e" color="#fff">
        {snippet?.channelTitle || demoChannelTitle}
        <CheckCircle sx={{fontSize: 12, color: 'gray', ml:'5px'}}/>
        </Typography>
      </Link>
    </Card>
  )
}

export default VideoCard
