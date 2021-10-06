// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
// import { useSelector } from 'react-redux';
// import EditPost from '../EditPage/EditPage';

// // MUI
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import BrushIcon from '@mui/icons-material/Brush';
// import ExploreIcon from '@mui/icons-material/Explore';
// import InfoIcon from '@mui/icons-material/Info';

// // MOBILE VIEW
// export default function Nav() {
//   const user = useSelector((store) => store.user);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My posts</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
      // <Link className="navLink" to="/gallery">
      // <MenuItem>
      //   {/* gallery */}
      //   <IconButton size="large" aria-label="show 4 new mails" color="default">
      //     <Badge>
      //       <InsertPhotoIcon />
      //     </Badge>
      //   </IconButton>
      //   <p>Gallery</p>
      // </MenuItem>
      //   </Link>

      // {/* Our Artists */}
      // <Link className="navLink" to="/artists">
      // <MenuItem>
      //   <IconButton size="large" color="default">
      //     <Badge>
      //       <BrushIcon />
      //     </Badge>
      //   </IconButton>
      //   <p>Our Artists</p>
      // </MenuItem>
      // </Link> 

    



    // {/* About */}
    //   <Link className="navLink" to="/about">
    //   <MenuItem>
    //     <IconButton size="large" color="default">
    //       <Badge>
    //         <InfoIcon />
    //       </Badge>
    //     </IconButton>
    //     <p>About</p>
    //   </MenuItem>
    //     </Link>

      
//       {/* IF USER IS LOGGED IN SHOW */}
//       {/* Profile
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="default"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem> */}
//     </Menu>
//   );


  

//   return (
//  <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         style={{
//           backgroundColor: 'transparent',
//           color: 'black',
//           boxShadow: 'none',
//         }}
//       >

//         {/* -----VISIBLE TO EVERYONE---- */}
//         <Toolbar>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             // sx={{ display: { xs: 'none', sm: 'block' } }}
            
//           >
            // <Link to="/gallery"
            // style={{color: "black"}}>
            // Many Murals
            // </Link>

          
          // {/* About */}
          // </Typography>
          // <Box sx={{ flexGrow: 1 }} />
          // <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            // <IconButton>
            //   <Link className="navLink" to="/about">
            //     About
            //   </Link>
              
            //           </IconButton>
          //             {/* gallery */}
            // <IconButton size="large" 
            //   style={{ fontSize: "20px" }}>
              
            //   <Link className="navLink" to="/gallery">
            //     Gallery
            //   </Link>
            // </IconButton>

//                {/* Our Artists */}
//             <IconButton
//               size="large"
//               edge="end"
//               style={{fontSize: "20px"}}
//               aria-controls={menuId}
//               aria-haspopup="true"
//             >
//               <Link className="navLink" to="/artists">
//               Our Artists
//               </Link>
//             </IconButton>


            // {/* Map */}
            //   <IconButton
            //   size="large"
            //   edge="end"
            //   style={{fontSize: "20px"}}
            //   aria-controls={menuId}
            //   aria-haspopup="true"
            // >
            //   <Link className="navLink" to="/map">
            //   Map
            //   </Link>
            // </IconButton>

            // {/* Login */}
            //   <IconButton
            //   size="large"
            //   edge="end"
            //   style={{fontSize: "20px"}}
            //   aria-controls={menuId}
            //   aria-haspopup="true"
            // >
            //   <Link className="navLink" to="/login">
            //   Login
            //   </Link>
            // </IconButton>


//             {/* -----IF USER IS LOGGED IN---- */}
//             {user.id && (
//           <>
//                 <IconButton
//               size="large"
//               edge="end"
//               style={{fontSize: "20px"}}
//               aria-controls={menuId}
//               aria-haspopup="true"
//             >
//               <Link className="navLink" to="/user">
//               Home
//               </Link>
//             </IconButton>

