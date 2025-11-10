import React from 'react';
import { Container, Box, Typography, Paper, Grid } from '@mui/material';

const AdmissionPage = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Admission
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        For admission inquiries, please refer to the official guidelines and contact the admission office.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Admission Process</Typography>
            <Typography variant="body2" color="text.secondary">Step-by-step process for applying to the programs.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Documents Required</Typography>
            <Typography variant="body2" color="text.secondary">List of documents needed for admission.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  </Container>
);

export default AdmissionPage;
