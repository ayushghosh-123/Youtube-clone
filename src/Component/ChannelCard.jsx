import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoProfilePicture } from "../Utils/Constant";

function ChannelCard({ channelDetail }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: '320px', md: '320px'},
        height: '326px',
        margin: 'auto'
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id || demoChannelTitle}`}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            {/* Channel Thumbnail */}
            <CardMedia
              component="img"
              image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title || "Channel Image"}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #e3e3e3",
              }}
            />
            {/* Channel Title */}
            <Typography variant="h6">
              {channelDetail?.snippet?.title || demoChannelTitle}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}

export default ChannelCard;


