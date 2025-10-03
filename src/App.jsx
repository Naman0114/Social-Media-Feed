import { Route, Routes } from "react-router-dom";
import Replies from "./Components/Profile/Replies";
import Reposts from "./Components/Profile/Reposts";
import Threads from "./Components/Profile/Threads";
import "./index.css";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notification from "./Pages/Notifications";
import Profile from "./Pages/Profile";
import Search from "./Pages/Search";
import SignUp from "./Pages/SignUp";
import SinglePost from "./Pages/SinglePost";
import Protected from "./Protected";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Protected />}>
          <Route path="" element={<Home />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="post/:id" element={<SinglePost />}></Route>
          <Route path="profile" element={<Profile />}>
            <Route path="threads/:id" element={<Threads/>} />
            <Route path="replies/:id" element={<Replies/>} />
            <Route path="reposts/:id" element={<Reposts/>} />
          </Route>
          <Route path="notifications" element={<Notification />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </>
  );
}
export default App;
