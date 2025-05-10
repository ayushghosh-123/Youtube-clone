// import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { fetchFromAPI } from "../Utils/FetchFromAPI.JS"


function ChannelDetail() {
  const { id } = useParams();
  const [channel, setChannel] = useState(null); 

  console.log(channel);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`)
    .then((data) => {
      setChannel(data.items[0]);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
  }, [id])

  return (
    <div>
      ChannelDetai
    </div>
  )
}

export default ChannelDetail
