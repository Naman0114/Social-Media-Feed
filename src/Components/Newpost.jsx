import { Heart, MessageCircle, Repeat2, Send } from 'lucide-react';
const NewPost = () => {
    return (
    <>
        <div className="ml-18 ">
            <div className="w-90">
            <img src="box7_image.jpg"  alt="image"/>
            </div>
            <div className="flex flex-row mt-4 ">
                <Heart strokeWidth={1} className="mr-4"/>
                <MessageCircle strokeWidth={1} className="mr-4" />
                <Repeat2 strokeWidth={1} className=" mr-4"/>
                <Send strokeWidth={1}className="mr-4" />
            </div>
        </div>
        <hr className='border-1 m-4'/>
        </>
        
    )
}

export default NewPost;
