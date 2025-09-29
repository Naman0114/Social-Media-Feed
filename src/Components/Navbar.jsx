import { Heart, HomeIcon, Pin, Plus, Search, TextAlignStart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    return <>
        <div className='ml-2 mt-22' >
            <HomeIcon onClick={()=>{navigate('/home')}} />
            <Search className='mt-7' onClick={()=>{navigate('/home/search')}} />
            <Plus className='mt-7' onClick={()=>{navigate('/home/post/:id')}}/>
                <Heart className='mt-8'  onClick={()=>{navigate('/home/notifications')}}/>
            <User className='mt-8' onClick={()=>{navigate('/home/profile')}}/>
            <Pin className='mt-20' />
            <TextAlignStart  className='mt-8'/>
        </div>
    </>

}
export default Navbar;