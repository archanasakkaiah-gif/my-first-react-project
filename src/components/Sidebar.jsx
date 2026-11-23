import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Home,
  LayoutDashboard,
  BookOpen,
  Users,
  Image,
  Info,
  Phone,
  LogIn,
  ChevronDown,
  ChevronRight,
  Sparkles,
  PlusCircle,
  X,
  Heart
} from 'lucide-react';
import { SchoolLogoSvg } from '../assets/illustrations';
import { useSchool } from '../context/SchoolContext';
import './Sidebar.css';

export default function Sidebar() {
  const { mobileSidebarOpen, setMobileSidebarOpen, setAddStudentModalOpen, admissions } = useSchool();
  const [admissionsMenuOpen, setAdmissionsMenuOpen] = useState(true);
  const location = useLocation();

  const handleLinkClick = () => {
    if (window.innerWidth < 992) {
      setMobileSidebarOpen(false);
    }
  };

  const pendingCount = admissions.filter(a => a.status === 'Pending').length;

  return (
    <>
      {/* Mobile backdrop */}
      {mobileSidebarOpen && (
        <div
          className="mobile-backdrop d-lg-none"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar-container ${mobileSidebarOpen ? 'open' : ''}`}>
        {/* Header with School Logo */}
        <div className="sidebar-header">
          <Link to="/" className="brand-wrapper" onClick={handleLinkClick}>
            <SchoolLogoSvg size={44} />
            <div className="brand-text">
              <h2>Little Champs</h2>
              <p>Play • Learn • Grow 🌟</p>
            </div>
          </Link>
          <button
            className="close-mobile-btn d-lg-none"
            onClick={() => setMobileSidebarOpen(false)}
            title="Close Menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          <div className="nav-section-title">Explore School</div>

          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span className="nav-icon"><Home size={19} /></span>
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/programs"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span className="nav-icon"><BookOpen size={19} /></span>
            <span>Programs & Age</span>
            <span className="badge-pill-nav">5</span>
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span className="nav-icon"><Image size={19} /></span>
            <span>Kids Gallery</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span className="nav-icon"><Info size={19} /></span>
            <span>About Us</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span className="nav-icon"><Phone size={19} /></span>
            <span>Contact & Tour</span>
          </NavLink>

          <div className="nav-section-title mt-2">School Management</div>

          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span className="nav-icon"><LayoutDashboard size={19} /></span>
            <span>CRM Dashboard</span>
            <span className="badge-pill-nav bg-warning text-dark fw-bold">Live</span>
          </NavLink>

          {/* Admissions Collapsible */}
          <div>
            <div
              className={`nav-link-item ${location.pathname.startsWith('/admissions') ? 'active' : ''}`}
              onClick={() => setAdmissionsMenuOpen(!admissionsMenuOpen)}
            >
              <span className="nav-icon"><Users size={19} /></span>
              <span>Admissions</span>
              {pendingCount > 0 && (
                <span className="badge bg-danger text-white rounded-pill ms-auto me-1" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                  {pendingCount}
                </span>
              )}
              <span className="ms-auto">
                {admissionsMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </span>
            </div>

            {admissionsMenuOpen && (
              <div className="submenu-container">
                <NavLink
                  to="/admissions"
                  end
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  Overview & List
                </NavLink>
                <NavLink
                  to="/admissions/new"
                  className={({ isActive }) => `submenu-item ${isActive ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  + New Admission Form
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/login"
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
            onClick={handleLinkClick}
          >
            <span className="nav-icon"><LogIn size={19} /></span>
            <span>Parent / Staff Portal</span>
          </NavLink>
        </nav>

        {/* Promo Quick Action */}
        <div className="sidebar-promo-card">
          <div className="d-flex justify-content-center mb-2 text-warning">
            <Sparkles size={24} />
          </div>
          <h4>Admissions 2026-27</h4>
          <p>Limited seats open for Toddlers & Nursery</p>
          <button
            className="btn btn-sm btn-warning w-100 fw-bold rounded-pill shadow-sm"
            onClick={() => {
              setAddStudentModalOpen(true);
              handleLinkClick();
            }}
          >
            <PlusCircle size={15} className="me-1" /> Quick Admission
          </button>
        </div>

        {/* Footer info */}
        <div className="p-3 text-center border-top border-white-10 text-white-50" style={{ fontSize: '0.74rem' }}>
          Made with <Heart size={12} className="text-danger inline" /> for Little Champions
        </div>
      </aside>
    </>
  );
}
