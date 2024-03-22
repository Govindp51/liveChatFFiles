// import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import { IconButton } from '@mui/material';
// import logo from '../Images/lives.png';
// import './Mystyles.css'
// import { useSelector } from 'react-redux';

// function UserGroup() {
//   const lightTheme = useSelector((state)=> state.themeKey);

//   return (
//     <div className='list-container'>
//        <div className={'ug-header'+(lightTheme ? "" : " dark")}>
//        <img src={logo} style={{height:"2rem" ,width:"2rem",marginLeft:"10px"}} alt='logo'/>
//        <p className='ug-title'>Online Users</p>
//         </div>
//         <div className='sb-search'>
//         <IconButton>
//         <SearchIcon/>
//         </IconButton>
//             <input placeholder='Search' className='search-box'/>
//         </div>
//         <div className='ug-list'>
//         <div className='list-tem'>
//           <p className='con-icon'>T</p>
//           <p className='con-title'>Test User</p>
//         </div>
//         <div className='list-tem'>
//           <p className='con-icon'>T</p>
//           <p className='con-title'>Test User</p>
//         </div>
//         <div className='list-tem'>
//           <p className='con-icon'>T</p>
//           <p className='con-title'>Test User</p>
//         </div>
//         <div className='list-tem'>
//           <p className='con-icon'>T</p>
//           <p className='con-title'>Test User</p>
//         </div>
//         <div className='list-tem'>
//           <p className='con-icon'>T</p>
//           <p className='con-title'>Test User</p>
//         </div>
//         <div className='list-tem'>
//           <p className='con-icon'>T</p>
//           <p className='con-title'>Test User</p>
//         </div>
//        </div>
//     </div>
//   );
// }

// export default UserGroup;