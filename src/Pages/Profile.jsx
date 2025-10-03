import { Avatar, Button, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="mx-auto my-10 w-lg shadow-sm">
        <div className=" flex flex-row  justify-between">
          <div className=" flex flex-col gap-3 p-3">
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Aditya_001
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>This is a bio !</Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>20 followers</Typography>
          </div>
          <div className="p-3">
            <Avatar src="/broken-image.jpg" />
            <img
              className="h-10 w-12 mt-12"
              src="thread-logo.webp"
              alt="thread"
            />
          </div>
        </div>
        <div className="flex flex-col my-3 p-2">
          <Button
            size="medium"
            sx={{
              height: "26px",
              backgroundColor: "white",
              border: "1px solid grey",
              color: "black",
            }}
          >
            Edit Profile
          </Button>
        </div>
        <div className="flex flex-row justify-around mx-auto w-lg text-sm mb-3">
          <Link to={"threads/id"} className="link border-b-1 border-black pb-1">Threads</Link>
          <Link to={"replies/id"} className="link border-b-1 border-black pb-1">Replies</Link>
          <Link to={"reposts/id"} className="link border-b-1 border-black pb-1">Reposts</Link>
        </div>
        <Outlet/>
      </div>
    </>
  );
};
export default Profile;