//             <IconButton
//               size="large"
//               edge="end"
//               style={{fontSize: "20px"}}
//               aria-controls={menuId}
//               aria-haspopup="true"
//             >
//               <Link className="navLink" to="/profile">
//               Profile
//               </Link>
//             </IconButton>
//             <LogOutButton className="navLink" />
//           </>
//         )}
//             {/* Profile */}
//             {/* <IconButton
//               size="large"
//               edge="end"
//               style={{fontSize: "20px"}}
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//             >
//               Profile
//             </IconButton> */}
//           </Box>

//           {/* mobile view */}
//           <Box sx={{ display: { xs: '12', md: '8' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }



import * as React from 'react';
import './Nav.css';
import { useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

// MUI
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import BrushIcon from '@mui/icons-material/Brush';
import ExploreIcon from '@mui/icons-material/Explore';
import InfoIcon from '@mui/icons-material/Info';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const user = useSelector((store) => store.user);
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

      <Link className="navLink" to="/profile">
      <MenuItem onClick={handleMenuClose}>My Murals</MenuItem>
      </Link>
      
      <Link className="navLink" to="/user">
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Link>

      
    
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
    
      {/* Profile (MOBILE) */}
      {user.id && (
        <>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="default"
          >
            <Avatar alt={user.name} src={user.profile_image} />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
        
       
          </>
      )}
    
    {/* About (MOBILE) */}
      <Link className="navLink" to="/about">
      <MenuItem>
        <IconButton size="large" color="default">
          <Badge>
            <InfoIcon />
          </Badge>
        </IconButton>
        <p>About</p>
      </MenuItem>
        </Link>

      {/* Our Artists (MOBILE) */}
      <Link className="navLink" to="/artists">
      <MenuItem>
        <IconButton size="large" color="default">
          <Badge>
            <BrushIcon />
          </Badge>
        </IconButton>
        <p>Our Artists</p>
      </MenuItem>
        </Link>
        
    {/* Gallery (MOBILE) */}
      <Link className="navLink" to="/gallery">
      <MenuItem>
        <IconButton  color="default">
          <Badge>
            <InsertPhotoIcon />
          </Badge>
        </IconButton>
        <p>Gallery</p>
      </MenuItem>
      </Link>
      
        {/* Map (MOBILE) */}
      <Link className="navLink" to="/map">
      <MenuItem>
        <IconButton size="large" color="default">
          <Badge>
            <ExploreIcon />
          </Badge>
        </IconButton>
        <p>Map</p>
      </MenuItem>
      </Link>

      {/* Login (MOBILE) */}
      <Link className="navLink" to="/login">
        <MenuItem>
          <IconButton
          size="large"
          
          style={{fontSize: "20px"}}
          aria-controls={menuId}
          aria-haspopup="true"
        >
          <Badge>
            <LoginIcon />
          </Badge>
          </IconButton>
          <p>Login</p>
        </MenuItem>
      </Link>
      
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        style={{
          backgroundColor: 'transparent',
          color: 'black',
          boxShadow: 'none',
        }}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/gallery"
            style={{color: "black"}}>
            Many Murals
            </Link>
          </Typography>
          
        {/* -----VISIBLE TO EVERYONE---- */}


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
            


            {/* ABOUT (DESKTOP) */}
            <IconButton>
              <Link className="navLink" to="/about">
                About
              </Link>
              </IconButton>

            
            {/* GALLERY (DESKTOP) */}
            <IconButton size="large" 
              style={{ fontSize: "20px" }}>
            <Link className="navLink" to="/gallery">
                Gallery
              </Link>
            </IconButton>

            
            {/* Map (DESKTOP) */}
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

               {/* Login (DESKTOP) */}
              <IconButton
              size="large"
              edge="end"
              style={{fontSize: "20px"}}
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <Link className="navLink" to="/login">
              Login
              </Link>
            </IconButton>
            

            {/* ----- IF USER IS LOGGED IN SHOW THIS (DESKTOP)----- */}
            {user.id && (
                <>
             <LogOutButton className="navLink" />
              
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt={user.name} src={user.profile_image} />
              </IconButton>
              </>
            )}
            
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
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
