import {
  Heart,
  HomeIcon,
  Plus,
  Search,
  TextAlignStart,
  User
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileMenu from "./Menu/ProfileMenu";

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };



  return (
    <>
      <div className="ml-2 mt-22">
        <Link to={"/home"}>
          <HomeIcon />
        </Link>
        <Link to={"/search"}>
          <Search className="mt-7" />
        </Link>
        <Link to={"/post/:id"}>
          <Plus className="mt-7" />
        </Link>
        <Link to={"/notifications"}>
          <Heart className="mt-8" />
        </Link>
        <Link to={"/profile"}>
          <User className="mt-8" />
        </Link>
        <TextAlignStart className="mt-38 cursor-pointer"  onClick={handleMenuOpen}/>
      </div>
      <ProfileMenu anchorEl={menuAnchor} handleClose={handleMenuClose} />
    </>
  );
};
export default Navbar;
