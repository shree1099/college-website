import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import About from './components/About';
import AdmissionPage from './pages/AdmissionPage';
import DepartmentsPage from './pages/DepartmentsPage';
import NewsPage from './pages/NewsPage';
import AcademicsPage from './pages/AcademicsPage';
import CampusLifePage from './pages/CampusLifePage';
import FacilitiesPage from './pages/FacilitiesPage';
import PlacementPage from './pages/PlacementPage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/placement" element={<PlacementPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
