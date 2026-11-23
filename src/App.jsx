import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import GlobalModals from './components/GlobalModals';

import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Programs from './pages/Program';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Responsive Left Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="main-content-wrapper">
          <TopNav />

          <main className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions/new" element={<Admissions defaultTab="new" />} />
              <Route path="/admissions/list" element={<Admissions defaultTab="list" />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>

        {/* Global Modals for Quick Add, Details & Gallery upload */}
        <GlobalModals />
      </div>
    </BrowserRouter>
  );
}

export default App;
