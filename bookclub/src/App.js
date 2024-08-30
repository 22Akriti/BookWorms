import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Section from './components/Section';
import LoginPage from './components/LoginPage';
import CreateClub from './components/CreateClub';
import Blog from './components/Blog';
import MyProfile from './components/MyProfile';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';

const App = () => (
  <Router>
    {/* Apply Global Styles */}
    <GlobalStyles />

    {/* Navbar always visible */}
    <Navbar />

    {/* Routes to different pages */}
    <Routes>
      <Route
        path="/"
        element={
          <>
            <LandingPage />
            <Section />
          </>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-club" element={<CreateClub />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/profile" element={<MyProfile />} />
      {/* Add additional routes here as needed */}
    </Routes>

    {/* Footer always visible */}
    <Footer />
  </Router>
);

export default App;
