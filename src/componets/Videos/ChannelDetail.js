import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {fetchFromApi} from '../../Utits/FechFromApi'
import { Box } from "@mui/material";
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import Loader from './Loader';

const ChannelDetail = () => {
  const [channeldetail,setchanneldetail]=useState(null);
  const [channelvideos,setchannelvideos]=useState(null);
  const {id}=useParams();
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then(data=>{setchanneldetail(data?.items[0])})

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then(data=>{setchannelvideos(data?.items)})
  },[id])
  if(!channeldetail || !channelvideos){ return <Loader />};
  return (
   
    <Box minHeight="95vh">
     {!channeldetail && <p>Loading...</p>}
     {!channelvideos && <p>Loading...</p>}
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channeldetails={channeldetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={channelvideos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail

