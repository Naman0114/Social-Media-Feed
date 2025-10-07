import { Avatar, Button, Dialog, DialogTitle } from "@mui/material";
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
            width: "30vw",
          },
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <DialogTitle sx={{ fontSize: "1rem", ml: { lg: 12 } }}>
            Edit Profile
          </DialogTitle>
          <X onClick={handleClose} />
        </div>
        {pic ? <Avatar src={URL.createObjectURL(pic)} /> : <Avatar />}
        <input
          type="file"
          accept="image/*"
          className="file-input"
          ref={picRef}
          onChange={(e) => setPic(e.target.files[0])}
        />
        <Button onClick={handlePic} sx={{
              size: "medium"}}>Change</Button>
      </Dialog>
    </>
  );
};

export default EditProfile;
