import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import MainContainers from './Components/MainContainers';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import CreateGroups from './Components/CreateGroups';
import Users from './Components/Users';
import Groups from './Components/Groups';
import { useDispatch, useSelector } from 'react-redux';
import Conversations from './Components/Conversations';

function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=> state.themeKey);
  return (
    <div className={'Apps' + (lightTheme ? "" : " -dark")}>
        {/* <MainContainers/> */}
    {/* <Login/> */}
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="app" element={<MainContainers/>}>
        <Route path="welcome" element={<Welcome/>}/>
        <Route path="chat" element={<ChatArea/>}/>
        <Route path="user-group" element={<Groups/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="create-group" element={<CreateGroups/>}/>
        <Route path="conversations" element={<Conversations/>}/>

      </Route>
    </Routes>
    </div>
  
  );
}

export default App;
