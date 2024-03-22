import React from 'react';
import './Mystyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
// import ConversationItem from './ConversationItem';
import Conversations from './Conversations';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';

function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const lightTheme = useSelector((state)=> state.themeKey);
    
  return (
    <div className="side-contain">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton >
            <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("user-group");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-group");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")}/>
          </IconButton>
          <IconButton onClick={()=>{dispatch(toggleTheme())}}>
            {lightTheme && <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")}/>}
            {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")}/>}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className={"search-box" + (lightTheme ? "" : " dark")} />
      </div>
<Conversations/>
    </div>
  );
}

export default Sidebar;