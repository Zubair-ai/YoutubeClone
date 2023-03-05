import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { Logo } from '../../Utits/Constents';
import SearchItem from "../Videos/SearchItem";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" height={60} />
      </Link>
      <Link to={'/'}><SearchItem/></Link>
      <span> <button style={{color: 'red',marginRight:'15px',gap:'10px'}}><VideoCallIcon/></button> <button style={{color: 'red',marginRight:'15px',gap:'10px'}}><NotificationAddIcon/></button></span>
    </Stack>
  );
}
export default Navbar;
