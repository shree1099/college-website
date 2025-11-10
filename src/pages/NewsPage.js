import React from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const NewsPage = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Latest News & Events
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="TECHNOTSAV 2K25 announced" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Free vaccination drive starting from 21 June 2021" />
        </ListItem>
        <ListItem>
          <ListItemText primary="4 students selected by Force Motors" />
        </ListItem>
      </List>
    </Paper>
  </Container>
);

export default NewsPage;
