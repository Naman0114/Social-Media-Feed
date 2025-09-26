import { Heart, MessageCircle, Repeat2, Send } from 'lucide-react';

const NewPost = ({ image }) => {
    return (
        <div className="flex  w-lg flex-col gap-2">
            <img src={image} className="w-sm rounded-2xl" alt="post" />
            <div className="flex gap-4 mt-2">
                <Heart strokeWidth={1} />
                <MessageCircle strokeWidth={1} />
                <Repeat2 strokeWidth={1} />
                <Send strokeWidth={1} />
            </div>
        </div>
    );
};

export default NewPost;
