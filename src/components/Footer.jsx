import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolLogoSvg } from '../assets/illustrations';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Sparkles,
  Send
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-top mt-5 pt-5 pb-4">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row g-4 justify-content-between">
          {/* Brand & Mission */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <SchoolLogoSvg size={48} />
              <div>
                <h4 className="mb-0 text-purple fw-bold">Little Champs Kids School</h4>
                <small className="text-muted">A Premier Early Childhood Learning Center</small>
              </div>
            </div>
            <p className="text-muted font-body mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
              Nurturing joyful curiosity, compassionate hearts, and creative young minds through playful discovery, Montessori-inspired experiences, and loving educator guidance.
            </p>
            <div className="d-flex gap-2">
              <a href="#facebook" className="btn btn-light rounded-circle p-2 text-primary" title="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="#instagram" className="btn btn-light rounded-circle p-2 text-danger" title="Instagram">
                <FaInstagram size={16} />
              </a>
              <a href="#youtube" className="btn btn-light rounded-circle p-2 text-danger" title="YouTube">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold mb-3 text-dark">Our Programs</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
              <li><Link to="/programs" className="text-muted hover-purple">🎨 Playgroup (1.5 - 2.5y)</Link></li>
              <li><Link to="/programs" className="text-muted hover-purple">🧸 Nursery (2.5 - 3.5y)</Link></li>
              <li><Link to="/programs" className="text-muted hover-purple">🧩 Junior KG (3.5 - 4.5y)</Link></li>
              <li><Link to="/programs" className="text-muted hover-purple">🚀 Senior KG (4.5 - 5.5y)</Link></li>
              <li><Link to="/programs" className="text-muted hover-purple">🎈 Daycare & Creche</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold mb-3 text-dark">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
              <li><Link to="/about" className="text-muted hover-purple">About Little Champs</Link></li>
              <li><Link to="/admissions" className="text-muted hover-purple">Admissions 2026-27</Link></li>
              <li><Link to="/gallery" className="text-muted hover-purple">Campus Photo Gallery</Link></li>
              <li><Link to="/contact" className="text-muted hover-purple">Book Campus Tour</Link></li>
              <li><Link to="/login" className="text-muted hover-purple">Parent Portal Login</Link></li>
            </ul>
          </div>

          {/* Campus Location & Timings */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-dark">Campus & Contact</h5>
            <div className="d-flex flex-column gap-2 text-muted" style={{ fontSize: '0.9rem' }}>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={18} className="text-purple flex-shrink-0 mt-1" />
                <span>Plot 42, Sunshine Enclave, Green Valley Road, City Center - 600001</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={18} className="text-purple flex-shrink-0" />
                <span>+91 98765 43210 / +91 98111 22334</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Mail size={18} className="text-purple flex-shrink-0" />
                <span>admissions@littlechamps.edu</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Clock size={18} className="text-purple flex-shrink-0" />
                <span>Monday - Saturday: 8:00 AM - 6:30 PM</span>
              </div>
            </div>

            {/* Quick newsletter pill */}
            <div className="mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control rounded-start-pill border-end-0 py-2"
                  placeholder="Enter parent email for updates"
                  style={{ fontSize: '0.85rem' }}
                />
                <button className="btn btn-warning rounded-end-pill px-3 fw-bold" type="button">
                  <Send size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted" style={{ fontSize: '0.85rem' }}>
          <div>
            © {new Date().getFullYear()} Little Champs Kids School. All rights reserved. Play • Learn • Grow.
          </div>
          <div className="mt-2 mt-md-0 d-flex align-items-center gap-2">
            <span>Designed with</span>
            <Heart size={14} className="text-danger inline" />
            <span>for Happy Preschoolers & Parents</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
