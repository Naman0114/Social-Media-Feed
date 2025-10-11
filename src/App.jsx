import { Navigate, Route, Routes } from "react-router-dom";
import AddPost from "./Components/AddPost";
import EditProfile from "./Components/EditProfile";
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
import Protected from "./Protected";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Protected />}>
          <Route path="/search" element={<Search />} />
          <Route path="/post/:id" element={<AddPost />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Navigate to="threads/id" replace />} />
            <Route path="threads/:id" element={<Threads />} />
            <Route path="replies/:id" element={<Replies />} />
            <Route path="reposts/:id" element={<Reposts />} />
          </Route>
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
