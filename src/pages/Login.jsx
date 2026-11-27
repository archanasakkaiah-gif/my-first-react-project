import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  LogIn,
  ShieldCheck,
  User,
  Lock,
  ArrowRight,
  Sparkles,
  Heart,
  Eye,
  EyeOff
} from 'lucide-react';
import { SchoolLogoSvg } from '../assets/illustrations';
import { useSchool } from '../context/SchoolContext';

export default function Login() {
  const { login } = useSchool();
  const navigate = useNavigate();

  const [roleTab, setRoleTab] = useState('staff'); // 'parent' or 'staff'
  const [email, setEmail] = useState('admin@littlechamps.edu');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleRoleTabChange = (role) => {
    setRoleTab(role);
    if (role === 'staff') {
      setEmail('admin@littlechamps.edu');
      setPassword('admin123');
    } else {
      setEmail('parent.aarav@gmail.com');
      setPassword('parent123');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (roleTab === 'staff') {
      login(
        {
          name: 'Mrs. Sunita Sharma',
          role: 'Principal & Super Admin',
          email: email,
          avatar: '👩‍🏫',
          schoolName: 'Little Champs Kids School',
          academicYear: '2026-2027'
        },
        'staff-session-token'
      );
      navigate('/dashboard', { replace: true });
    } else {
      login(
        {
          name: 'Rajesh & Meera Patel',
          role: 'Parent of Aarav (Nursery)',
          email: email,
          avatar: '👨‍👩‍👦',
          schoolName: 'Little Champs Kids School',
          academicYear: '2026-2027'
        },
        'parent-session-token'
      );
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="login-page py-4 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="card-kid bg-white p-4 p-md-5 border shadow-lg" style={{ maxWidth: '480px', width: '100%' }}>
        {/* Logo & School Title */}
        <div className="text-center mb-4">
          <div className="d-inline-flex justify-content-center mb-2">
            <SchoolLogoSvg size={54} />
          </div>
          <h3 className="fw-bold text-purple mb-0">Little Champs</h3>
          <p className="text-muted small">Play • Learn • Grow Portal</p>
        </div>

        {/* Portal Type Switcher */}
        <div className="d-flex bg-light p-1 rounded-pill mb-4 border">
          <button
            type="button"
            className={`btn w-50 rounded-pill py-2 fw-bold small ${roleTab === 'staff' ? 'bg-purple text-white shadow-sm' : 'text-muted'}`}
            style={{ backgroundColor: roleTab === 'staff' ? '#7C3AED' : 'transparent', color: roleTab === 'staff' ? '#fff' : '#64748B' }}
            onClick={() => handleRoleTabChange('staff')}
          >
            👩‍🏫 Principal / Staff
          </button>
          <button
            type="button"
            className={`btn w-50 rounded-pill py-2 fw-bold small ${roleTab === 'parent' ? 'bg-purple text-white shadow-sm' : 'text-muted'}`}
            style={{ backgroundColor: roleTab === 'parent' ? '#7C3AED' : 'transparent', color: roleTab === 'parent' ? '#fff' : '#64748B' }}
            onClick={() => handleRoleTabChange('parent')}
          >
            👨‍👩‍👧 Parent Portal
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-dark small">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-muted">
                <User size={16} />
              </span>
              <input
                type="email"
                required
                className="form-control bg-light border-start-0 py-2"
                placeholder="Enter email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <label className="form-label fw-semibold text-dark small mb-0">Password</label>
              <a href="#forgot" className="text-purple small text-decoration-none">Forgot?</a>
            </div>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-muted">
                <Lock size={16} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="form-control bg-light border-start-0 border-end-0 py-2"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="input-group-text bg-light border-start-0 text-muted"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberCheck"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label text-muted small" htmlFor="rememberCheck">
              Keep me signed in on this device
            </label>
          </div>

          <button type="submit" className="btn-kid-primary w-100 justify-content-center py-2 mb-3">
            <LogIn size={18} />
            <span>Sign In to {roleTab === 'staff' ? 'Admin Portal' : 'Parent Account'}</span>
          </button>
        </form>

        {/* 1-Click Demo Fill Helpers */}
        <div className="p-3 bg-light rounded-3 text-center mb-3">
          <small className="text-muted d-block mb-2 fw-semibold">Quick Demo Login Shortcuts:</small>
          <div className="d-flex gap-2 justify-content-center">
            <button
              type="button"
              className="btn btn-sm btn-outline-primary rounded-pill px-3"
              onClick={() => handleRoleTabChange('staff')}
            >
              👩‍🏫 Demo Admin
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary rounded-pill px-3"
              onClick={() => handleRoleTabChange('parent')}
            >
              👨‍👩‍👧 Demo Parent
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="text-muted small text-decoration-none hover-purple">
            ← Return to School Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
