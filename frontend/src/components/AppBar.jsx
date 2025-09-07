import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// MUI Core Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';

// === CHANGED === Added the 'Home' link to the menuItems array.
const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'Readings', path: '/readings' },
  { text: 'Decks', path: '/decks' },
  { text: 'History', path: '/history' },
];

function CustomAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar 
        position="static" 
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-controls="basic-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.text} onClick={() => handleNavigate(item.path)}>
                {item.text}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;