import { Avatar, Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import "../App.css";
const EditProfile = () => {
  const [pic, setPic] = useState();
  const picRef = useRef();

  const handleClose = () => {};

  const handlePic = () => {
    picRef.current.click();
  };
  return (
    <>
      <Dialog
        open={true}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#fff",
            borderRadius: 1,
            padding: 2,
            height: "80%",
            width: { xs: "90vw", sm: "50vw", md: "30vw" },
          },
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <DialogTitle sx={{ fontSize: "1rem", ml: { lg: 14 } }}>
            Edit Profile
          </DialogTitle>
          <X onClick={handleClose} />
        </div>
        <div className="flex justify-center items-center">
          {pic ? <Avatar src={URL.createObjectURL(pic)} /> : <Avatar />}
        </div>
        <input
          type="file"
          accept="image/*"
          className="file-input"
          ref={picRef}
          onChange={(e) => setPic(e.target.files[0])}
        />
        <div className="flex flex-col mx-auto">
          <Button
            onClick={handlePic}
            size="small"
            sx={{ p: 1, borderRadius: 2, bgcolor: "white", border: "blue" }}
          >
            Change
          </Button>
        </div>
        <Typography sx={{ fontSize: "1rem", fontWeight: "Bold" }}>
          Username
        </Typography>
        <input type="text" value={"VijayKumar_001"} readOnly />
        <Typography sx={{ fontSize: "1rem", fontWeight: "Bold" }}>
          Email
        </Typography>
        <input type="text" value={"@gmail.com"} readOnly />
        <Typography sx={{ fontSize: "1rem", fontWeight: "Bold" }}>
          Bio
        </Typography>
        <input type="text" placeholder="About" />
        <div className="mt-4">
          <Button
            size="large"
            sx={{ borderRadius: 2, bgcolor: "skyblue", border: "blue" }}
          >
            Update
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default EditProfile;
