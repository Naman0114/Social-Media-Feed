import Avatar from '@mui/material/Avatar';
import { BadgeCheck, Ellipsis } from 'lucide-react';
import NewPost from './Newpost';

const Post = () => {
    const posts = [
        {
            name: "Naman Prabhat Chaturvedi",
            title: "Software Engineer",
            time: "1d",
            avatar: "namanphoto.jpg",
            image: "box7_image.jpg",
        },
        {
            name: "Alice Johnson",
            title: "UI/UX Designer",
            time: "2d",
            avatar: "namanphoto.jpg",
            image: "box7_image.jpg",
        },
        {
            name: "Rahul Mehta",
            title: "Product Manager",
            time: "3d",
            avatar: "namanphoto.jpg",
            image: "box7_image.jpg",
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="flex flex-col w-lg border rounded-3xl shadow-md shadow-gray-300 p-4"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Avatar src={post.avatar} sx={{ width: 35, height: 35 }} />
                        <div>
                            <p className="font-semibold">{post.name}</p>
                            <p className="text-gray-500 text-sm">{post.title}</p>
                        </div>
                        <BadgeCheck color="blue" strokeWidth={2} className="" />
                        <p className="ml-auto font-normal">{post.time}</p>
                        <Ellipsis />
                    </div>
                    <NewPost image={post.image} />
                </div>
            ))}
        </div>
    );
};

export default Post;
