import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {Feed,VideoDetail,ChannelDetail,Navbar} from './componets'
import SearchFeed from "./componets/Videos/searchFeed";
function App() {
  return (
    <React.Fragment>
      <Box sx={{backgroundColor:"#000"}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" exact element={<VideoDetail />}></Route>
          <Route path="/channel/:id" exact element={<ChannelDetail  />}></Route>
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </React.Fragment>
  );
}

export default App;
