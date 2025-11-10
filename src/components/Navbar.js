import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  IconButton,
  Typography,
  Paper,
  Grow,
  ClickAwayListener,
  Popper,
  useMediaQuery,
  useTheme,
  Divider,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const anchorRef = useRef(null);

  const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About Us',
      path: '/about',
      subMenu: [
        { title: 'Vision & Mission', path: '/about/vision-mission' },
        { title: "Chairman's Message", path: '/about/chairmans-message' },
        { title: 'Trustee Message', path: '/about/trustee-message' },
        { title: 'Executive Director Message', path: '/about/executive-director' },
        { title: "Principal's Message", path: '/about/principal' },
      ],
    },
    {
      title: 'Academics',
      path: '/academics',
      subMenu: [
        { title: 'Academic Calendar', path: '/academics/calendar' },
        { title: 'Rules and Regulations', path: '/academics/rules' },
        { title: 'Syllabus', path: '/academics/syllabus' },
      ],
    },
    {
      title: 'Departments',
      path: '/departments',
      subMenu: [
        { title: 'Computer Science & Engineering', path: '/departments/cse' },
        { title: 'Mechanical Engineering', path: '/departments/mechanical' },
        { title: 'Civil Engineering', path: '/departments/civil' },
        { title: 'Electronics & Telecom', path: '/departments/etc' },
        { title: 'Chemical Engineering', path: '/departments/chemical' },
      ],
    },
    {
      title: 'Admission',
      path: '/admission',
      subMenu: [
        { title: 'Admission Process', path: '/admission/process' },
        { title: 'Fee Structure', path: '/admission/fees' },
        { title: 'Documents Required', path: '/admission/documents' },
        { title: 'Scholarships', path: '/admission/scholarships' },
      ],
    },
    {
      title: 'Campus Life',
      path: '/campus-life',
      subMenu: [
        { title: 'Hostel Facilities', path: '/campus-life/hostel' },
        { title: 'Library', path: '/campus-life/library' },
        { title: 'Bus Facilities', path: '/campus-life/bus-facilities' },
        { title: 'Cafeteria', path: '/campus-life/cafeteria' },
      ],
    },
    {
      title: 'Facilities',
      path: '/facilities',
      subMenu: [
        { title: 'Student Clubs', path: '/facilities/student-clubs' },
        { title: 'NSS', path: '/facilities/nss' },
        { title: 'Sports', path: '/facilities/sports' },
        { title: 'NCC', path: '/facilities/ncc' },
      ],
    },
    {
      title: 'Placement',
      path: '/placement',
      subMenu: [
        { title: 'Student Training placement', path: '/placement/student-training-placement' },
        { title: 'Placement Brouchere', path: '/placement/placement-brouchere' },
        { title: 'Activities', path: '/placement/activities' },
        { title: 'T&P Coordinator', path: '/placement/tp-coordinator' },
      ],
    },
  ];

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubMenuToggle = (menuTitle) => {
    setExpandedMenu(expandedMenu === menuTitle ? null : menuTitle);
  };

  const handleCloseMobileMenu = () => {
    setMobileOpen(false);
    setExpandedMenu(null);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setExpandedMenu(null);
  }, [location.pathname]);

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
      {menuItems.map((item) => (
        <Box 
          key={item.title} 
          sx={{ 
            position: 'relative',
            '&:hover .dropdown-menu': {
              display: 'block',
              visibility: 'visible',
              opacity: 1,
              transform: 'translateY(0)',
            }
          }}
        >
          <Button
            component={RouterLink}
            to={item.path}
            endIcon={item.subMenu ? <KeyboardArrowDownIcon /> : null}
            sx={{
              color: 'white',
              mx: 1,
              py: 2,
              px: 2,
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              '&:hover': {
                backgroundColor: 'rgb(255, 255, 255)',
              },
              ...(location.pathname === item.path && {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                fontWeight: 600,
              }),
            }}
          >
            {item.title}
          </Button>
          
          {item.subMenu && (
            <Box
              className="dropdown-menu"
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '100%',
                backgroundColor: 'white',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                zIndex: theme.zIndex.drawer,
                display: 'none',
                visibility: 'hidden',
                opacity: 0,
                transform: 'translateY(-10px)',
                transition: 'all 0.2s ease-in-out',
                borderTop: `3px solid ${theme.palette.primary.main}`,
              }}
            >
              <Container maxWidth={false}>
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  py: 2,
                }}>
                  {item.subMenu.map((subItem) => (
                    <Button
                      key={subItem.title}
                      component={RouterLink}
                      to={subItem.path}
                      sx={{
                        color: theme.palette.primary.main,
                        textAlign: 'left',
                        width: { md: '20%', lg: '20%' },
                        py: 1.5,
                        px: 2,
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          backgroundColor: 'rgba(20, 60, 116, 0.1)',
                        },
                      }}
                    >
                      {subItem.title}
                    </Button>
                  ))}
                </Box>
              </Container>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );

  const renderMobileMenu = () => (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
      <IconButton
        size="large"
        onClick={handleMobileMenuToggle}
        color="inherit"
        sx={{ ml: 'auto' }}
      >
        <MenuIcon />
      </IconButton>
      
      <Collapse
        in={mobileOpen}
        sx={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          zIndex: theme.zIndex.drawer,
          backgroundColor: theme.palette.primary.dark,
          boxShadow: theme.shadows[4],
        }}
      >
        <Box sx={{ py: 1 }}>
          {menuItems.map((item) => (
            <Box key={item.title}>
              <Button
                fullWidth
                component={RouterLink}
                to={item.path}
                onClick={item.subMenu ? () => handleSubMenuToggle(item.title) : handleCloseMobileMenu}
                sx={{
                  color: 'white',
                  justifyContent: 'space-between',
                  px: 3,
                  py: 1.5,
                  textAlign: 'left',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.title}
                {item.subMenu && (
                  <KeyboardArrowRightIcon
                    sx={{
                      transform: expandedMenu === item.title ? 'rotate(90deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  />
                )}
              </Button>
              
              {item.subMenu && (
                <Collapse in={expandedMenu === item.title} timeout="auto" unmountOnExit>
                  <Box sx={{ 
                    pl: 3, 
                    backgroundColor: 'white',
                    borderLeft: `2px solid ${theme.palette.primary.main}`
                  }}>
                    {item.subMenu.map((subItem) => (
                      <Button
                        key={subItem.title}
                        component={RouterLink}
                        to={subItem.path}
                        onClick={handleCloseMobileMenu}
                        fullWidth
                        sx={{
                          color: theme.palette.primary.main,
                          justifyContent: 'flex-start',
                          pl: 4,
                          py: 1.5,
                          textTransform: 'none',
                          fontSize: '0.9rem',
                          '&:hover': {
                            backgroundColor: 'rgba(20, 60, 116, 0.1)',
                          },
                        }}
                      >
                        {subItem.title}
                      </Button>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Toolbar disableGutters sx={{ minHeight: '64px' }}>
          <Box sx={{ flexGrow: 1 }} />
          {renderDesktopMenu()}
          {renderMobileMenu()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
