import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import EditPost from '../EditPage/EditPage';

// MUI
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import BrushIcon from '@mui/icons-material/Brush';


// MOBILE VIEW
export default function Nav() {
  const user = useSelector((store) => store.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My posts</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="default">
          <Badge>
            <InsertPhotoIcon />
          </Badge>
        </IconButton>
        <p>Gallery</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="default">
          <Badge>
            <BrushIcon />
          </Badge>
        </IconButton>
        <p>Our Artists</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="default"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  

  return (
 <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: 'transparent',
          color: 'black',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ display: { xs: 'none', sm: 'block' } }}
            
          >
            <Link to="/home"
            style={{color: "black"}}>
            Many Murals
            </Link>

          {/* -----VISIBLE TO EVERYONE---- */}
          {/* About */}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton>
              <Link className="navLink" to="/about">
                About
              </Link>
              
            {/* gallery */}
            </IconButton>
            <IconButton size="large" 
              style={{ fontSize: "20px" }}>
              
              <Link className="navLink" to="/gallery">
                Gallery
              </Link>
            </IconButton>

               {/* Our Artists */}
            <IconButton
              size="large"
              edge="end"
              style={{fontSize: "20px"}}
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <Link className="navLink" to="/artists">
              Our Artists
              </Link>
            </IconButton>


            {/* Map */}
              <IconButton
              size="large"
              edge="end"
              style={{fontSize: "20px"}}
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <Link className="navLink" to="/map">
              Map
              </Link>
            </IconButton>


            {/* -----IF USER IS LOGGED IN---- */}
            {/* Profile */}
            {/* <IconButton
              size="large"
              edge="end"
              style={{fontSize: "20px"}}
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              Profile
            </IconButton> */}
          </Box>

          {/* mobile view */}
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}













//OG NAV
//const user = useSelector((store) => store.user);
//  <div className="nav">
//       <AppBar position="sticky">
//         <Toolbar>
//           <IconButton aria-label="app" color="inherit">
//             <MenuIcon/>
//             </IconButton>
//       <Link to="/home">
//         <h2 className="nav-title">Many Murals</h2>
//       </Link>
//       <div>
        // {/* If no user is logged in, show these links */}
        // {user.id === null &&
        //   // If there's no user, show login/registration links
        //   <Link className="navLink" to="/login">
        //     Login / Register
        //   </Link>
        // }

        // {/* visible to everyone */}

        // <Link className="navLink" to="/about">
        //   About
        // </Link>
        // <Link className="navLink" to="/gallery">
        //   Gallery
        // </Link>
        // <Link className="navLink" to="/artists">
        //   Our Artists
        // </Link>
        //   <Link className="navLink" to="/map">
        //     Map
        //   </Link>
        //  {/* <Link className="navLink" to="/login">
        //     Login / Register
        //   </Link> */}
        
        {/* If a user is logged in, show these links */}
        // {user.id && (
        //   <>
        //     <Link className="navLink" to="/user">
        //       Home
        //     </Link>

        //     <Link className="navLink" to="/profile">
        //       Profile
        //     </Link>
        //     <LogOutButton className="navLink" />
        //   </>
        // )}
    //   </div>
      
    //   </Toolbar>
    //   </AppBar>
    // </div> 