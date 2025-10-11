import Header from "@/Components/Header";
import Avatar from "@mui/material/Avatar";
import Post from "../Components/Post";

const Home = () => {
  return (
    <>
      <Header />
      <div className="fixed top-0 left-14 w-4xl bg-white z-50 p-4 ">
        <div className="p-4 max-w-2xl mx-auto flex flex-col gap-2">
          <span className="text-md font-semibold block text-center gap-2">
            Home
          </span>
          <div className="flex items-center gap-2">
            <Avatar src="/broken-image.jpg" />
            <input
              type="text"
              name="post"
              placeholder="Start a thread..."
              className="flex-1 outline-none p-2"
            />
            <button
              type="submit"
              className="w-14 h-8 rounded-full bg-gray-400 text-white font-medium hover:bg-blue-800"
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <div className="mt-32 flex flex-col gap-4 px-4 mx-55">
        <Post />
      </div>
    </>
  );
};

export default Home;
