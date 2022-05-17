import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import { Link } from 'react-router-dom';

const pages = [
  {
  name: 'HOME',
  link: 'home'
  },
  {
    name: 'UPDATES',
    link: 'updates'
  },
  {
    name: 'MEDIA',
    link: 'media'
  },
  {
    name: 'ABOUT US',
    link: 'about'
  },
  {
    name: 'FREELANCER SKILLS',
    link: 'skills'
  },
  {
    name: 'CONTACT US',
    link: 'contact'
  },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active, setActive] = useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const _handleClick = (menuItem) => {
    setActive(menuItem);
  }

  const activeStyle = { color: '#14a800' };
  
  return (
    <AppBar position="static" sx={{backgroundColor: '#ffff'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" className='logo'>FREETRANSLATE</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={() => handleCloseNavMenu(page)}>
                  <Link className="menu-item menu-item-collapse" to={ page.link }><Typography textAlign="center">{page.name}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#14a800',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <b>
                  <Link 
                    className="menu-item" 
                    to={ page.link }
                    style={ active === page.name ? activeStyle : {}} 
                    onClick={() =>_handleClick(page.name)}
                    >{page.name}</Link>
                </b>
              </Button>
            ))}
          </Box>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <SearchIcon sx={{ display: { xs: 'none', md: 'flex' }, color:'#14a800' }}/>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
