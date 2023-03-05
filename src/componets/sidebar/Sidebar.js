import { Stack } from "@mui/material";
import React, { Fragment } from "react";
import { categories } from "../../Utits/Constents";

const Sidebar = (props) => {
 const {selectedcategory,setSelectedCategory}=props;
  return <Fragment>
     <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((items) => (
      <button
        className="category-btn"
        onClick={()=>{setSelectedCategory(items.name)}}
        style={{
          background: items.name === selectedcategory && "#FC1503",
          color: "white",
        }}
        key={items.name}
      >
        <span style={{color: items.name===selectedcategory?'white':'red',marginRight:'15px'}} >{items.icon}</span>
        <span style={{opacity: items.name===selectedcategory?'white':'red'}}>{items.name}</span>
      </button>
    ))}
  </Stack>
  </Fragment>
};

export default Sidebar;
