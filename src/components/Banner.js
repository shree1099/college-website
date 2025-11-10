import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme, Grid, Container, Paper, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import images
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const images = [img1, img2, img3];

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
  '& .icon': {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const highlights = [
    {
      title: 'Established',
      value: '1983',
      description: 'Years of Excellence in Education'
    },
    {
      title: 'Programs',
      value: '150+',
      description: 'Diverse Academic Programs'
    },
    {
      title: 'Campuses',
      value: '12+',
      description: 'Nationwide Presence'
    },
    {
      title: 'Students',
      value: '50,000+',
      description: 'Bright Minds Nurtured'
    }
  ];

  return (
    <Box>
      <Box 
        sx={{
          width: '100%',
          height: { xs: '50vh', md: '70vh' },
          position: 'relative',
          overflow: 'hidden',
          mb: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '2%',
            left: '2%',
            right: '2%',
            width: '96%',
            height: '96%',
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'opacity 1s ease-in-out',
            zIndex: 1,
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgb(16, 16, 16)',
          }}
        />
      </Box>

      {/* Info Section */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, md: 10 } }}>
        <Grid container spacing={3} justifyContent="center">
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <InfoCard elevation={3}>
                <Box className="icon">{item.icon}</Box>
                <Typography variant="h4" component="div" sx={{ 
                  fontWeight: 700, 
                  color: theme.palette.primary.dark,
                  mb: 1
                }}>
                  {item.value}
                </Typography>
                <Typography variant="h6" component="h3" sx={{ 
                  fontWeight: 600, 
                  mb: 1,
                  color: theme.palette.text.primary
                }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </InfoCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
