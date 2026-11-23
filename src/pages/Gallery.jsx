import React, { useState } from 'react';
import {
  Image as ImageIcon,
  PlusCircle,
  Calendar,
  Sparkles,
  Maximize2,
  X,
  Heart
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export default function Gallery() {
  const { gallery, setUploadPhotoModalOpen } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const categories = ['All', 'Classroom Fun', 'Sports Day', 'Art & Craft', 'Science Fair', 'Annual Fest'];

  const filteredPhotos = selectedCategory === 'All'
    ? gallery
    : gallery.filter(photo => photo.category === selectedCategory);

  return (
    <div className="gallery-page d-flex flex-column gap-4">
      {/* 1. Header Banner */}
      <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div>
          <span className="badge bg-pink-soft text-pink px-3 py-2 rounded-pill fw-bold mb-2">
            Moments of Wonder 📸
          </span>
          <h2 className="display-6 fw-bold text-dark mb-1">Little Champs Photo Memories</h2>
          <p className="text-muted mb-0 font-body">Catching every smile, muddy footprint, science experiment, and joyful milestone.</p>
        </div>

        <button
          className="btn-kid-secondary rounded-pill px-4 text-nowrap"
          onClick={() => setUploadPhotoModalOpen(true)}
        >
          <PlusCircle size={18} />
          <span>+ Upload Memory</span>
        </button>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="d-flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn rounded-pill px-4 py-2 fw-bold ${
              selectedCategory === cat
                ? 'btn-purple text-white shadow-sm'
                : 'btn-white bg-white text-muted border'
            }`}
            style={{
              backgroundColor: selectedCategory === cat ? '#7C3AED' : '#ffffff',
              color: selectedCategory === cat ? '#ffffff' : '#64748B'
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat} {cat === 'All' ? `(${gallery.length})` : ''}
          </button>
        ))}
      </div>

      {/* 3. Photo Grid */}
      <div className="row g-4">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="col-lg-4 col-md-6">
            <div
              className="card-kid bg-white border shadow-sm h-100 overflow-hidden position-relative group cursor-pointer"
              style={{ cursor: 'pointer' }}
              onClick={() => setLightboxPhoto(photo)}
            >
              <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-100 h-100 object-fit-cover"
                  style={{ transition: 'transform 0.4s ease' }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
                <span
                  className="badge bg-white text-purple shadow-sm position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill fw-bold"
                  style={{ fontSize: '0.78rem' }}
                >
                  {photo.category}
                </span>
                <button
                  className="btn btn-sm btn-light rounded-circle position-absolute bottom-0 end-0 m-3 p-2 shadow"
                  title="Enlarge"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h5 className="fw-bold text-dark mb-0 fs-6">{photo.title}</h5>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>{photo.date}</small>
                </div>
                <p className="text-muted small font-body mb-0" style={{ lineHeight: '1.5' }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1070 }}
          onClick={() => setLightboxPhoto(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content bg-transparent border-0">
              <div className="position-relative text-center">
                <button
                  className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow"
                  onClick={() => setLightboxPhoto(null)}
                >
                  <X size={20} />
                </button>
                <img
                  src={lightboxPhoto.image}
                  alt={lightboxPhoto.title}
                  className="img-fluid rounded-4 shadow-lg mb-3"
                  style={{ maxHeight: '70vh', objectFit: 'contain' }}
                />
                <div className="bg-white p-4 rounded-4 shadow text-start">
                  <span className="badge bg-purple-soft text-purple px-3 py-1 rounded-pill mb-2">
                    {lightboxPhoto.category}
                  </span>
                  <h4 className="fw-bold text-dark mb-1">{lightboxPhoto.title}</h4>
                  <p className="text-muted mb-0">{lightboxPhoto.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
