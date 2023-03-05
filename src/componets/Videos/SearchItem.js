
import { Paper,IconButton } from "@mui/material";
import {Search} from '@mui/icons-material'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchItem(){
    const [searchTerm,setSearchTerm]=useState('')
    const navigate=useNavigate();
    function onsubmithandler(event){
        event.preventDefault();  
        if(searchTerm){
        navigate(`/search/${searchTerm}`)
        setSearchTerm("");
    }
    }
    return (
        <Paper 
        sx={{
            borderRadius:2,
            border:'1px solid #e3e3e3',
            p1:2,
            boxShadow:'none',
            mr:{sm:5}
        }}
        >
            <input
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(event)=>{ setSearchTerm(event.target.value)}}
            />
            <IconButton type="submit" onClick={onsubmithandler} sx={{
                p:'10px',color:'red'
            }} aria-label='search' >
                <Search/>
            </IconButton>
        </Paper>
)
};
 export default SearchItem;