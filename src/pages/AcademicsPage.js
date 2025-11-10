import React from 'react';
import { Container, Paper, Typography, Grid, Box } from '@mui/material';

const AcademicsPage = () => (
  <Container maxWidth="lg" sx={{ py: 6 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Academics
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Academic calendar, syllabus, and rules & regulations are available for students and faculty.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6">Academic Calendar</Typography>
            <Typography variant="body2" color="text.secondary">Important dates for the academic year.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6">Syllabus</Typography>
            <Typography variant="body2" color="text.secondary">Syllabus for all programs and semesters.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h6">Rules & Regulations</Typography>
            <Typography variant="body2" color="text.secondary">Guidelines and code of conduct for students.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  </Container>
);

export default AcademicsPage;
