import React,{ useState } from 'react';
import './Mystyles.css'
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import UserGroup from './UserGroup';
import Users from './Users';
import Groups from './Groups';
import { Outlet } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

function MainContainers() {
  //  const dispatch = useDispatch();
  // const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className='main-container'>
        <Sidebar/>
        <Outlet/>
        {/* <CreateGroups/> */}
        {/* <Welcome/> */}
        {/* <ChatArea props={conversations}/> */}
        {/* <UserGroup/>
        <Users/>
        <Groups/> */}
    </div>
  )
}

export default MainContainers;