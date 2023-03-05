import React from 'react'
import { Stack,Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';
const Videos = (props) => {
    const {videos,direction}=props;
    if (!videos){return <Loader/>}
  return (
    <Stack direction={direction ||'row'} flexWrap='wrap' justifyContent={'start'} gap={2}>
        {videos.map((item)=>(
            <Box key={item.id.videoId}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channeldeatails={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos
