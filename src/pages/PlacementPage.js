import React from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const PlacementPage = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Placement
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Training, placement activities and contact details of T&P coordinators.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Student Training & Placement" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Placement Brochure" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Training Activities" />
        </ListItem>
      </List>
    </Paper>
  </Container>
);

export default PlacementPage;
