import { TextField } from "@mui/material";
import Comment from "../Components/Comment";
import Post from "../Components/Post";

const SinglePost = () => {
  return (
    <div className="flex flex-col mx-auto my-5 p-3">
      <div className="flex flex-col mx-auto">
        <Post />
        <div className="flex flex-col">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <TextField
          variant="outlined"
          autoFocus
          sx={{ width: "350px", height: "8px", mx: "auto", my:3}}
          placeholder="comment here..."
        />
      </div>
    </div>
  );
};

export default SinglePost;
