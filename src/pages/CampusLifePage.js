import React from 'react';
import { Container, Paper, Typography, Grid, Box } from '@mui/material';

const CampusLifePage = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Campus Life
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Explore hostel facilities, library services, transport, and campus activities.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">Hostel Facilities</Typography>
            <Typography variant="body2" color="text.secondary">Comfortable and secure hostels with amenities.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6">Library</Typography>
            <Typography variant="body2" color="text.secondary">Extensive collection of books and digital resources.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  </Container>
);

export default CampusLifePage;
