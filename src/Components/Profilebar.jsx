import { Avatar, Button, Typography } from "@mui/material";

const ProfileBar = () => {
  return (
    <>
      <div className=" flex flex-row w-xl mx-80 p-4 mb-1.5 shadow-md shadow-gray-300 border rounded-lg">
        <Avatar src="/broken-image.jpg" />
        <div className=" flex flex-col ml-1.5">
          <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
            Aditya
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>this is bio</Typography>
          <Typography sx={{ fontSize: "0.9rem" }}>3 followers</Typography>
        </div>
        <div className="ml-90">
          <Button
            size="medium"
            sx={{
              height: "22px",
              backgroundColor: "white",
              border: "1px solid grey",
              color: "black",
              padding: "3",
            }}
          >
            Follow
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
