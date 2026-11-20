import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3 py-2 d-flex align-items-center justify-content-between">
      <button className="btn btn-outline-primary me-3" type="button" id="sidebarToggle">
        <AiOutlineMenu size={24} />
      </button>
      <div className="d-flex flex-column">
        <h5 className="mb-0">Little Champs Kids School</h5>
        <small className="text-muted">CRM Admin Panel</small>
      </div>
      <div className="d-flex align-items-center ms-auto">
        <button className="btn position-relative me-3">
          <AiOutlineBell size={20} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </button>
        <div className="dropdown">
          <button className="btn dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://i.pravatar.cc/40" alt="admin" className="rounded-circle me-2" width={32} height={32} />
            <span>Admin</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="/logout">Logout</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
