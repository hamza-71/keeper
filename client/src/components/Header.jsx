import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
function Header() {
  const Navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("user");
    Navigate("/Auth");
  }
  return (
    <header>
      <h1>Keeper</h1>
      <LogoutIcon onClick={handleLogout} style={{color:"blue",cursor:"pointer"}} />
      
    </header>
  );
}

export default Header;
