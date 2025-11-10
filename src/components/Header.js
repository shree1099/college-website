import React from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import logo from '../assets/header.png';

const Header = () => {
  const theme = useTheme();
  
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: theme.palette.primary.main,
        py: 2
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          <Box 
            component="img"
            src={logo}
            alt="DYPCET Logo"
            sx={{ 
              height: { xs: '120px', md: '150px' },
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
