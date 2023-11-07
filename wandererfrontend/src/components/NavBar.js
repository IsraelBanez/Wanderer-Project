import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import '../style/NavBar.css';
import menuicon from '../icons/menu.png';
import { Icon } from '@mui/material';

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /* Navigating to Userform section */
  const scrollToUserForm = () => {
    const userFormSection = document.getElementById('user-form-id');
    if (userFormSection) {
      userFormSection.scrollIntoView({ behavior: 'smooth' });
      handleClose();
    }
  };

  /* Navigating to WandererDisplay section */
  const scrollToWandererDisplay = () => {
    const wandererDisplaySection = document.getElementById('wanderer-display-id');
    if (wandererDisplaySection) {
      wandererDisplaySection.scrollIntoView({ behavior: 'smooth' });
      handleClose();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} className='header'>
      <icon className='icon-button' onClick={handleMenu}>
        <img src={menuicon} alt='menu-icon'/>
      </icon>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={scrollToUserForm}>Join</MenuItem>
        <MenuItem onClick={scrollToWandererDisplay}>Wanderers</MenuItem>
      </Menu>
    </Box>
  );
}
