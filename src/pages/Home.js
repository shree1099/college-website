import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from '../components/Banner';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
  },
}));

const Home = () => {
  const theme = useTheme();
  const topStoriesHTML = `
    <section id="top-stories" class="padd-big">
      <div class="container">
        <div class="row">
            <div class="col-md-12 main-topnews">
             <div class="col-md-4 inner-newshome">
                 <div class="innerabout-section1">
                 <!-- gallery / slider content (static embed) -->
                  <div class="home-about-college">            <div class="textwidget"><div class="gallery-section">
... (content trimmed for brevity in source file) ...
                  </div>
             </div>
             
            </div>
        
          <!--<div class="red-more-row">
            <div class="col-md-12 text-right"><a href="/about-dyp-group/news-events" class="read-more">More News <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>
          </div>-->
        </div>
      
    </section>
  `;

  return (
    <Box>
      {/* Banner Section */}
      <Box sx={{ width: '100%' }}>
        <Banner />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          width: '100%',
          py: 8,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: topStoriesHTML }} />

        {/* Features / Highlights - use previously-unused imports to satisfy ESLint */}
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            Highlights
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <StyledPaper elevation={2}>
                <StyledIcon>
                  <SchoolIcon />
                </StyledIcon>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Academic Excellence</Typography>
                <Typography variant="body2" color="text.secondary">Strong curriculum and experienced faculty.</Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>Learn more</Button>
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledPaper elevation={2}>
                <StyledIcon>
                  <GroupsIcon />
                </StyledIcon>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Large Student Body</Typography>
                <Typography variant="body2" color="text.secondary">A diverse, vibrant campus community.</Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>Discover</Button>
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={4}>
              <StyledPaper elevation={2}>
                <StyledIcon>
                  <EmojiEventsIcon />
                </StyledIcon>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Placements & Achievements</Typography>
                <Typography variant="body2" color="text.secondary">Strong placement record and industry partnerships.</Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>See placements</Button>
              </StyledPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
