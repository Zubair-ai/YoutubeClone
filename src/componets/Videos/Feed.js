import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../../Utits/FechFromApi";
import { useEffect, useState } from "react";
function Feed() {
  const [selectedcategory, setSelectedCategory] = useState("All");
  const [videos,setVideos]=useState(null);
  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedcategory}`)
    .then(data=>setVideos(data.items))

}, [selectedcategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #fff",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedcategory={selectedcategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedcategory}
          <span style={{ color: "#F31503" }}></span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}
export default Feed;
