import React, { useState } from "react";
import { AppBar, Toolbar, Box, Typography, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { logo } from "../../constants/constant";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../constants/route";
const StyledToolbar = styled(Toolbar)`
  background: black;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;
const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55vw;
  border-radius: 5px;
`;
const Logo = styled("img")({
  width: 64,
});

const Header = () => {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate();
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Logo src={logo} alt="logo" onClick={() => navigate(routePath.home)} style={{cursor:"pointer"}} />
        <Box onClick={handleClick}>
          <MenuIcon />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAddIcon />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMoreIcon />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
