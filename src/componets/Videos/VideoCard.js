import React from 'react'
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { demoChannelTitle,demoVideoTitle } from '../../Utits/Constents';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = (props) => {
     const {video:{id:{videoId},snippet}}=props;
     console.log(snippet)
  return (
    <Card sx={{width:{xs:'100%',sm:"358px",md:'320px'},boxShadow:'none',borderRadius:'0'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoTitle}>
      <CardMedia image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{width:{xs:'100%',sm:"358px" ,md:'320px'},height:180}}
      />
      </Link>
      <CardContent sx={{ backgroundColor:'#1e1e1e', height:'106px'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoTitle}>
        <Typography variant='subtitle1' fontWeight={'bold'} color={'#FFF'}>
            {snippet?.title.slice(0,60) || snippet?.title.slice(0,60)}
        </Typography>
        </Link>

        <Link to={snippet?.channelId?`/video/${snippet?.channelId}`:demoChannelTitle}>
        <Typography variant='subtitle1' fontWeight={'bold'} color={'#FFF'}>
            {snippet?.snippet?.channelTitle || snippet?.channelTitle.slice(0,60)}
            <CheckCircle sx={{ fontSize:14,color:'gray',ml:'5px'}}/>
        </Typography>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard;
