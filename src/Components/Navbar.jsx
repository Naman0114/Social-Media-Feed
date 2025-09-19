import { Heart, HomeIcon, Pin, Plus, Search, TextAlignStart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    return <>
        <div className='ml-2 mt-22' >
            <HomeIcon onClick={()=>{navigate('/')}} />
            <Search className='mt-7' onClick={()=>{navigate('/search')}} />
            <Plus className='mt-7' onClick={()=>{navigate('/post')}}/>
                <Heart className='mt-8'  onClick={()=>{navigate('/notifications')}}/>
            <User className='mt-8' onClick={()=>{navigate('/profile')}}/>
            <Pin className='mt-20' />
            <TextAlignStart  className='mt-8'/>
        </div>
    </>

}
export default Navbar;