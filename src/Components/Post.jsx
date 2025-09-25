import Avatar from '@mui/material/Avatar';
import { BadgeCheck } from 'lucide-react';
import NewPost from './Newpost';

import { Ellipsis } from 'lucide-react';
const Post = () => {
    return (
        <>
            <div className="h-full ml-28 my-2 w-160 flex flex-col border-1 rounded-3xl  shadow-md shadow-gray-300">
                <div className='flex flex-row mt-3 ml-6'>
                    <Avatar src="namanphoto.jpg"
                        sx={{
                            width: 35,
                            height: 35,
                        }}
                    />
                    <div className='ml-3 mb-3'>
                        <p>Naman Prabhat Chaturvedi</p>
                        <p>Software Engineer</p>
                    </div>
                    <BadgeCheck color="blue" strokeWidth={2} className='size-3.5 ml-1 mt-1.5 mr-2' />
                    <p className='font-normal'>1d</p>
                    <Ellipsis className='size-4 mt-1.5 ml-72' />
                </div>
                <NewPost />
                <NewPost />
                <NewPost />
                <NewPost />
            </div>
        </>
    )
}
export default Post;
