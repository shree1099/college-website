import React from 'react';
import { Container, Paper, Typography, Grid, Box } from '@mui/material';

const FacilitiesPage = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Facilities
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Information about student clubs, NSS, sports, and NCC.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6">Student Clubs</Typography>
            <Typography variant="body2" color="text.secondary">Active student-run clubs and societies.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6">NSS</Typography>
            <Typography variant="body2" color="text.secondary">Community service and outreach programs.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6">Sports</Typography>
            <Typography variant="body2" color="text.secondary">Facilities for indoor and outdoor sports.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  </Container>
);

export default FacilitiesPage;
