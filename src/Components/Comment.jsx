import { Avatar, Typography } from "@mui/material";
import { Ellipsis } from "lucide-react";

const Comment = () => {
  return (
    <div className="flex flex-row justify-between p-2 border-t-1 w-3xl shadow-sm">
      <div className="flex flex-row gap-2 p-4">
        <Avatar
          src="/broken-image.jpg"
          sx={{ width: "30px", height: "30px" }}
        />
        <div className="flex flex-col">
          <Typography sx={{ fontSize: "0.7rem", fontWeight: "bold" }}>
            VijayKumar_001
          </Typography>
          <Typography sx={{ fontSize: "0.7rem" }}>This is comment.</Typography>
        </div>
      </div>
      <div className="flex flex-row gap-2 p-4">
        <p className="text-sm">24h</p>
        <Ellipsis className="size-3" />
      </div>
    </div>
  );
};

export default Comment;
