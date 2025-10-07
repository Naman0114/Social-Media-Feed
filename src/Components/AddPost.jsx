import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";
import { Image, X } from "lucide-react";
import { useRef, useState } from "react";
import "../App.css";

const AddPost = () => {

  const [media, setMedia] = useState();

  const mediaRef = useRef();

  const handleMedia = () => {
    mediaRef.current.click();
  };
  const handleClose = () => {};

  const handlePost = () => {};
  return (
    <>
      <Dialog
        open={true}
        maxWidth={"lg"}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "#fff",
            borderRadius: 6,
            padding: 2,
            height: "90%",
          },
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <DialogTitle sx={{ margin: "auto", fontWeight: "bold" ,fontSize:"1.2rem"}}>
          New Thread...
        </DialogTitle>
          <X onClick={handleClose} />
        </div>
        <DialogContent sx={{ overflow: "hidden" }}>
          <div className="flex flex-row gap-4 mt-2">
            <Avatar />
            <div className="">
              <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                VijayKumar_001
              </Typography>
              <textarea
                autoFocus
                cols="50"
                rows="2"
                placeholder="Start a Thread..."
                borderRadius="2"
                className="text"
              />
              {media ? (
                <img
                  src={URL.createObjectURL(media)}
                  alt="img"
                  className="w-xs"
                />
              ) : null}
              <Image onClick={handleMedia} />
              <input
                type="file"
                accept="image/*"
                className="file-input"
                ref={mediaRef}
                onChange={(e) => setMedia(e.target.files[0])}
              />
            </div>
          </div>
        </DialogContent>
        <div className="flex flex-row mt-3 ml-7 justify-between items-center">
          <Typography sx={{ fontSize: "0.9rem" }}>Anyone can reply</Typography>
          <Button
            sx={{
              size: "medium",
              backgroundColor: "grey",
              color: "white",
              borderRadius: "10px",
              ":hover": { bgcolor: "blue", cursor: "pointer" },
            }}
            onClick={handlePost}
          >
            Post
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default AddPost;
