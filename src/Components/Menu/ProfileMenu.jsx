import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    handleClose();
    navigate("/edit-profile");
  };

  const handleLogout = () => {
    handleClose();
    // have to add logout logic here 
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
