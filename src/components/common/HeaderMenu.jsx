import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../../constants/route";
const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <Link to= { `${routePath.categories}?categories=popular`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </Link>
      <Link to={ `${routePath.categories}?categories=toprated`}  style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </Link>
      <Link to={ `${routePath.categories}?categories=upcoming`} style={{textDecoration:'none',color:'inherit'}}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Link>
    </Menu>
  );
};

export default HeaderMenu;
