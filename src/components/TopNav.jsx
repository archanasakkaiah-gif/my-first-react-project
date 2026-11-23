import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  Bell,
  Search,
  Sparkles,
  PhoneCall,
  User,
  CheckCheck,
  ShieldCheck,
  LogOut,
  Calendar,
  X
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export default function TopNav() {
  const {
    mobileSidebarOpen,
    setMobileSidebarOpen,
    notifications,
    markAllNotificationsAsRead,
    searchQuery,
    setSearchQuery,
    currentUser,
    setCurrentUser
  } = useSchool();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notifRef = useRef(null);
  const userRef = useRef(null);
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => n.unread).length;

  // Close popups on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-bottom sticky-top shadow-sm px-3 px-md-4 py-2" style={{ zIndex: 1020 }}>
      <div className="d-flex align-items-center justify-content-between gap-3">
        {/* Left: Mobile Toggle & Welcome Pill */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          <button
            className="btn btn-light rounded-circle p-2 d-lg-none"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            aria-label="Toggle Navigation"
          >
            <Menu size={22} className="text-purple" />
          </button>

          <div className="d-none d-sm-block">
            <span className="badge bg-purple-soft text-purple py-2 px-3 rounded-pill fw-semibold d-inline-flex align-items-center gap-2">
              <Sparkles size={14} className="text-warning" />
              <span>Admissions Open 2026-27</span>
            </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow-1 max-w-md mx-2 mx-md-4" style={{ maxWidth: '420px' }}>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0 rounded-start-pill ps-3 text-muted">
              <Search size={16} />
            </span>
            <input
              type="text"
              className="form-control bg-light border-start-0 rounded-end-pill py-2 text-dark font-body"
              placeholder="Search student, class, enquiry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontSize: '0.9rem' }}
            />
            {searchQuery && (
              <button
                className="btn btn-sm btn-link text-muted position-absolute end-0 top-50 translate-middle-y me-2"
                onClick={() => setSearchQuery('')}
                style={{ zIndex: 5 }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right: Quick CTA, Notifications, Profile */}
        <div className="d-flex align-items-center gap-2 gap-md-3">
          {/* Quick Call pill for parents */}
          <a
            href="tel:+919876543210"
            className="btn btn-outline-success btn-sm rounded-pill px-3 py-1 d-none d-xl-inline-flex align-items-center gap-2 fw-semibold"
          >
            <PhoneCall size={14} />
            <span>+91 98765 43210</span>
          </a>

          {/* Apply Button */}
          <Link
            to="/admissions/new"
            className="btn-kid-primary btn-sm d-none d-md-inline-flex py-2 px-3"
            style={{ fontSize: '0.85rem' }}
          >
            Apply Now
          </Link>

          {/* Notifications Dropdown */}
          <div className="position-relative" ref={notifRef}>
            <button
              className="btn btn-light rounded-circle p-2 position-relative"
              onClick={() => setShowNotifications(!showNotifications)}
              title="Notifications"
            >
              <Bell size={20} className="text-dark" />
              {unreadCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-white" style={{ fontSize: '0.7rem' }}>
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div
                className="card shadow-lg border-0 position-absolute end-0 mt-2 rounded-4 overflow-hidden"
                style={{ width: '320px', zIndex: 1050 }}
              >
                <div className="card-header bg-purple-soft py-3 px-3 d-flex align-items-center justify-content-between border-0">
                  <h6 className="mb-0 fw-bold text-purple d-flex align-items-center gap-2">
                    <Bell size={16} /> Notifications
                    {unreadCount > 0 && (
                      <span className="badge bg-danger rounded-pill">{unreadCount} New</span>
                    )}
                  </h6>
                  {unreadCount > 0 && (
                    <button
                      className="btn btn-sm btn-link text-purple p-0 text-decoration-none fw-semibold"
                      onClick={markAllNotificationsAsRead}
                      style={{ fontSize: '0.78rem' }}
                    >
                      <CheckCheck size={14} className="me-1 inline" /> Mark Read
                    </button>
                  )}
                </div>
                <div className="list-group list-group-flush" style={{ maxHeight: '340px', overflowY: 'auto' }}>
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`list-group-item list-group-item-action p-3 border-bottom ${n.unread ? 'bg-light' : ''}`}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-1">
                        <strong className="text-dark" style={{ fontSize: '0.86rem' }}>{n.title}</strong>
                        <span className="text-muted" style={{ fontSize: '0.72rem' }}>{n.time}</span>
                      </div>
                      <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>{n.message}</p>
                    </div>
                  ))}
                </div>
                <div className="card-footer bg-white text-center py-2 border-0">
                  <Link
                    to="/dashboard"
                    className="text-purple fw-semibold text-decoration-none"
                    style={{ fontSize: '0.82rem' }}
                    onClick={() => setShowNotifications(false)}
                  >
                    View CRM Dashboard →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Dropdown */}
          <div className="position-relative" ref={userRef}>
            <button
              className="btn btn-light rounded-pill p-1 pe-2 d-flex align-items-center gap-2 border"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center bg-purple-soft text-purple fw-bold"
                style={{ width: '32px', height: '32px', fontSize: '1rem' }}
              >
                {currentUser?.avatar || '👩‍🏫'}
              </div>
              <div className="d-none d-lg-block text-start" style={{ lineHeight: '1.1' }}>
                <div className="fw-bold text-dark" style={{ fontSize: '0.82rem' }}>
                  {currentUser?.name?.split(' ')[1] || 'Admin'}
                </div>
                <small className="text-muted" style={{ fontSize: '0.7rem' }}>
                  Principal
                </small>
              </div>
            </button>

            {showUserMenu && (
              <div
                className="card shadow-lg border-0 position-absolute end-0 mt-2 rounded-4 overflow-hidden"
                style={{ width: '240px', zIndex: 1050 }}
              >
                <div className="p-3 bg-purple-soft border-bottom">
                  <div className="fw-bold text-dark">{currentUser?.name}</div>
                  <small className="text-muted">{currentUser?.role}</small>
                  <div className="mt-1 badge bg-success bg-opacity-75 text-white" style={{ fontSize: '0.7rem' }}>
                    Academic Year: {currentUser?.academicYear}
                  </div>
                </div>
                <div className="p-2">
                  <button
                    className="dropdown-item py-2 px-3 rounded-3 d-flex align-items-center gap-2"
                    onClick={() => {
                      navigate('/dashboard');
                      setShowUserMenu(false);
                    }}
                  >
                    <ShieldCheck size={16} className="text-purple" />
                    <span>Admin Dashboard</span>
                  </button>
                  <button
                    className="dropdown-item py-2 px-3 rounded-3 d-flex align-items-center gap-2"
                    onClick={() => {
                      navigate('/admissions');
                      setShowUserMenu(false);
                    }}
                  >
                    <Calendar size={16} className="text-primary" />
                    <span>Manage Admissions</span>
                  </button>
                  <hr className="my-1" />
                  <button
                    className="dropdown-item py-2 px-3 rounded-3 d-flex align-items-center gap-2 text-danger"
                    onClick={() => {
                      navigate('/login');
                      setShowUserMenu(false);
                    }}
                  >
                    <LogOut size={16} />
                    <span>Switch / Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
