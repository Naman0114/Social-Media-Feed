import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import './index.css';
import AddPost from './Pages/AddPost';
import Home from './Pages/Home';
import Notification from './Pages/Notifications';
import Profile from './Pages/Profile';
import Search from './Pages/Search';

function App() {
  return (
    <>
    <div className="flex">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/post' element={<AddPost/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/notifications' element={<Notification/>}></Route>
    </Routes>
    </div>
    </>
  )}
export default App;
