import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent, CardMedia, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessIcon from '@mui/icons-material/Business';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/college-building.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: 'white',
  padding: '180px 0 120px',
  textAlign: 'center',
  position: 'relative',
  '& h1': {
    fontSize: '3.5rem',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    },
  },
  '& h6': {
    fontSize: '1.25rem',
    fontWeight: 400,
    maxWidth: '800px',
    margin: '0 auto',
    color: '#f5f5f5',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  marginBottom: theme.spacing(6),
  color: '#1a365d',
  fontWeight: 'bold',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 80,
    height: 4,
    backgroundColor: '#e53e3e',
    borderRadius: 2,
  },
}));

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#fff',
  '&.gray-bg': {
    backgroundColor: '#f8f9fa',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.background.paper,
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiCardMedia-root': {
    height: 200,
    objectFit: 'cover',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    color: '#e53e3e',
    marginBottom: theme.spacing(2),
  },
}));

const TimelineItem = styled(Box)(({ theme, last }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  borderLeft: `3px solid ${theme.palette.primary.main}`,
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: '50%',
    background: theme.palette.primary.main,
    left: -9.5,
    top: 0,
  },
  '&:last-child': {
    paddingBottom: 0,
    borderLeft: last ? 'none' : `3px solid ${theme.palette.primary.main}`,
    '&:before': {
      display: last ? 'none' : 'block',
    },
  },
}));

const About = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
        <Typography variant="h3" component="h3">
            About
          </Typography>
          <Typography variant="h4" component="h4">
            D.Y. Patil College of Engineering and Technology
          </Typography>
          <Typography variant="h6">
            Empowering Education, Enriching Lives
          </Typography>
        </Container>
      </HeroSection>

      {/* Welcome Section */}
      <StyledSection>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <SectionTitle variant="h3" component="h2">
              Welcome to D.Y. Patil College of Engineering and Technology
            </SectionTitle>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
              D.Y. Patil Group has been a pioneer in the field of education, healthcare, and sports for over three decades. 
              With a strong commitment to excellence, we have been nurturing young minds and contributing to nation-building.
            </Typography>
          </Box>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box mb={4}>
                <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  To be a globally recognized institution that provides quality education and healthcare, fostering innovation, 
                  research, and holistic development of individuals to serve society.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.dark, fontWeight: 600 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  To provide world-class education and healthcare services that transform lives and communities through 
                  excellence in teaching, research, and innovation while upholding the highest standards of ethics and social responsibility.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/path-to-about-image.jpg"
                alt="About D.Y. Patil Group"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </StyledSection>

      {/* Core Values Section */}
      <StyledSection sx={{ backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <SectionTitle variant="h3" component="h2">
              Our Core Values
            </SectionTitle>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
              Our core values define who we are and guide our actions in delivering excellence in education and healthcare.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {[
              { 
                title: 'Excellence',
                description: 'We strive for the highest standards in all our endeavors and continuously improve our services.',
                icon: '⭐',
              },
              { 
                title: 'Integrity',
                description: 'We conduct ourselves with honesty, transparency, and ethical behavior in all our actions.',
                icon: '🤝',
              },
              { 
                title: 'Innovation',
                description: 'We encourage creativity and embrace new ideas to drive progress and positive change.',
                icon: '💡',
              },
              { 
                title: 'Social Responsibility',
                description: 'We are committed to serving society and contributing to sustainable development.',
                icon: '🌍',
              },
              { 
                title: 'Inclusivity',
                description: 'We value diversity and provide equal opportunities for all.',
                icon: '👥',
              },
              { 
                title: 'Collaboration',
                description: 'We believe in working together with stakeholders to achieve common goals.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard elevation={0}>
                  <Box textAlign="center" fontSize="2.5rem" mb={2}>
                    {value.icon}
                  </Box>
                  <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" align="center">
                    {value.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StyledSection>

      {/* History Section */}
      <StyledSection>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <SectionTitle variant="h3" component="h2">
              Our Journey
            </SectionTitle>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '800px', margin: '0 auto' }}>
              A timeline of our growth and achievements over the years.
            </Typography>
          </Box>
          
          <Box sx={{ maxWidth: '800px', margin: '0 auto', pl: 2 }}>
            {[
              {
                year: '1983',
                title: 'Foundation',
                description: 'D.Y. Patil Group was established with a vision to provide quality education and healthcare services.'
              },
              {
                year: '1990s',
                title: 'Expansion',
                description: 'Expanded educational institutions across multiple disciplines and established healthcare facilities.'
              },
              {
                year: '2000s',
                title: 'Recognition',
                description: 'Gained recognition for excellence in education and healthcare, receiving numerous accolades.'
              },
              {
                year: 'Present',
                title: 'Global Presence',
                description: 'Established a strong national presence and began international collaborations.'
              }
            ].map((milestone, index, array) => (
              <TimelineItem key={index} last={index === array.length - 1}>
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 600, mb: 1 }}>
                  {milestone.year}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {milestone.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {milestone.description}
                </Typography>
              </TimelineItem>
            ))}
          </Box>
        </Container>
      </StyledSection>
    </Box>
  );
};

export default About;
