import { Avatar, Button, Dialog, DialogContent, DialogTitle, Typography, useMediaQuery } from "@mui/material";
import { X } from "lucide-react";

const AddPost = () => {
    const _700=useMediaQuery("(min-width-700)")
  return (
    <>
      <Dialog open={true} fullWidth fullScreen={_700?false:true}>
        <div>
          <X/>
        </div>
        <DialogTitle> New Thread...</DialogTitle>
        <DialogContent>
            <div>
                <Avatar/>
                <Typography>VijayKumar_001</Typography>
                <textarea autoFocus cols="40" rows="2" placeholder="start thread here..."/>
                <img src="" alt="img" className="w-xl"/>

                <input type="file"/>

            </div>
        </DialogContent>
        <div>
            <Typography>Anyone can Reply</Typography>
            <Button>Post</Button>
        </div>
      </Dialog>
    </>
  );
};

export default AddPost;
