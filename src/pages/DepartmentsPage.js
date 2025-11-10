import React from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const DepartmentsPage = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Departments
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We offer a wide range of engineering and technology programs across multiple disciplines.
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="Computer Science & Engineering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mechanical Engineering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Civil Engineering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Electronics & Telecommunication Engineering" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Artificial Intelligence & Machine Learning" />
        </ListItem>
      </List>
    </Paper>
  </Container>
);

export default DepartmentsPage;
