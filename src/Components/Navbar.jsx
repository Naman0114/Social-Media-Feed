import {
    Heart,
    HomeIcon,
    Pin,
    Plus,
    Search,
    TextAlignStart,
    User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="ml-2 mt-22">
        <Link to={"/home"}>
          <HomeIcon />
        </Link>
        <Link to={"/home/search"}>
          <Search className="mt-7" />
        </Link>
        <Link to={"/home/post/:id"}>
          <Plus className="mt-7" />
        </Link>
        <Link to={"/home/notifications"}>
          <Heart className="mt-8" />
        </Link>
        <Link to={"/home/profile"}>
          <User className="mt-8" />
        </Link>
        <Pin className="mt-20" />
        <TextAlignStart className="mt-8" />
      </div>
    </>
  );
};
export default Navbar;
