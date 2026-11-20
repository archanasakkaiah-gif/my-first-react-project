// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Users, Image, Phone, LogIn } from 'lucide-react';
import './Sidebar.css';

const menuItems = [
  { name: 'Dashboard', to: '/', icon: <Home size={18} /> },
  { name: 'Home', to: '/home', icon: <Home size={18} /> },
  { name: 'About Us', to: '/about', icon: <BookOpen size={18} /> },
  {
    name: 'Admissions',
    to: '/admissions',
    icon: <Users size={18} />,
    submenu: [
      { name: 'New Admission', to: '/admissions/new' },
      { name: 'Admission List', to: '/admissions/list' },
    ],
  },
  { name: 'Our Programs', to: '/programs', icon: <BookOpen size={18} /> },
  { name: 'Gallery', to: '/gallery', icon: <Image size={18} /> },
  { name: 'Contact', to: '/contact', icon: <Phone size={18} /> },
  { name: 'Login', to: '/login', icon: <LogIn size={18} /> },
];

export default function Sidebar() {
  const [openSub, setOpenSub] = useState(null);
  const toggleSub = (name) => setOpenSub(openSub === name ? null : name);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="logo.webp" alt="Little Champs" className="logo" />
        <h2>Little Champs Kids School</h2>
        <p>Play • Learn • Grow</p>
      </div>

      <nav className="menu">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item">
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => item.submenu && toggleSub(item.name)}
            >
              <span className="icon">{item.icon}</span>
              <span className="title">{item.name}</span>
              {item.submenu && (
                <span className="arrow">{openSub === item.name ? '▾' : '▸'}</span>
              )}
            </NavLink>

            {item.submenu && openSub === item.name && (
              <div className="submenu">
                {item.submenu.map((sub) => (
                  <NavLink key={sub.name} to={sub.to} className="submenu-link">
                    {sub.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Dream Big Learn Big</p>
        <img src="/illustration.svg" alt="Kids" className="illustration" />
      </div>
    </aside>
  );
}