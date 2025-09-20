import { Route, Routes } from 'react-router-dom';
import './index.css';
import AddPost from './Pages/AddPost';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Notification from './Pages/Notifications';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import Protected from './Protected';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Protected />}>
            <Route path='' element={<Home />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='post/:id' element={<AddPost />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='notifications' element={<Notification />}></Route>
            <Route path='*' element={<Error />}></Route>
            </Route>
        </Routes>
    </>
  )
}
export default App;
