import Avatar from '@mui/material/Avatar';
import Post from '../Components/Post';
const Home = () => {
    return <>
        <div className="flex flex-col">
            <span className="mx-102 h-7 my-4 font-semibold">Home</span>
            <div className="mx-55 my-2 w-120 flex">
                <Avatar src="/broken-image.jpg" />
                <input type="text" name="post" placeholder="Start a thread..." className="w-106 outline-none p-2" />
                <button type="submit" className="w-14 h-8 mt-1 rounded-full
                bg-gray-400 text-white font-medium hover:bg-blue-800">Post</button>
            </div>
            <Post/>
        </div>
    </>

}
export default Home;
